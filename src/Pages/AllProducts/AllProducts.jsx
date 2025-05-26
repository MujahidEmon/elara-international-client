import { useEffect, useState } from "react";
import AllProductCard from "../../Components/AllProductCard/AllProductCard";
import axios from "axios";
import { FiFilter } from "react-icons/fi";
import { HashLoader } from "react-spinners";

const AllProducts = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // Initially loading true

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);  // start loading on fetch categories
        const res = await axios.get("https://elara-international-server.onrender.com/categories");
        setCategories(res.data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      } finally {
        setLoading(false);  // stop loading after categories fetch
      }
    };

    fetchCategories();
  }, []);

  // Fetch products based on selected category
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);  // start loading when fetching products

        const url = selectedCategory
          ? `https://elara-international-server.onrender.com/products?category=${selectedCategory}`
          : "https://elara-international-server.onrender.com/products";

        const res = await axios.get(url);
        setProducts(res.data);

      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);  // stop loading after products fetch
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  // If loading is true, show loader with some padding/centered
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <HashLoader color="#FCAB35" size={60} />
      </div>
    );
  }

  return (
    <div className="mx-auto px-6 lg:max-w-7xl max-w-lg my-12 md:max-w-4xl">

      <div className="flex flex-row items-center justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-base-400 my-6 sm:mb-8">
          All Products
        </h2>

        {/* Category Dropdown */}
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
            Select Category <FiFilter color="orange" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a
                onClick={() => setSelectedCategory("")}
                className={!selectedCategory ? "bg-[#FCAB35] text-white font-bold" : ""}
              >
                All Categories
              </a>
            </li>
            {categories.map((category, idx) => (
              <li key={idx}>
                <a
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-[#FCAB35] text-white font-bold" : ""}
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

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
