import React from "react";

import { RES_IMG_URL } from "../../utils/constants";
import { useTheme } from "../../context/ThemeContext";

const MenuSlider = ({ ImageId }) => {
  const {theme} = useTheme();
  return (
    <div className={`p-4 ${ theme === "light"? "bg-white":"bg-gray-800"}`}>
      
      <img
        className="lg:w-full sm:w-[70%] sm:h-30 lg:h-48 object-cover rounded-lg "
        src={`${RES_IMG_URL}${ImageId}`}
        alt="res-img"
      />
      
      
    </div>
  );
};

export default MenuSlider;
