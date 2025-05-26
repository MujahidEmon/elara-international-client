import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="relative lg:h-full h-72">
      <Swiper 
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Navigation, EffectFade]}
        className="swiper-banner"
        onSlideChange={() => {
          AOS.refresh();
        }}
      >
        <SwiperSlide>
          <div
            className="text-white lg:h-full h-72 content-center px-4 md:px-12 space-y-3"
            style={{
              backgroundImage: "url(https://i.ibb.co.com/V0Kn0p8D/slider-1400.webp)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div data-aos="fade-up" className="space-y-3 md:space-y-7">
              <h1 className="font-extralight text-2xl md:text-4xl lg:text-6xl">
                Next Generation<br /> Virtual Reality..
              </h1>
              <p className="text-xs md:text-lg font-extralight">
                VR is the most quick access to notifications, calls, messages,{" "}
                <br className="hidden md:block" />
                apps right on your wrist, reducing the constantly check.
              </p>
              <Link to={'/allProducts'}>
                <button className="btn btn-outline border-[#FCAB35] text-[#FCAB35] text-sm md:text-base">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div
            className="text-white lg:h-full h-72 content-center px-4 md:px-12 space-y-3"
            style={{
              backgroundImage: "url(https://i.ibb.co.com/QFfDMm6V/hero-small-group.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div data-aos="fade-up" className="space-y-3 md:space-y-7">
              <h1 className="font-extralight tracking-tight text-2xl md:text-4xl lg:text-5xl">
                Grab the best deal on<br /> <span className="font-semibold tracking-widest uppercase">Smartwatches</span>
              </h1>
              <p className="text-xs md:text-lg font-extralight">
                Smartwatches provide quick access to notifications, calls,
                messages, and <br className="hidden md:block" />
                apps right on your wrist, reducing the constantly check your
                phone.
              </p>
              <Link to={'/allProducts'}>
                <button className="btn btn-outline border-[#FCAB35] text-[#FCAB35] text-sm md:text-base">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev !text-[#FCAB35] !left-2 md:!left-4 !top-auto !bottom-4"></div>
      <div className="swiper-button-next !text-[#FCAB35] !right-2 md:!right-4 !top-auto !bottom-4"></div>
      
      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          position: absolute;
          width: 40px;
          height: 40px;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 20px;
          font-weight: bold;
        }
        @media (max-width: 768px) {
          .swiper-button-prev,
          .swiper-button-next {
            width: 30px;
            height: 30px;
          }
          .swiper-button-prev::after,
          .swiper-button-next::after {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;