import React from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useSelector } from "react-redux";
import { IoMoonSharp, } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  const handleNavItemClick = () => {
    setShowNav(false); // Hide the navigation when an item is clicked
  };

  const cardItems = useSelector((store) => store.cart.items);

  return (
    <div
      className={`text-black h-[80px] max-w-[1600px] mx-auto flex justify-between items-center ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <h1 className="text-2xl lg:text-3xl font-bold primary-color ml-4">
        BalaFoodClub
      </h1>
      <div className="hidden sm:flex gap-3 md:gap-6">
        <button className="rounded-lg h-8 w-20 border border-orange-500 bg-primary-color text-white shadow-2xl lg:text-xl text-base">
        <Link to="/login" relative="z-10">Sign In</Link>
        </button>
     
        
      </div>

      <ul className="hidden md:flex text-xl">
        <li className="p-5 nav-link ">
          <Link to="/">Home</Link>
        </li>
        <li className="p-5 nav-link">
          <Link to="/about">About</Link>
        </li>
        <li className="p-5 nav-link">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="p-5 nav-link">
        <Link to="/restaurants">Restaurants</Link>
        </li>
        
      </ul>
      <a
          onClick={toggleTheme}
          className="text-xl m-1 nav-link flex cursor-pointer"
        >
          {theme === "light" ? <IoMoonSharp/> : <IoMdSunny/>}
        </a>
      {/* <Link to="/cart" className="text-orange-700 lg:text-3xl text-2xl p-5 nav-link flex">
        <AiOutlineShoppingCart />
        {cardItems.length }
      </Link> */}
      <div
        onClick={handleShowNav}
        className="block md:hidden mr-6 z-20 "
        aria-label="Toggle Navigation"
      >
        {showNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          showNav
            ? "z-10 fixed h-full top-[80px] w-full ease-in-out duration-700"
            : "fixed top-[-100%]"
        }
      >
        <ul className="p-6 text-lg w-full bg-primary-color rounded-lg text-white">
          <li className="p-3 nav-link " onClick={handleNavItemClick}>
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 nav-link" onClick={handleNavItemClick}>
            <Link to="/about">About</Link>
          </li>
          <li className="p-3 nav-link"onClick={handleNavItemClick}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-3 nav-link" onClick={handleNavItemClick}>
            <Link to="/restaurants">Restaurants</Link>
          </li>
          <div className="flex-gap-4">
            <button className="rounded-lg h-12 w-28  bg-primary-color shadow-xl nav-link">
            <Link to="/login" relative="z-10">Sign In</Link>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
