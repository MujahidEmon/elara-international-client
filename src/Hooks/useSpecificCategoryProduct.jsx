import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSpecificCategoryProduct = (category) => {
    const axiosPublic = useAxiosPublic();

    const {data: products = [], isLoading, refetch} = useQuery({
        queryKey: ['products', category],
        queryFn: async () => {
            const url = `/products?category=${category}`;
            const {data} = await axiosPublic.get(url);
            return data;
        }
    });
    return {products, isLoading, refetch}
};

export default useSpecificCategoryProduct;