import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllProducts = (selectedCategory) => {

    const axiosPublic = useAxiosPublic();
    const {data: allProducts = [], refetch, isLoading} = useQuery({
        queryKey: ['allProducts', selectedCategory],
        queryFn: async () => {
            const url = selectedCategory ? `/products?category=${selectedCategory}` : '/products';
            const {data} = await axiosPublic.get(url);
            return data;
        }
    })

    return {allProducts, refetch, isLoading}
};

export default useAllProducts;