import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const ProductDetail = () => {
    const { handleAddToCart } = useContext(AuthContext);
    const product = useLoaderData();
    const navigate = useNavigate();
    console.log(product);
    
    const [selectedImage, setSelectedImage] = useState(product.image);
    const handleBuyNow = () => {
        handleAddToCart(product);
        navigate('/checkout');

    }

    return (
        <div className="bg-base-100 p-6 rounded-3xl shadow-lg items-center flex flex-col md:flex-row md:gap-10 my-12 gap-5 max-w-6xl mx-auto">
            {/* Left: Image + Thumbnails */}
            <div className="flex-1">
                <div className=" ">
                    <img
                        src={selectedImage}
                        alt={product.name}
                        className="w-fit rounded-3xl  h-[500px] object-contain"
                    />
                </div>

            </div>

            {/* Right: Product Info */}
            <div className="flex-1">
                <h2 className="text-2xl font-bold text-base-content">{product.productName}</h2>
                <div className="flex items-center gap-2 mt-1">

                    {/* <span className="text-gray-600 text-sm">{product.reviews} Reviews</span> */}
                </div>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-3">
                    <h3 className="text-2xl font-semibold text-base-content">{product.price} Taka</h3>
                </div>

                {/* Color Options */}
                <div className="mt-6">
                    {/* <h4 className="font-semibold text-base-content mb-2">Choose a Color</h4> */}
                    <div className="flex gap-3">
                        {/* {product.colors.map((color, idx) => (
              <div
              key={idx}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full cursor-pointer border-2 transition ${
                selectedColor === color
                ? "border-blue-500"
                : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
                ></div>
                ))} */}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 ">
                    <button onClick={handleBuyNow} className="bg-[#FCAB35] hover:bg-amber-800 text-white px-6 py-3 rounded-md font-semibold transition">
                        Buy now
                    </button>
                    <button onClick={() => handleAddToCart(product)} className="border border-[#FCAB35] text-[#FCAB35] hover:bg-amber-800 hover:text-white px-6 py-3 rounded-md font-semibold transition">
                        Add to cart
                    </button>
                </div>
                <p className="text-base-content mt-4"><span className="font-bold">Details: </span>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
