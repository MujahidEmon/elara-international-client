
import { useMutation, useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import useAxiosSecure from './useAxiosSecure';
import toast from 'react-hot-toast';
import useAuth from './useAuth';
import useLocalCart from '../Utils/useLocalCart';

const useDeleteCartItem = (product) => {
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();
    const { user } = useAuth();
    const { handleDeleteFromLs } = useLocalCart();
    const { mutateAsync } = useMutation({
        mutationFn: async () => {
            if (user) {
                const { data } = await axiosSecure.delete(`/cartProduct/${product?._id}`)
                return { data }
            }
            else return await handleDeleteFromLs(product);
        },
        onSuccess: () => {
            toast.success(`${product.productName} Removed From Cart`)
            queryClient.invalidateQueries(['cartProducts'])
        }
    })

    const handleDelete = async () => {
        return mutateAsync()
    }
    return { handleDelete }
};

useDeleteCartItem.propTypes = {

};

export default useDeleteCartItem;