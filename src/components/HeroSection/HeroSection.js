import React from "react";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom"; //allows you to programmatically navigate to a different route.

const HeroSection = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const [text] = useTypewriter({
    words: [
      "Fresh Meals",
      "Free Delivery over Rs.300",
      " Delivery within 30 min",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText) {
      navigate(`/restaurants?search=${encodeURIComponent(searchText)}`);
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto gap-4">
      <div className="hero-section  bg-background-image bg-cover bg-center w-full flex flex-col justify-center items-center text-center text-white p-4 min-h-[60vh]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to BalaFoodClub
        </h1>

        <h2 className="text-3xl font-bold italic p-4">
          <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="" cursorColor="#ff014f" />
        </h2>
        <div className="bg-white rounded-xl w-full md:w-[700px] mx-auto flex flex-col md:flex-row p-2">
          <form
            onSubmit={handleSearch}
            className="border border-gray-300 shadow-xl flex items-center bg-gray-100 rounded-md  flex-grow"
          >
            <input
              className="flex-grow bg-transparent focus:outline-none text-black p-2"
              type="text"
              placeholder="Search for restaurants name or your favourite food...."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit" className="p-2">
              <IoSearch className="text-black" />
            </button>
          </form>
          <button
            onClick={handleSearch}
            className="mt-4 md:mt-0 md:ml-4 rounded-lg h-12 w-full md:w-28 border border-primary-color bg-primary-color text-white shadow-2xl transition duration-300 ease-in-out hover:bg-orange-600"
          >
            Find
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
