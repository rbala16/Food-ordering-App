import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../features/cardSlice";
import { RES_MENU_IMG_URL } from "../../utils/constants";
// import { useTheme } from '../../context/ThemeContext';

const ItemList = ({ items }) => {
  const [itemQuantities, setItemQuantities] = useState({}); // Track quantity of each item

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setItemQuantities((prev) => ({
      ...prev,
      [item.card.info.name]: (prev[item.card.info.name] || 0) + 1,
    }));
  };

  const handleRemoveItem = (item) => {
    if (itemQuantities[item.card.info.name] > 1) {
      setItemQuantities((prev) => ({
        ...prev,
        [item.card.info.name]: prev[item.card.info.name] - 1,
      }));
    }
    dispatch(removeItem(item)); 
  };

  return (
    <div>
      {items?.map((item) => (
        <div className="sm:py-2 bg-white flex flex-col md:flex-row items-center md:items-center border-b-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <div className="w-1/4 relative">
            <img
              className="w-full h-full   object-cover rounded-l-lg"
              src={`${RES_MENU_IMG_URL}${item.card.info.imageId}`}
              alt={item.card.info.name}
            />
          </div>

          <div className="lg:p-4   w-3/4">
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {item.card.info.name}
            </h3>
            <div className="flex items-center my-2 text-primary-color">
              <span className="bg-primary-color text-white px-2 py-1 rounded-full font-bold mr-2">
                ★ {item.card.info.ratings.aggregatedRating.rating}
              </span>
              <span className="text-gray-500 text-xs">
                ({item.card.info.ratings.aggregatedRating.ratingCount})
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              {item.card.info.description}
            </p>
            <p className="text-gray-800 font-bold mt-2">{`₹${
              item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100
            }`}</p>
          </div>

          {/* Conditionally render the ADD or  remove */}
          {itemQuantities[item.card.info.name] ? (
            <div className="flex items-center">
              <button
                onClick={() => handleRemoveItem(item)}
                className="text-white bg-primary-color px-3 py-1 rounded-full font-semibold mr-2"
              >
                -
              </button>
              <span className="text-lg">
                {itemQuantities[item.card.info.name]}
              </span>
              <button
                onClick={() => handleAddItem(item)}
                className="text-white bg-primary-color px-3 py-1 rounded-full font-semibold ml-2"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleAddItem(item)}
              className="text-white bg-primary-color px-4 py-2 rounded-full font-semibold shadow hover:bg-primary-color ml-auto mr-4"
            >
              ADD
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
