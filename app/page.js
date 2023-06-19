import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Product from "@/components/Product";
import ProductCarousel from "@/components/ProductCarousel";

export default function Home() {
  return (
    <main>
      <Hero />
      <Category />
      <Product />
      <Offer />
      <ProductCarousel />
    </main>
  )
}
