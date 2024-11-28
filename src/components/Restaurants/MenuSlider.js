import React from "react";

import { RES_IMG_URL } from "../../utils/constants";
import { useTheme } from "../../context/ThemeContext";

const MenuSlider = ({ ImageId, link,  }) => {
  const {theme} = useTheme();
  return (
    <div className={`p-4 ${ theme === "light"? "bg-white":"bg-gray-800"}`}>
      
      <img
        className="w-full h-48 object-cover rounded-lg "
        src={`${RES_IMG_URL}${ImageId}`}
        alt="res-img"
      />
      
      
    </div>
  );
};

export default MenuSlider;
