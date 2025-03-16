import { useContext } from "react";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import TrendingPart from "../../Components/TrendingPart/TrendingPart";
import { AuthContext } from "../../Provider/AuthProvider";
import PopularProductCard from "../../Components/ProductCard/PopularProductCard";

const Home = () => {
  const { products } = useContext(AuthContext);
  // console.log(products);
  return (
    <div>
      <Banner></Banner>

      {/*  */}
      <div className="max-w-lvw flex lg:flex-row flex-col">
        <div className="w-1/3 h-72 content-center  px-11" style=
            {{
            backgroundImage:
                "url(https://i.ibb.co.com/prhfZ1Cg/banner-image.webp)",
            backgroundRepeat: "no-repeat",
            // objectFit: "cover",
            backgroundPosition: "center",
            backgroundSize: "cover",
            }}>
                <p className="text-base text-red-500">New Arrival</p>
                <h1 className="text-white font-bold text-3xl">Latest QPad <br />
                    With Keyboard
                </h1>
                <button className="cursor-pointer border-b-2 text-white">Buy Now</button>
            
        </div>
        <div className="w-1/3 h-72 content-center  px-11" style=
            {{
            backgroundImage:
                "url(https://i.ibb.co.com/rf3kprph/banner-image-2.webp)",
            backgroundRepeat: "no-repeat",
            // objectFit: "cover",
            backgroundPosition: "center",
            backgroundSize: "cover",
            }}>
                <p className="text-base text-red-500">New Arrival</p>
                <h1 className="text-white font-bold text-3xl">Latest QPad <br />
                    With Keyboard
                </h1>
                <button className="cursor-pointer border-b-2 text-white">Buy Now</button>
            
        </div>
        <div className="w-1/3 h-72 content-center  px-11" style=
            {{
            backgroundImage:
                "url(https://i.ibb.co.com/8DYHLnwk/banner-image-3.webp)",
            backgroundRepeat: "no-repeat",
            // objectFit: "cover",
            backgroundPosition: "center",
            backgroundSize: "cover",
            }}>
                <p className="text-base text-red-500">New Arrival</p>
                <h1 className="text-white font-bold text-3xl">Latest QPad <br />
                    With Keyboard
                </h1>
                <button className="cursor-pointer border-b-2 text-white">Buy Now</button>
            
        </div>
      </div>


     {/* Category Section */}

     <div className="mt-12">
        <div className="text-center space-y-4">
            <h1 className="lg: text-5xl font-semibold text-center">Choose Your Category</h1>
            <p>Smartwatches provide quick access to notifications, calls, messages, and
            apps right on your wrist, reducing the constantly check your phone</p>
        </div>
     </div>


      <div className="lg:max-w-7xl mx-auto max-w-sm">
        <TrendingPart></TrendingPart>
        <h1 className="text-3xl mt-24 font-fredoka font-semibold">
          Popular Now{" "}
        </h1>
        <div className="flex justify-between flex-row gap-3">
          {products.map((product, idx) => (
            <PopularProductCard
              key={idx}
              product={product}
            ></PopularProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
