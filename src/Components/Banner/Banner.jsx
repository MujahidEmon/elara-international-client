import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "aos/dist/aos.css";
import { Navigation } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";
const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 100, // Offset from the top before animation starts
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="lg:h-full h-72">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div
            className="text-white lg:h-full h-72  content-center px-12 space-y-3 "
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/QFfDMm6V/hero-small-group.webp)",
              // objectFit: "cover",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div data-aos="fade-up" className="space-y-7">
              <h1 className="font-semibold text-2xl lg:text-6xl">
                Grab the best deal <br></br> on Smartwatches
              </h1>
              <p>
                Smartwatches provide quick access to notifications, calls,
                messages, and <br />
                apps right on your wrist, reducing the constantly check your
                phone.
              </p>
              <button className="btn btn-outline rounded-4xl">Shop Now</button>
            </div>
            {/* <div className="lg:max-w-7xl mx-auto w-fit  flex flex-col  ">
           </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="text-white lg:h-full h-72  content-center px-12 space-y-3 "
            style={{
              backgroundImage:
                "url(https://i.ibb.co.com/V0Kn0p8D/slider-1400.webp)",
              backgroundRepeat: "no-repeat",
              // objectFit: "cover",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div data-aos="fade-up" className="space-y-7">
              <h1 className="font-semibold text-2xl lg:text-6xl">
                Next Generation<br></br> Virtual Reality..
              </h1>
              <p>
                VR is the most quick access to notifications, calls, messages,{" "}
                <br />
                apps right on your wrist, reducing the constantly check.
              </p>
              <button className="btn btn-outline rounded-4xl">Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
