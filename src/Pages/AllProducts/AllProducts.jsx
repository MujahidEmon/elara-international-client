import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AllProductCard from "../../Components/AllProductCard/AllProductCard";
import { useLoaderData } from "react-router-dom";

const AllProducts = () => {
    const products = useLoaderData();
    console.log(products);
  return (
    <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">
        All Products
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product, idx) => (
          <AllProductCard product={product} key={idx}></AllProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
