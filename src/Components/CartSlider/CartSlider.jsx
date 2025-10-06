import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const CartSlider = ({ showCartSlider, setShowCartSlider,  cartProducts}) => {
    return (
        <div>
            <AnimatePresence>
                {showCartSlider && (
                    <>
                        {/* Subtle overlay that won't make page completely black */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}  // Reduced opacity
                            exit={{ opacity: 0 }}
                            onClick={() => setShowCartSlider(false)}
                            className="fixed inset-0 bg-black z-40"
                        />

                        {/* Dark Theme Slider */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="fixed inset-y-0 right-0 w-full max-w-xs bg-black shadow-lg z-50 border-l border-gray-700"
                        >
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="flex justify-between items-center p-4 border-b border-gray-700">
                                    <h3 className="text-lg font-medium text-gray-100">Your Cart ({cartProducts.length})</h3>
                                    <button
                                        onClick={() => setShowCartSlider(false)}
                                        className="text-gray-400 hover:text-white text-xl"
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Cart Items */}
                                <div className="flex-1 overflow-y-auto p-4">
                                    {cartProducts.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col justify-between items-start py-4 border-b border-gray-700 w-full"
                                        >
                                            <div className="flex flex-col items-start w-full">
                                                <div className="flex w-full items-center justify-between">
                                                    <h4 className="text-sm font-medium text-left text-gray-100 truncate max-w-[80%]">
                                                        {item.productName}
                                                    </h4>
                                                    {/* <button onClick={() => handleRemoveFromCart(item._id)}>
                                                        <MdDeleteForever size={20} color="#FCAB35" />
                                                    </button> */}
                                                </div>
                                                <p className="text-gray-400">
                                                    {item.quantity}
                                                    <span> × </span>
                                                    <span className="text-[#FCAB35]">{item.price} Taka</span>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                                {/* Footer with buttons */}
                                <div className="p-4 border-t border-gray-700">
                                    <div className="flex justify-between mb-4 text-gray-100">
                                        <span className="font-medium">Total:</span>
                                        788
                                    </div>
                                    <div className="space-y-2">
                                        <Link
                                            to="/cart"
                                            onClick={() => setShowCartSlider(false)}
                                            className="block w-full text-center bg-gray-700 hover:bg-gray-600 text-gray-100 font-medium py-2 px-4 transition"
                                        >
                                            View Cart
                                        </Link>
                                        <Link
                                            to="/checkout"
                                            onClick={() => setShowCartSlider(false)}
                                            className="block w-full text-center bg-[#FCAB35] hover:bg-[#e6952a] text-gray-900 font-medium py-2 px-4 transition"
                                        >
                                            Checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

CartSlider.propTypes ={
    showCartSlider: PropTypes.bool,
    setShowCartSlider:PropTypes.func,
    product: PropTypes.object,
    cartProducts: PropTypes.array
}

export default CartSlider;