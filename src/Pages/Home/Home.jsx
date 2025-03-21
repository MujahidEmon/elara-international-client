import { useContext } from "react";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import TrendingPart from "../../Components/TrendingPart/TrendingPart";
import { AuthContext } from "../../Provider/AuthProvider";
import PopularProductCard from "../../Components/ProductCard/PopularProductCard";
import ProductCard from "../../Components/ProductCard/ProductCard";

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

     <div className="mt-32">
        <div className="text-center flex justify-center items-center flex-col space-y-4">
            <h1 className="lg: text-5xl font-semibold text-center">Choose Your Category</h1>
            <p className="lg:w-2xl ">Smartwatches provide quick access to notifications, calls, messages, and
            apps right on your wrist, reducing the constantly check your phone</p>
        </div>
        <div className="flex lg:flex-row justify-between lg:max-w-7xl mx-auto mt-12 gap-10">
          <div className="flex flex-col justify-center gap-3 items-center group cursor-pointer">
          <div className="w-52 h-52 rounded-full overflow-hidden relative">
                <img 
                  src="https://i.ibb.co.com/ZRZX4YbP/Rectangle-395.webp" 
                  
                  className="w-full h-full object-cover rounded-full transition-transform duration-300 absolute group-hover:scale-110"
                />
              </div>
            
            <h1 className="font-semibold text-2xl">Home Appliances</h1>
            <p>1 Item</p>
          </div>
          <div className="flex flex-col justify-center gap-3 group items-center cursor-pointer">
            <div className="w-52 h-52 relative overflow-hidden rounded-full">
              <img src="https://i.ibb.co.com/zWtqn9HS/Rectangle-396.webp" className="rounded-full object-cover transition-transform group-hover:scale-110 absolute :" alt="" />
            </div>
            <h1 className="font-semibold text-2xl">PC & Laptops</h1>
            <p>1 Item</p>
          </div>
          <div className="flex flex-col justify-center gap-3 items-center group cursor-pointer">
            <div className="h-52 w-52 relative rounded-full overflow-hidden">
              <img src="https://i.ibb.co.com/Hpn9ybzJ/Rectangle-397.webp" className="rounded-full transition-transform group-hover:scale-110 absolute" alt="" />  
            </div>
            <h1 className="font-semibold text-2xl">Kitchen Appliances</h1>
            <p>1 Item</p>
          </div>
          <div className="flex flex-col justify-center gap-3 group items-center cursor-pointer">
            <div className="relative h-52 w-52 overflow-hidden rounded-full">
              <img src="https://i.ibb.co.com/kgCfZ5Kt/Rectangle-398.webp" className="rounded-full absolute transition-transform group-hover:scale-110" alt="" />
            </div>
            <h1 className="font-semibold text-2xl">Phone & Tablet</h1>
            <p>1 Item</p>
          </div>
          <div className="flex flex-col justify-center gap-3 items-center group cursor-pointer">
            <div className="overflow-hidden rounded-full h-52 w-52 relative">
              <img src="https://i.ibb.co.com/V0jfqtxK/Rectangle-399.webp" className="rounded-full transition-transform group-hover:scale-110 absolute" alt="" />
            </div>
            <h1 className="font-semibold text-2xl">Accessories</h1>
            <p>1 Item</p>
          </div>
        </div>
     </div>



     {/* Highly Recommended Section */}
     
     <div className="mt-32 lg:max-w-7xl mx-auto">
            <div className="flex flex-col gap-4">
              <h1 className="lg:text-5xl text-3xl font-semibold ">Highly Recommended</h1>
              <p className="lg:w-2xl">Electronics products continue to drive innovation and shape the
              way we live, work, and interact with our environment.</p>
            </div>
            <div className="flex justify-between mt-12 flex-row gap-3">
              {products.map((product, idx) => (
                <ProductCard
                  key={idx}
                  product={product}
                ></ProductCard>
              ))}
            </div>
     </div>


     {/* Normal Carousel */}
    <div className="flex lg:flex-row text-white">
      <div className="w-1/3 h-64 flex flex-col justify-center  items-end px-11" style=
            {{
            backgroundImage:
                "url(https://i.ibb.co.com/sJW0vqdQ/banner-image-4.webp)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            }}>
        <p className="text-amber-700">VR Fest</p>
        <h1 className="text-white font-bold text-3xl">Latest QPad </h1>
        <button className="cursor-pointer border-b-2 text-white">Buy Now</button>
      </div>
      <div className="w-1/3 h-64 flex flex-col justify-center  items-end px-11 text-end" style=
            {{
            backgroundImage:
                "url(https://i.ibb.co.com/chZzWbwR/banner-image-5-c7660f9f-ff9c-4284-9885-de48ab56d108.webp)",
            backgroundRepeat: "no-repeat",
            // objectFit: "cover",
            backgroundPosition: "center",
            backgroundSize: "cover",
            }}>
              <p className="text-amber-700">VR Fest</p>
              <h1 className="text-white font-bold text-3xl">Latest QPad 
                    With Keyboard
                </h1>
                <button className="cursor-pointer border-b-2 text-white">Buy Now</button>
      </div>
      <div className="w-1/3 h-64 flex flex-col justify-center  items-end px-11 text-end" style=
            {{
            backgroundImage:
                "url(https://i.ibb.co.com/7dCKJPP0/banner-image-6.webp)",
            backgroundRepeat: "no-repeat",
            // objectFit: "cover",
            backgroundPosition: "center",
            backgroundSize: "cover",
            }}>
      <p className="text-amber-700">VR Fest</p>
      <h1 className="text-white font-bold text-end text-3xl">Latest QPad With Keyboard</h1>
                <button className="cursor-pointer border-b-2 text-white">Buy Now</button>
      </div>
    </div>



    </div>
  );
};

export default Home;
