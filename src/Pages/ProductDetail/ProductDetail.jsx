import { useState } from "react";
import { FaStar } from "react-icons/fa";

const ProductDetail = () => {
  const product = {
    name: 'nam',
    price:123,
    oldPrice:1234,
    description:'ewqcwre',
    image:'https://i.ibb.co.com/xKMKCq3B/Black-and-orange-Creative-Electronic-Gadget-product-Promotion-Instagram-Post.png',
    thumbnails:['https://i.ibb.co.com/xKMKCq3B/Black-and-orange-Creative-Electronic-Gadget-product-Promotion-Instagram-Post.png','https://i.ibb.co.com/xKMKCq3B/Black-and-orange-Creative-Electronic-Gadget-product-Promotion-Instagram-Post.png'],
    colors:['red', 'green', 'blue'],
    reviews:"4",
  }

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
      {/* Left: Image + Thumbnails */}
      <div className="flex-1">
        <div className="border p-6 rounded-lg">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full object-contain"
          />
        </div>
        <div className="flex justify-start gap-4 mt-4">
          {product.thumbnails.map((thumb, idx) => (
            <img
              key={idx}
              src={thumb}
              onClick={() => setSelectedImage(thumb)}
              className={`w-16 h-16 object-contain rounded-lg border cursor-pointer transition ${
                selectedImage === thumb ? "border-blue-500" : "border-gray-200"
              }`}
              alt="thumb"
            />
          ))}
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
        <div className="flex items-center gap-2 mt-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-blue-500" />
          ))}
          <span className="text-gray-600 text-sm">{product.reviews} Reviews</span>
        </div>
        <p className="text-gray-600 mt-4">{product.description}</p>

        {/* Price */}
        <div className="mt-4 flex items-baseline gap-3">
          <h3 className="text-2xl font-semibold text-gray-900">${product.price}</h3>
          <span className="line-through text-gray-400">${product.oldPrice}</span>
          <span className="text-sm text-gray-500">Tax included</span>
        </div>

        {/* Color Options */}
        <div className="mt-6">
          <h4 className="font-semibold text-gray-800 mb-2">Choose a Color</h4>
          <div className="flex gap-3">
            {product.colors.map((color, idx) => (
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
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition">
            Buy now
          </button>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-semibold transition">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
