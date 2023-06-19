"use client";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { RiAccountCircleLine } from "react-icons/ri";
import { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Logo } from "@/public/assets";
import Image from "next/image";

// Simple Components
const CustomLink = ({ content }) => (
  <li className="cursor-pointer dropdown_link hover:dropdown_link:hover max-sm:mx-2">
    {content}
  </li>
);

const LinkTag = () => (
  <div className="bg-white lg:flex gap-6 text-left p-6 rounded-xl max-sm:text-right">
    <Link href={"/"}>
      <CustomLink content="Home" />
    </Link>
    <CustomLink content="Shop" />
    <CustomLink content="Product" />
    <CustomLink content="Blog" />
    <CustomLink content="Contact" />
  </div>
);

const Icons = ({ children }) => (
  <span className=" text-xl cursor-pointer">{children}</span>
);

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="bg-white header p-2 flex xl:justify-around justify-between max-sm:p-5 sticky top-0 z-10 shadow-sm">
      <div className="logo_container lg:order-1 order-2 max-sm:order-1">
        <Link href={"/"}>
          <Image src={Logo} alt="logo" className="w-20 h-20" />
        </Link>
      </div>
      <div className="menu_container flex lg:order-2 order-1">
        <ul className="hidden xl:flex items-center">
          <LinkTag />
        </ul>
        <div className="mb_container flex lg:hidden items-center">
          {toggle ? (
            <div className="relative">
              <RxCross2 onClick={toggleHandler} />
              <div
                className={`dropdown ${
                  toggle ? "show" : ""
                } text-left rounded-xl top-8 left-0 max-sm:right-4 max-sm:w-full`}
              >
                <LinkTag />
              </div>
            </div>
          ) : (
            <RxHamburgerMenu onClick={toggleHandler} />
          )}
        </div>
      </div>
      <div className="icons_container max-sm:hidden flex gap-5 items-center lg:order-3 order-2">
        <Icons>
          <AiOutlineSearch />
        </Icons>
        <Icons>
          <RiAccountCircleLine />
        </Icons>
        <Icons>
          <AiOutlineHeart />
        </Icons>
        <Icons>
          <AiOutlineShoppingCart />
        </Icons>
      </div>
    </div>
  );
};

export default Navbar;
