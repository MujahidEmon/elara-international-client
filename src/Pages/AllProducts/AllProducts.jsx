import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AllProductCard from "../../Components/AllProductCard/AllProductCard";


const AllProducts = () => {
  const {allProducts} = useContext(AuthContext) 
    console.log(allProducts);
  return (
    <div className=" mx-auto px-6 lg:max-w-7xl max-w-lg my-12 md:max-w-4xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-base-400 my-6 sm:mb-8">
        All Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4  gap-2 md:gap-18">
        {allProducts.map((product, idx) => (
          <AllProductCard product={product} key={idx}></AllProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
