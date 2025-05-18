import { useEffect, useState } from "react";
import AllProductCard from "../../Components/AllProductCard/AllProductCard";
import axios from "axios";
import { FiFilter } from "react-icons/fi";

const AllProducts = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("https://elara-international-server.onrender.com/categories");
        setCategories(res.data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch products based on selected category from server
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = selectedCategory
          ? `https://elara-international-server.onrender.com/products?category=${selectedCategory}`
          : "https://elara-international-server.onrender.com/products";

        const res = await axios.get(url);
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <div className="mx-auto px-6 lg:max-w-7xl max-w-lg my-12 md:max-w-4xl">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold text-base-400 my-6 sm:mb-8">
          All Products
        </h2>

        {/* Category Dropdown */}
        <div onChange={(e) => setSelectedCategory(e.target.value)} className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">Select Category  <FiFilter color="orange"></FiFilter></div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a
                onClick={() => setSelectedCategory("")}
                className={!selectedCategory ? "bg-[#FCAB35] text-white font-bold" : ""}
              >
                All Categories
              </a>
            </li>
            {
              categories.map((category, idx) => <li key={idx}><a onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-[#FCAB35] text-white font-bold" : ""}>{category}</a></li>)
            }
          </ul>
        </div>
      </div>


      {/* <div className="mb-6 max-w-xs">
          <label
            htmlFor="categoryFilter"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Filter by Category
          </label>
          <select
            id="categoryFilter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm text-gray-800"
          >
            <option value="">All Categories</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div> */}

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {products.map((product, idx) => (
          <AllProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
