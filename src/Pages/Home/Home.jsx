import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import TrendingPart from "../../Components/TrendingPart/TrendingPart";

const Home = () => {

    
    
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div className="lg:max-w-7xl mx-auto max-w-sm">
                <TrendingPart></TrendingPart>
                <h1 className="text-3xl">Popular Now </h1>
            </div>
        </div>
    );
};

export default Home;