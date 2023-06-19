"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, History, Autoplay } from "swiper";
import { HeroImg1, HeroImg2, HeroImg3, HeroImg4 } from "@/public/assets";
import HeroSlide from "./HeroSlide";
import "../styles/Slider.css";

export default function Hero() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={true}
      history={{
        key: "slide",
      }}
      modules={[Navigation, Pagination, History]}
      className="mySwiper"
    >
      <SwiperSlide data-history="1" className=" mt-10">
        <HeroSlide
          imageSrc={HeroImg1}
          text={"Keep Calm and Go"}
          spanText={"Thrifting"}
          btnContent={"Shop Now"}
        />
      </SwiperSlide>
      <SwiperSlide data-history="Slide 2" className=" mt-10">
        <HeroSlide
          imageSrc={HeroImg2}
          text={"Unleash your style with "}
          spanText={"savings!"}
          btnContent={"Explore More"}
        />
      </SwiperSlide>
      <SwiperSlide data-history="3" className=" mt-16">
        <HeroSlide
          imageSrc={HeroImg3}
          text={"Upgrade your gadgets in"}
          spanText={"less"}
          btnContent={"Get Now"}
        />
      </SwiperSlide>
      <SwiperSlide data-history="Slide 4" className="mt-10">
        <HeroSlide
          imageSrc={HeroImg4}
          text={"Sell your preloved items"}
          spanText={"profit!"}
          btnContent={"Learn More"}
        />
      </SwiperSlide>
    </Swiper>
  );
}
