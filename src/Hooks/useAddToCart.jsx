import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCartProducts, saveToCart } from "../Utils/LocalStroage";

const useAddToCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user, tokenReady } = useAuth();
    const queryClient = useQueryClient();
    const [cartProducts, setCartProducts] = useState([]);
    
    const { mutateAsync } = useMutation({
        mutationFn: async (cartData) => {
            const { data } = await axiosSecure.post("/cartProducts", cartData);
            return data;
        },
        onSuccess: () => {
            toast.success("Cart updated successfully");
            queryClient.invalidateQueries(["cartProducts", user?.email]);
        },
        onError: (error) => {
            console.error("Error adding to cart:", error);
            toast.error("Failed to update cart");
        },
    });


    const handleAddToCart = async (product) => {
        const newCartProduct = { ...product, productId: product._id };
        delete newCartProduct._id;

        if (user && user.email) {
            try {
                await mutateAsync(newCartProduct);
            } catch (error) {
                console.error("Error adding to cart:", error);
                setCartProducts((prev) =>
                    prev.filter((p) => p._id !== (product._id || product.id))
                );
            }
        } else {
            saveToCart({ ...newCartProduct, quantity: 1 });
            const products = getCartProducts();
            setCartProducts(products);
        }
    };


    const syncLocalCart = async () => {
        const localCart = getCartProducts();
        if (!localCart.length) return;

        if (tokenReady) {
            try {
                const productsToSend = localCart.map((p) => ({
                    ...p,
                    productId: p.productId || p._id || p.id,
                }));

                await mutateAsync(productsToSend);
                localStorage.removeItem("cartProducts");
            } catch (err) {
                console.error("Cart sync failed:", err);
                toast.error("Failed to sync cart");
            }
        }
    };

    return { handleAddToCart, syncLocalCart, cartProducts };
};

export default useAddToCart;
