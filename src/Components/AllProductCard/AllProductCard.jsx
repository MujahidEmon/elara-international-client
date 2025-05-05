import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const AllProductCard = ({ product }) => {
  const { handleAddToCart } = useContext(AuthContext);

  return (
    <Link to={`/products/${product._id}`} className="group relative bg-white rounded-xl md:w-72 w-full overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col">
      {/* Image with hover zoom and gradient overlay */}
      <div className="relative overflow-hidden h-60">
        <img
          src={product.image}
          alt={product.productName}
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
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
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2 flex-grow">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
          {product.productName}
        </h3>
        <p className="text-gray-600 text-base">{product.price} Taka</p>
      </div>

      {/* Add to Cart Button */}
      <div className="p-4 pt-0">
        <button
          onClick={() => handleAddToCart(product)}
          className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-medium py-2 rounded-lg transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default AllProductCard;
