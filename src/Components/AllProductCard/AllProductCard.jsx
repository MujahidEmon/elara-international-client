import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";

const AllProductCard = ({ product }) => {
  const { handleAddToCart } = useContext(AuthContext);

  return (
    <div className="group relative  bg-base rounded-sm md:w-64 w-40 overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col">
      {/* Image with hover zoom and gradient overlay */}
      <div className="relative overflow-hidden md:h-60 h-40">
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
      </div>

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
          onClick={() => handleAddToCart(product)}
          className="w-full bg-gradient-to-r flex items-center justify-center gap-2  text-[#FCAB35] font-semibold  text-sm md:text-xl transition duration-300"
        >
          <FaOpencart></FaOpencart>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AllProductCard;
