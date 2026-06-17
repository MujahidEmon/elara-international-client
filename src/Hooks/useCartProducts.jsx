import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { getCartProducts } from "../Utils/LocalStroage";

const useCartProducts = () => {

    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();
    // const [cartProducts, setCartProducts] = useState([])
    const { data: cartProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['cartProducts'],
        enabled: !loading,
        queryFn: async () => {
            if (user) {
                const { data } = await axiosSecure.get(`/cartProducts/${user.email}`);
                return data;
            }
            else{
                return getCartProducts()
            }

        }
    })

    // !user && setCartProducts(getCartProducts());

    const totalCartPrice = cartProducts.reduce((sum, product) => sum + product.price * product.quantity, 0)

    
    return { cartProducts, refetch, isLoading, totalCartPrice }
};

export default useCartProducts;