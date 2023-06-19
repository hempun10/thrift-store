/* eslint-disable react/prop-types */
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import "../styles/productCard.css";
import { useState } from "react";
import StarRating from "./StarRating";
// import { Img_placeholder } from "/assets/placeholder_img.webp";
import QuickView from "./QuickView";
import Image from "next/image";
import Link from "next/link";
const ProductCard = ({
  productName,
  price,
  rating = 3,
  isHoverdImg,
  isNotHoverImg,
  id,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  const hoverURL =
    isHoverdImg == undefined
      ? "/assets/placeholder_img.webp"
      : `https://api.thriftstorenepal.com/${isHoverdImg}`;
  const notHoverURL =
    isNotHoverImg == undefined
      ? "/assets/placeholder_img.webp"
      : `https://api.thriftstorenepal.com/${isNotHoverImg}`;

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const openQuickView = () => {
    setShowQuickView(true);
  };

  const closeQuickView = () => {
    setShowQuickView(false);
  };

  return (
    <div className="flex flex-col gap-4 max-sm:mt-5">
      <div
        className={`img_container w-[250px] h-[300px] rounded-xl overflow-hidden cursor-pointer bg-custom relative shadow-lg max-sm:m-auto`}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`icons_container absolute top-5 right-5 flex flex-col gap-2 opacity-0  ${
            isHover && "opacity-100"
          }`}
        >
          <div className="heart bg-white p-2 text-lg rounded-full hover:bg-black hover:text-white transition-all ">
            <AiOutlineHeart />
          </div>
          <div className="preview  bg-white p-2 text-lg rounded-full hover:bg-black hover:text-white transition-all">
            <AiOutlineEye onClick={openQuickView} />
          </div>
        </div>
        {isHover ? (
          <>
            <Image
              src={notHoverURL}
              alt={productName}
              className="h-full  w-auto"
              width={250}
              height={300}
            />
          </>
        ) : (
          <Image
            src={hoverURL}
            alt={productName}
            className=" h-full w-auto"
            width={250}
            height={300}
          />
        )}
        <div
          className={`button_container bg-white p-3 px-7 rounded-full absolute bottom-[5%] right-[23%] cursor-pointer hover:bg-black hover:text-white transition-all flex ${
            isHover ? "opacity-100" : "opacity-0"
          }`}
        >
          <button className=" text-[15px]">Add to Bag</button>
        </div>
      </div>
      <div className="text_wrapper flex flex-col max-sm:items-center">
        <Link href={`/product/${id}`} passHref>
          <p className="w-[40%] cursor-pointer hover:text-gray-600 text-[18px]">
            {productName}
          </p>
        </Link>
        <StarRating rating={rating} />
        <p>Rs. {price}</p>
      </div>
      {showQuickView && (
        <QuickView
          imgSrc={hoverURL}
          productName={productName}
          price={price}
          rating={rating}
          onClose={closeQuickView}
        />
      )}
    </div>
  );
};

export default ProductCard;
