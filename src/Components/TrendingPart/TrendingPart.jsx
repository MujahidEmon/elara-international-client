import { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { AuthContext } from "../../Provider/AuthProvider";

const TrendingPart = () => {
    const {products} = useContext(AuthContext)
    return (
        <div className="my-8 lg:max-w-7xl max-w-sm mx-auto">
            <h1 className="text-3xl font-semibold">Trending Products</h1>
            <div className="my-6 flex lg:flex-row flex-col items-center justify-between">
                {
                    products.map((product, idx) => <ProductCard key={idx} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default TrendingPart;