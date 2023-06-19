"use client";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import HeadingComp from "./HeadingComp";
import { fetchProduct } from "@/lib/FetchData";
const Product = () => {
  const [products, setproducts] = useState([]);
  const [paginateNum, setPaginateNum] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProduct(paginateNum);
      setproducts(data);
    };

    fetchData();
  }, [paginateNum]);

  const handleLoadData = (e) => {
    e.preventDefault();
    setPaginateNum((prevPaginateNum) => prevPaginateNum + 12);
  };
  return (
    <div className="product_wrapper bg-white">
      <HeadingComp
        firstText="Top"
        spanText="Trending"
        subText="Here’s some of our most popular products people are in love with."
      />
      <div className="productWrapper flex flex-col max-sm:gap-7 ">
        <div className="single_productWrapper p-9 ml-9 grid grid-cols-4 gap-4 max-sm:text-center max-lg:grid-cols-3 max-lg:ml-0 max-lg:p-1 max-lg:gap-2 max-sm:grid-cols-1 max-sm:gap-6">
          {products.map((product, index) => {
            const images = JSON.parse(product.images);
            return (
              <ProductCard
                key={index}
                productName={product.name}
                price={product.price}
                isHoverdImg={images[0]}
                isNotHoverImg={images[1]}
                rating={parseInt(product.condition)}
                id={product.id}
              />
            );
          })}
        </div>
        <div className="button_container border p-3 rounded-full hover:bg-black hover:outline-0 hover:text-white w-[15%] text-lg cursor-pointer bg-white text-black outline-black outline max-sm:w-[50%] max-sm:p-2 max-sm:m-auto text-center m-auto max-lg:w-[20%] ">
          <button type="button" onClick={handleLoadData}>
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
