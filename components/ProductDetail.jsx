import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const ProductDetails = ({ filteredProduct }) => {
  return (
    <div className="text_container flex-1 flex gap-4 flex-col max-sm:gap-9">
      <h1 className=" text-[4rem] max-sm:text-[3rem] max-sm:font-[500] max-lg:text-[3.7rem]">
        {filteredProduct.name}
      </h1>
      <h3 className=" text-xl text-gray-500">{filteredProduct.desc}</h3>
      <div className="feature flex  bg-gray-100 rounded-xl p-4 justify-around w-[70%] max-sm:w-[100%] max-sm:p-2 max-sm:flex-col max-sm:items-center max-sm:gap-7">
        <div className="feature_item">
          <h3 className=" uppercase text-gray-400 text-[13px]">
            Is Exchangeable
          </h3>
          <h2>
            {filteredProduct.is_exchangeable === 0 ? (
              <p> Exchangeable</p>
            ) : (
              <p> Not Exchangeable</p>
            )}
          </h2>
        </div>
        <div className="feature_item">
          <h3 className=" uppercase text-gray-400 text-[13px]">
            Is Refundable
          </h3>
          <h2>
            {filteredProduct.is_refundable === 0 ? (
              <p> Refundable</p>
            ) : (
              <p> Not Refundable</p>
            )}
          </h2>
        </div>
        <div className="feature_item flex justify-center items-center">
          <h2 className=" text-2xl font-semibold">
            Rs.{filteredProduct.price}
          </h2>
        </div>
      </div>
      <div className="btn_container flex gap-4 max-sm:m-auto max-lg:justify-center">
        <div className="btn_container bg-black text-white p-4 rounded-xl hover:outline-2 hover:outline hover:bg-white hover:text-black cursor-pointer  w-[40%] max-lg:w-[30%] text-center">
          <button className="btn">Add to Cart</button>
        </div>
        <div className="btn_container hover:bg-black hover:text-white p-4 rounded-xl outline-2 outline bg-white text-black cursor-pointer w-[40%] max-lg:w-[30%] text-center">
          <button className="btn flex justify-center items-center gap-1 m-auto">
            <AiOutlineHeart /> Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
