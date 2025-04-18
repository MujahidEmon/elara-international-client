import toast from "react-hot-toast";

// funtions to get item from localStorage
export const getCartProducts = () => {
    let cartProducts = [];
    const storedCartProducts = localStorage.getItem('cartProducts')
    if(storedCartProducts){
        cartProducts = JSON.parse(storedCartProducts)
    }
    return cartProducts;
} 


// funtions to store item

export const saveToCart = (product) => {
    let cartProducts = getCartProducts();

    const isExist = cartProducts.find(p => p._id ===product._id)

    if(isExist){
        return toast.error('already added to cart')
    }

    cartProducts.push(product)

    localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
    toast.success('added to cart')
}


export const deleteFromCart = (_id) => {
    let cartProducts = getCartProducts()

    const remaining = cartProducts.filter(b => b._id !==_id)
    localStorage.setItem('cartProducts', JSON.stringify(remaining))
    toast.success('Removed From Cart')


}


