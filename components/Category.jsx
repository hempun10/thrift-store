"use client";
import axios from "axios";
import { Accessories, Bag, Clothing, MakeUp, Shoes } from "@/public/assets";
import { useEffect, useState } from "react";
import Image from "next/image";
import HeadingComp from "./HeadingComp";

const imgArr = [Clothing, Accessories, Bag, Shoes, MakeUp];

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.thriftstorenepal.com/api/all-categories"
        );
        const data = response.data;
        setCategories(data.data.slice(0, 5));
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="category_wrapper p-[5%] flex flex-col justify-around bg-white ">
      <HeadingComp
        firstText="Shop by"
        spanText="Category"
        subText=" Go through our categories you might like"
      />
      <div className="wrapper flex p-2 justify-between mt-4 max-sm:flex-wrap ">
        {categories.map((category, index) => {
          return (
            <div
              className="category_wrapper flex flex-col items-center gap-3 cursor-pointer"
              key={index}
            >
              <div className="img_container w-[120px] h-[120px] rounded-full bg-black overflow-hidden  shadow-lg shadow-black-500/50">
                <Image
                  src={imgArr[index]}
                  alt="img"
                  className="object-cover transition ease-in-out delay-150  hover:scale-125 duration-300"
                />
              </div>
              <h3 className=" content-center text-[1.1rem] text-black font-custom">
                {category.category_name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Category;
