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

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="text-black h-[80px] max-w-[1600px] mx-auto flex justify-between items-center ">
      <h1 className="text-xl md:text-3xl font-bold primary-color ml-4">
        BalaFoodClub
      </h1>
      <div className="hidden sm:flex gap-3 md:gap-6">
        <button className="rounded-lg h-8 w-20 border border-orange-500 bg-primary-color text-white shadow-2xl">
          Sign In
        </button>
        {/* <button className="rounded-lg h-8 w-20 border border-orange-500 bg-primary-color text-white shadow-2xl">
          Signup
        </button> */}
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
          <Link to="#">Menu</Link>
        </li>
        <li className="p-5 nav-link">
          <Link to="/grocery">Grocery</Link>
        </li>
      </ul>
      <a className="text-orange-700 text-3xl p-5 nav-link">
        <AiOutlineShoppingCart />
      </a>
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
        <ul className="p-6 text-xl w-full bg-primary-color rounded-lg text-white">
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
          <Link to="#">Menu</Link>
        </li>
          <div className="flex-gap-4">
            <button className="rounded-lg h-12 w-28  bg-primary-color shadow-xl nav-link">
              <span relative="z-10">Sign In</span>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
