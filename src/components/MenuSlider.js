import React from "react";
import { ITEM_CATEG_IMG_URL } from "../utils/constants";
import { RES_IMG_URL } from "../utils/constants";

const MenuSlider = ({ ImageId, link,  }) => {
  return (
    <div className="menu-slider-item p-4">
       <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={`${RES_IMG_URL}${ImageId}`}
        alt="res-img"
      />
      </a>
      
    </div>
  );
};

export default MenuSlider;
