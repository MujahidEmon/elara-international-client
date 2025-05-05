import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AllProductCard from "../../Components/AllProductCard/AllProductCard";
import { useLoaderData } from "react-router-dom";

const AllProducts = () => {
  const {allProducts} = useContext(AuthContext) 
    console.log(allProducts);
  return (
    <div className=" mx-auto px-6 lg:max-w-7xl max-w-lg md:max-w-4xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">
        All Products
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-x-16">
        {allProducts.map((product, idx) => (
          <AllProductCard product={product} key={idx}></AllProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
