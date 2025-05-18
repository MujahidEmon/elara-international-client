import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Ratings data with unique IDs
const ratingsData = [
  {
    id: 1,
    name: "John Doe",
    img: "https://readymadeui.com/team-2.webp",
    stars: 3,
    review:
      "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
  },
  {
    id: 2,
    name: "Mark Adair",
    img: "https://readymadeui.com/team-3.webp",
    stars: 5,
    review:
      "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
  },
  {
    id: 3,
    name: "Simon Konecki",
    img: "https://readymadeui.com/team-4.webp",
    stars: 4,
    review:
      "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
  },
  {
    id: 4,
    name: "Emma Watson",
    img: "https://readymadeui.com/team-5.webp",
    stars: 4,
    review:
      "The food was great, and it arrived right on time. Staff were courteous and professional throughout.",
  },
  {
    id: 5,
    name: "David Smith",
    img: "https://readymadeui.com/team-6.webp",
    stars: 5,
    review:
      "Absolutely loved the experience. From ordering to delivery, everything was seamless and high quality.",
  },
];

// Star rating component
const Star = ({ filled }) => (
  <svg
    className={`w-4 h-4 ${filled ? "fill-purple-500" : "fill-gray-500"}`}
    viewBox="0 0 14 13"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
  </svg>
);

// Ratings component with Swiper
const Ratings = () => {
  return (
    <div className="max-w-7xl mb-10  mx-auto bg-transparent text-white px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="md:text-4xl text-2xl  text-white">What our happy clients say</h2>
        <p className="text-sm mt-6 font-extralight leading-relaxed text-gray-400">
          Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute
          sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        // pagination={{ clickable: true }}
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        speed={800}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-16 .custom-swiper"
      >
        {ratingsData.map(({ id, name, img, stars, review }) => (
          <SwiperSlide key={id}>
            <div className="flex flex-col items-center text-center px-3">
              <img
                src={img}
                className="w-24 h-24 rounded-full border-2 border-purple-500"
                alt={name}
              />
              <h4 className="text-sm font-semibold mt-6">{name}</h4>
              <div className="flex justify-center space-x-1 mt-2.5">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} filled={idx < stars} />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-gray-300 font-normal mt-6">{review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Ratings;
