import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllCategories = () => {
    const axiosPublic = useAxiosPublic();
    const {data: categories = [], refetch, isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const {data} = await axiosPublic.get('/categories');
            return data;
        }
    })

    return {categories, refetch, isLoading}
};

export default useAllCategories;