import React from "react";
import { RES_IMG_URL } from "../utils/constants";

const RestrauntCard = ({
  name,
  cuisines,
  avgRating,
  deliveryTime,
  cloudinaryImageId,
  offer,
  link
}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
      
      <div className="relative">
        <img
          className="w-full h-40 object-cover rounded"
          src={`${RES_IMG_URL}${cloudinaryImageId}`}
          alt={name}
        />
        {offer && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white font-bold text-center py-2">
            {offer}
          </div>
        )}
      </div>
      {/* Restraunt Info section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{name}</h3>
        <div className="flex items-center text-sm my-2">
          <span className="bg-primary-color text-white px-2 py-1 rounded-full font-bold mr-2">
            {avgRating}
          </span>
          <span className="text-gray-500">{deliveryTime}</span>
        </div>
        <p className="text-gray-600 text-sm truncate">{cuisines}</p>
      </div>
    </div>
    </a>
  );
};

export default RestrauntCard;
