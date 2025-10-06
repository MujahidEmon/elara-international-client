import { useState } from "react";
import AllProductCard from "../../Components/AllProductCard/AllProductCard";
import { FiFilter } from "react-icons/fi";
import useAllProducts from "../../Hooks/useAllProducts";
import LoadingSpinner from "../../Components/Loader/LoadingSpinner";
import useAllCategories from "../../Hooks/useAllCategories";

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { allProducts, isLoading} = useAllProducts(selectedCategory);
  
  // Fetch categories
  const {categories, isLoading: categoriesLoading} = useAllCategories();
  if(categoriesLoading || isLoading) return <LoadingSpinner></LoadingSpinner>

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
        {allProducts.map((product, idx) => (
          <AllProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
