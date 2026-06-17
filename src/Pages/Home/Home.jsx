import Banner from "../../Components/Banner/Banner";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AllProductCard from "../../Components/AllProductCard/AllProductCard";
import AllTrimmers from "../../Components/AllTrimmers/AllTrimmers";
import Ratings from "../../Components/Ratings/Ratings";
import { HashLoader } from "react-spinners";
import useAllProducts from "../../Hooks/useAllProducts";

const Home = () => {
  const { allProducts, isLoading: loading } = useAllProducts()

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

      

      {/* Featured Section */}
      <div className="my-14 lg:my-32 px-4 text-center space-y-5 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-3xl lg:text-5xl ">Featured Products</h1>
          <p className="max-w-2xl font-extralight">
            Electronics allProducts continue to drive innovation and shape the way we live, work, and interact with our environment.
          </p>
        </div>

        {
          loading ? <div className="min-h-screen flex items-center justify-center">
            <HashLoader color="#FCAB35" size={60} />
          </div> :
            <div className="md:flex grid grid-cols-2 md:flex-row flex-wrap px-4 md:px-0 md:gap-18 gap-2  mt-12">
              {[...allProducts]
                .reverse() 
                .slice(0, 8)
                .map((product, idx) => (
                  <AllProductCard key={product._id} product={product} />
                ))}
            </div>
        }
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
