import ProductCard from "../ProductCard/ProductCard";

const TrendingPart = () => {
    return (
        <div className="my-8 lg:max-w-7xl max-w-sm mx-auto">
            <h1 className="text-3xl font-semibold">Trending Products</h1>
            <div className="my-6 flex lg:flex-row flex-col justify-between">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
};

export default TrendingPart;