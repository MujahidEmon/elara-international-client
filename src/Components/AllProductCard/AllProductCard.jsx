import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FcDeleteRow } from "react-icons/fc";
import { FiDelete } from "react-icons/fi";
import { MdDeleteForever, MdOutlineDelete } from "react-icons/md";

const AllProductCard = ({ product }) => {
  const { handleAddToCart, cartProducts, totalPrice, handleRemoveFromCart } = useContext(AuthContext);
  const [showCartSlider, setShowCartSlider] = useState(false);

  const addToCartWithFeedback = (product) => {
    handleAddToCart(product);
    setShowCartSlider(true);

    // Auto-hide after 8 seconds
    setTimeout(() => setShowCartSlider(false), 10000);
  };

  return (
    <div className="group relative bg-base rounded-sm md:w-64 w-40 overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col">
      {/* Image with hover zoom and gradient overlay */}
      <Link
        to={`/products/${product._id}`}
        className="relative overflow-hidden md:h-60 h-40"
      >
        <img
          src={product.image}
          alt={product.productName}
          className="w-full h-full rounded-sm object-cover transform group-hover:scale-110 transition duration-500"
        />
        {/* Gradient overlay for readability */}
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
        {/* Wishlist Icon */}
        <div className="absolute top-2 right-2 bg-white/80 p-2 rounded-full hover:bg-red-100 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            className="fill-red-500"
            viewBox="0 0 64 64"
          >
            <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
          </svg>
        </div>
      </Link>

      {/* Product Info */}
      <div className="py-2 text-center space-y-2 flex-grow">
        <h3 className="md:text-xl text-sm font-bold text-base-400 line-clamp-2">
          <Link to={`/products/${product._id}`}>{product.productName}</Link>
        </h3>
        <p className="text-base-400 text-sm">{product.price} Taka</p>
      </div>

      {/* Add to Cart Button */}
      <div className="p-4 pt-0">
        <button
          onClick={() => addToCartWithFeedback(product)}
          className="w-full bg-gradient-to-r flex items-center justify-center gap-2 text-[#FCAB35] font-semibold text-sm md:text-xl transition duration-300 hover:text-[#e6952a]"
        >
          <FaOpencart />
          Add to Cart
        </button>
      </div>

      {/* Cart Slider with Fixed Overlay Issue */}
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
                          <button onClick={() => handleRemoveFromCart(item._id)}>
                            <MdDeleteForever size={20} color="#FCAB35" />
                          </button>
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
                    {totalPrice}
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

export default AllProductCard;