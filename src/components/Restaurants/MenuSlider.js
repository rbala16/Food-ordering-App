import React from "react";

import { RES_IMG_URL } from "../../utils/constants";

const MenuSlider = ({ ImageId, link,  }) => {
  return (
    <div className=" p-4">
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
