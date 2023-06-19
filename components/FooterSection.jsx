import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const FooterSection = () => {
  return (
    <section className="pt-24 px-6 bg-white overflow-hidden text-black">
      <div className="container  mx-auto">
        <FooterTop />
        <FooterBottom />
      </div>
      <hr className="w-full h-[4px] text-black" />
      <p className=" text-center mt-6">&copy; 2023 Thrift Store Nepal</p>
    </section>
  );
};

export default FooterSection;
