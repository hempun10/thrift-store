"use client";
import React, { useState, useEffect } from "react";
import ProductSlider from "@/components/ProductSlider";
import ProductDetail from "@/components/ProductDetail";
import ProductCarousel from "@/components/ProductCarousel";
import HeadingComp from "@/components/HeadingComp";
import Loader from "@/components/loader";
import { fetchProduct } from "@/lib/FetchData";

const ProductDetailPage = ({ params: { id } }) => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState(null);



  useEffect(() => {
    const fetchProductsData = async () => {
      const productsData = await fetchProduct(50);
      setProducts(productsData);
    };

    fetchProductsData();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const product = products.find((product) => product.id == id);
      setFilteredProduct(product);
    }
  }, [products, id]);

  if (!filteredProduct) {
    return <div className="flex justify-center items-center h-screen"><Loader /></div>;
  }

  const images = JSON.parse(filteredProduct.images);

  return (
    <div className=" bg-white">
      <div className=" flex p-20 bg-white max-lg:flex-col gap-10 max-lg:p-3 overflow-x-hidden  max-lg:gap-20">
        <ProductSlider images={images} />
        <ProductDetail filteredProduct={filteredProduct} />
      </div>
      <HeadingComp firstText="You" spanText="May" secondText="Like" />
      <ProductCarousel isSameFile={false} />
    </div>
  );
};

export default ProductDetailPage;

