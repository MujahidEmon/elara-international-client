import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCartProducts = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    console.log(user);
    const { data: cartProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['cartProducts', user?.email],
        enabled: !!user,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/cartProducts/${user.email}`);
            return data;
        }
    })

    const totalCartPrice = cartProducts.reduce((sum, product) => sum + product.price * product.quantity, 0)

    return {cartProducts, refetch, isLoading, totalCartPrice}
};

export default useCartProducts;