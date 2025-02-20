import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src="/src/assets/Elara cover.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/src/assets/BANNER2.svg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="/src/assets/Banner3.svg" alt="" /></SwiperSlide>
                {/* <SwiperSlide><img src="/src/assets/Blue and Yellow Simple Gadgets Youtube Thumbnail.svg" alt="" /></SwiperSlide> */}
                
            </Swiper>
        </div>
    );
};

export default Banner;