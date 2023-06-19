import Category from "./Category";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Offer from "./Offer";
import ProductCarousel from "./ProductCarousel";
import FooterSection from "./FooterSection";
import Product from "./Product";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Product />
      <Offer />
      <ProductCarousel />
      <FooterSection />
    </div>
  );
};

export default Home;
