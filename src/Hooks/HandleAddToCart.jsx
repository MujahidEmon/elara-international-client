import toast from "react-hot-toast";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCartProducts, saveToCart } from "../Utils/LocalStroage";
import { useState } from "react";

const HandleAddToCart = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const queryClient = useQueryClient()
    const [cartProducts, setCartProducts] = useState([])
    const { mutateAsync } = useMutation({
        mutationFn: async (newCartProduct) => {
            const { data } = await axiosSecure.post('/cartProducts', newCartProduct)
            return data;
        },
        onSuccess: () => {
            toast.success("Product added to cart");
            // Optionally refetch or update cart state here
            queryClient.invalidateQueries(['cartProducts']);
        },
        onError: (error) => {
            console.error("Error adding to cart:", error);
        }
    })
    const handleAddToCart = async (product) => {
        const newCartProduct = {
            ...product,
            quantity: 1,
            email: user?.email,
        };
        delete newCartProduct._id;


        if (user && user.email) {
            try {
                await mutateAsync(newCartProduct)
                toast.loading("Adding to cart...");

            } catch (error) {
                console.error("Error adding to cart:", error);
                // Rollback on error
                setCartProducts(prev => prev.filter(p => p._id !== (product._id || product.id)));
                toast.error("Failed to add to cart");
            }
        } else {
            // Guest user handling
            saveToCart({...product, quantity: 1});
            const products = getCartProducts();
            setCartProducts(products);
            toast.success("Added to cart");
        }
    };
    return [handleAddToCart, cartProducts];
};

export default HandleAddToCart;