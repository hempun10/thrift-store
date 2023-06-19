"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, History } from "swiper";
import ProductCard from "./ProductCard";
import HeadingComp from "./HeadingComp";
import { fetchProduct } from "@/lib/FetchData";

const ProductCarousel = ({ isSameFile = true }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProduct(9);
      setProduct(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white">
      {isSameFile && (
        <HeadingComp
          firstText="You"
          spanText="Must"
          secondText="Have"
          subText="Here’s some of our most popular products people are in love with."
        />
      )}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        centeredSlides={true}
        navigation={true}
        autoplay={{
          delay: 2500,
        }}
        history={{
          key: "slide",
        }}
        modules={[Navigation, Pagination, History]}
        className="mySwiper bg-white"
        breakpoints={{
          // when window width is >= 768px (tablet)
          768: {
            slidesPerView: 4,
          },
          // when window width is >= 480px (phone)
          480: {
            slidesPerView: 1,
          },
        }}
      >
        {product.map((item, index) => {
          const images = JSON.parse(item.images);
          return (
            <SwiperSlide
              key={index}
              data-history={`Slide ${index + 1}`}
              className="bg-white max-lg:ml-[5rem] max-sm:ml-0 max-sm:text-center"
            >
              <ProductCard
                productName={item.name}
                price={item.price}
                isHoverdImg={images[0]}
                isNotHoverImg={images[1]}
                rating={parseInt(item.condition)}
                id={item.id}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
