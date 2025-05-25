import Banner from "../../Components/Banner/Banner";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import AllProductCard from "../../Components/AllProductCard/AllProductCard";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AllTrimmers from "../../Components/AllTrimmers/AllTrimmers";
import Ratings from "../../Components/Ratings/Ratings";

const Home = () => {
  const {allProducts} = useContext(AuthContext) 
  console.log(allProducts);

  return (
    <div>
      <Banner />

      {/* Fixed Background Animation Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="h-screen md:flex hidden items-center justify-center text-white px-4 md:px-6"
        style={{
          backgroundImage: "url('https://i.ibb.co/sJW0vqdQ/banner-image-4.webp')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-medium mb-4">Explore the Future of Tech</h1>
          <p className="text-base md:text-lg">Scroll Down And Jump To The Tech World</p>
        </div>
      </motion.div>

      {/* 3 Banners Section */}
        {/* <div data-aos="fade-up" className="max-w-screen-xl mx-auto flex flex-col lg:flex-row">
          {[
            "https://i.ibb.co.com/prhfZ1Cg/banner-image.webp",
            "https://i.ibb.co.com/rf3kprph/banner-image-2.webp",
            "https://i.ibb.co.com/8DYHLnwk/banner-image-3.webp",
          ].map((url, idx) => (
            <div
              key={idx}
              className="w-full lg:w-1/3 h-72 content-center px-6 py-6"
              style={{
                backgroundImage: `url(${url})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <p className="text-base text-red-500">New Arrival</p>
              <h1 className="text-white font-bold text-2xl md:text-3xl leading-tight">
                Latest QPad <br /> With Keyboard
              </h1>
              <button className="mt-2 cursor-pointer border-b-2 text-white">Buy Now</button>
            </div>
          ))}
        </div> */}

      {/* Category Section */}
      {/* <div className="mt-12 lg:mt-32 px-4">
        <div className="text-center flex justify-center items-center flex-col space-y-4">
          <h1 className="text-3xl lg:text-5xl font-semibold">Choose Your Category</h1>
          <p className="max-w-2xl">
            Smartwatches provide quick access to notifications, calls, messages, and apps right on your wrist, reducing the need to constantly check your phone.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-12 max-w-screen-xl mx-auto">
          {[
            {
              title: "Home Appliances",
              url: "https://i.ibb.co.com/ZRZX4YbP/Rectangle-395.webp",
            },
            {
              title: "PC & Laptops",
              url: "https://i.ibb.co.com/zWtqn9HS/Rectangle-396.webp",
            },
            {
              title: "Kitchen Appliances",
              url: "https://i.ibb.co.com/Hpn9ybzJ/Rectangle-397.webp",
            },
            {
              title: "Phone & Tablet",
              url: "https://i.ibb.co.com/kgCfZ5Kt/Rectangle-398.webp",
            },
            {
              title: "Accessories",
              url: "https://i.ibb.co.com/V0jfqtxK/Rectangle-399.webp",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center gap-3 group cursor-pointer"
            >
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden relative">
                <img
                  src={item.url}
                  className="w-full h-full object-cover rounded-full transition-transform duration-300 absolute group-hover:scale-110"
                  alt={item.title}
                />
              </div>
              <h1 className="font-semibold text-xl md:text-2xl">{item.title}</h1>
              <p>1 Item</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Featured Section */}
      <div className="my-14 lg:my-32 px-4 text-center space-y-5 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-3xl lg:text-5xl ">Featured Products</h1>
          <p className="max-w-2xl font-extralight">
            Electronics allProducts continue to drive innovation and shape the way we live, work, and interact with our environment.
          </p>
        </div>
        <div className="md:flex grid grid-cols-2 md:flex-row flex-wrap px-4 md:px-0 md:gap-18 gap-2  mt-12">
          {allProducts.slice(0,4).map((product, idx) => (
            <AllProductCard key={idx} product={product}></AllProductCard>
          ))}
        </div>
        <button className="btn btn-outline tracking-wider border-[#FCAB35] hover:bg-[#FCAB35] hover:text-white  hover:scale-110 text-[#FCAB35]"><Link to={'/allProducts'}>View All</Link></button>
      </div>


      {/* Best Trimmer Section */}
        <div className="my-14 lg:my-32 px-4 max-w-screen-xl mx-auto">
          <AllTrimmers></AllTrimmers>
        </div>



      <Ratings></Ratings>
      {/* Carousel Section */}
      <div className="flex flex-col lg:flex-row text-white">
        {[
          "https://i.ibb.co.com/sJW0vqdQ/banner-image-4.webp",
          "https://i.ibb.co.com/chZzWbwR/banner-image-5-c7660f9f-ff9c-4284-9885-de48ab56d108.webp",
          "https://i.ibb.co.com/7dCKJPP0/banner-image-6.webp",
        ].map((url, idx) => (
          <div
            key={idx}
            className="w-full lg:w-1/3 h-64 flex flex-col justify-center items-end px-6 py-8 text-right"
            style={{
              backgroundImage: `url(${url})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <p className="text-amber-700">VR Fest</p>
            <h1 className="text-white font-bold text-2xl md:text-3xl">
              Latest QPad {idx === 1 ? "With Keyboard" : ""}
            </h1>
            <button className="mt-2 cursor-pointer border-b-2 text-white">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
