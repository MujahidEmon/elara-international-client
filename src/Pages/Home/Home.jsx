import { useContext } from "react";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import TrendingPart from "../../Components/TrendingPart/TrendingPart";
import { AuthContext } from "../../Provider/AuthProvider";
import PopularProductCard from "../../Components/ProductCard/PopularProductCard";

const Home = () => {

    const {products} = useContext(AuthContext);
    // console.log(products);
    return (
        <div>
            <Banner></Banner>
            {/* <Services></Services> */}
            <div className="lg:max-w-7xl mx-auto max-w-sm">
                <TrendingPart></TrendingPart>
                <h1 className="text-3xl mt-24 font-fredoka font-semibold">Popular Now </h1>
                <div className="flex justify-between flex-row gap-3">
                    {
                        products.map((product,idx) => <PopularProductCard key={idx} product={product}></PopularProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;