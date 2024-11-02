import React from "react";
import { RES_MENU_IMG_URL } from "../../utils/constants";

const RestaurantMenuCard = ({ name, price, description, rating, imageId ,ratingCount}) => {
  return (
    <div className="sm:py-2 bg-white flex flex-col md:flex-row items-center md:items-center border-b-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
      <div className="w-1/4 relative">
        <img
          className="lg:w-full lg:h-full  sm:h-[200px] sm:max-w-[200px] object-cover rounded-l-lg"
          src={`${RES_MENU_IMG_URL}${imageId}`}
          alt={name}
        />
      </div>

      <div className="lg:p-4   w-3/4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <div className="flex items-center my-2 text-primary-color">
          <span className="bg-primary-color text-white px-2 py-1 rounded-full font-bold mr-2">
            ★ {rating}
          </span>
          <span className="text-gray-500 text-xs">({ratingCount})</span>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
        <p className="text-gray-800 font-bold mt-2">{price}</p>
      </div>

      <button className="text-white bg-primary-color px-4 py-2 rounded-full font-semibold shadow hover:bg-primary-color ml-auto mr-4">
        ADD
      </button>
    </div>
  );
};

export default RestaurantMenuCard;