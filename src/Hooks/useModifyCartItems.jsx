import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "./useAuth";
import useLocalCart from "../Utils/useLocalCart";

const useModifyCartItems = (product) => {
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();
    const { user } = useAuth();
    const { handleIncreaseLs, handleDecreaseLs } = useLocalCart();
    
    const { mutateAsync } = useMutation({
        mutationFn: async (modQuantity) => {
            if (user?.email) {
                const { data } = await axiosSecure.patch(`/cartProducts/${product?._id}`, { modQuantity });
                console.log(data);
                return data;
            }

            if (modQuantity === 1) {
                handleIncreaseLs(product.productId);
                toast.success("Quantity increased");
            } else {
                // Decrease logic for local
                handleDecreaseLs(product.productId);
                toast.success("Quantity decreased");
            }

            return { local: true }; // indicator for local update
        },
        onSuccess: (data) => {
            if (data.deleted) {
                toast.success("Item removed from cart");
            } else {
                toast.success("Cart updated");
            }
            queryClient.invalidateQueries(['cartProducts']);
        },
        onError: (error) => {
            if (error.response?.status !== 404) {
                toast.error(error.response?.data?.message || "Failed to update cart");
            }
        },


    })

    const handleIncrease = async () => await mutateAsync(1)


    const handleDecrease = async () => await mutateAsync(-1)

    return { handleIncrease, handleDecrease }
};

export default useModifyCartItems;