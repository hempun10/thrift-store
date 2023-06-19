import { HeroImg1, HeroImg2 } from "@/public/assets";
import OfferContainer from "./OfferContainer";

const Offer = () => {
  return (
    <div className="bg-white flex p-9 gap-[2rem] max-sm:flex-col">
      <OfferContainer
        saleName={"Sale 50% off"}
        saleHeading={"Top Trends Style"}
        saleDesc={"In-store and online, Hurry Up! Limited time offer."}
        imgSrc={HeroImg2}
      />
      <OfferContainer
        saleName={"Hot under Rs.999"}
        saleHeading={"Here's To You"}
        saleDesc={"Discover selected items with many discount."}
        imgSrc={HeroImg1}
      />
    </div>
  );
};

export default Offer;
