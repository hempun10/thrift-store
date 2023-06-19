import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "@/styles/Slider.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
const ProductSlider = ({ images }) => {
  return (
    <Swiper
      pagination={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper flex-1 rounded-lg max-sm:rounded-none  max-lg:w-[100%] max-lg:h-[50vh] "
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={`https://api.thriftstorenepal.com/${image}`}
            alt="product"
            className="w-full h-full object-cover rounded-lg max-sm:rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
