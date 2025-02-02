import React from "react";
import { RES_IMG_URL } from "../../utils/constants";
import { useTheme } from "../../context/ThemeContext";

const RestrauntCard = ({
  name,
  cuisines,
  avgRating,
  deliveryTime,
  cloudinaryImageId,
  offer,
  address,
  discount,
  avaiability,
}) => {
  const {theme} = useTheme();

  return (
    <div className={`${ theme === "light"? "bg-white":"bg-gray-800"} rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300 `}>
      <div className="relative shadow-lg">
        <img
          className="w-full h-[200px] object-cover rounded"
          src={`${RES_IMG_URL}${cloudinaryImageId}`}
          alt={name}
        />
        {offer && (
          <div className="absolute bottom-0 left-0 right-0  bg-gradient-to-t from-black to-transparent opacity-95 h-16 text-xl  text-white font-bold text-center py-5">
            {offer}
          </div>
        )}
      </div>
      {/* Restraunt Info section */}
      <div className="p-4 h-[200px]">
        <h3 className="text-lg font-semibold truncate">{name}</h3>
        <div className="flex items-center text-sm my-2">
          <span className="bg-primary-color text-white px-2 py-1 rounded-full font-bold mr-2">
            {avgRating}
          </span>
          <span className="text-gray-500">{deliveryTime}</span>
        </div>
        <p className="text-gray-600 text-sm truncate">{cuisines}</p>
        <p className="text-gray-600 text-sm italic">{address}</p>
        {/* <p className="text-gray-600 text-sm truncate">{discount}</p> */}
        <p className="text-gray-600 text-sm primary-color">{avaiability}</p>
      </div>
    </div>
  );
};

export default RestrauntCard;
