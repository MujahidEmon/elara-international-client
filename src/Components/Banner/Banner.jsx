import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // 👈 for fade effect
import "aos/dist/aos.css";
// import { Navigation } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
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
      <Swiper navigation={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Navigation, EffectFade]}
        className="swiper-banner"
        onSlideChange={() => {
          AOS.refresh(); // 👈 Trigger AOS to re-animate
        }}>
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
              <h1 className="font-extralight tracking-tight text-2xl lg:text-5xl">
                Grab the best deal on<br></br> <span className="font-semibold tracking-widest uppercase">Smartwatches</span>
              </h1>
              <p className="font-extralight">
                Smartwatches provide quick access to notifications, calls,
                messages, and <br />
                apps right on your wrist, reducing the constantly check your
                phone.
              </p>
              <Link to={'/allProducts'}><button className="btn btn-outline border-[#FCAB35] text-[#FCAB35]">Shop Now</button></Link>
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
              <h1 className="font-extralight text-2xl lg:text-6xl">
                Next Generation<br></br> Virtual Reality..
              </h1>
              <p className="font-extralight">
                VR is the most quick access to notifications, calls, messages,{" "}
                <br />
                apps right on your wrist, reducing the constantly check.
              </p>
              <button className="btn btn-outline border-[#FCAB35] text-[#FCAB35]">Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
