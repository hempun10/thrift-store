import Image from "next/image";

const HeroSlide = ({ imageSrc, text, spanText, btnContent }) => {
  return (
    <div className="wrapper flex items-center px-12 pt-7 max-md:px-7 max-md:pt-4 max-sm:flex-col max-sm:p-2">
      <div className="text_wrapper flex-1 flex flex-col gap-10 pl-6 max-sm:pl-0 max-sm:gap-5">
        <h1 className="text-6xl font-semibold leading-none max-md:text-5xl max-sm:text-4xl max-sm:text-center">
          {text}
          <span className="text-pink-500"> {spanText}</span>
        </h1>
        <button
          type="button"
          className="border p-5 rounded-full bg-black text-white w-[40%] text-lg cursor-pointer hover:bg-white hover:text-black hover:outline-black hover:outline max-sm:w-[50%] max-sm:p-2 max-sm:m-auto "
        >
          {btnContent}
        </button>
      </div>
      <div className=" flex image_wrapper flex-1 ">
        <Image
          src={imageSrc}
          alt="Hero-img"
          className="w-[100%]  max-sm:mt-10"
        />
      </div>
    </div>
  );
};

export default HeroSlide;
