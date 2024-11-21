import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RES_MENU_URL } from "../../utils/constants";
// import RestaurantShimmer from "./RestaurantShimmer";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { TfiArrowCircleDown,TfiArrowCircleUp } from "react-icons/tfi";

const RestaurantMenu = () => {
  const { resId } = useParams(); //resId is extracted from the URL using useParams
  const [resMenu, setResMenu] = useState([]);
  const [itemShouldShow, setItemShouldShow] = useState(true); 

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const resMenuAPI = await fetch(RES_MENU_URL + resId);
    const jsonMenu = await resMenuAPI.json();
    const resMenuCards = jsonMenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    setResMenu(resMenuCards || []);
  };

  const handleClick = () => {
    setItemShouldShow(!itemShouldShow)
}

  return (
    <div className="w-3/4 mx-auto mt-6 space-y-4">
      {resMenu.map(
        (menu) =>
          menu.card.card.title && (
            <div key={menu.card.card.title} className="border-b border-gray-200 shadow pb-4 ">
              <h3
                className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800 hover:text-orange-500"
                onClick={handleClick}
              >
                {menu.card.card.title} 
                {itemShouldShow? (
                  <TfiArrowCircleUp className="text-xl" />
                ) : (
                  <TfiArrowCircleDown className="text-xl" />
                )}
              </h3>
              {itemShouldShow &&
                menu.card.card.itemCards &&
                menu.card.card.itemCards.map((item) => (
                  <RestaurantMenuCard
                    key={item.card.info.id}
                    name={item.card.info.name}
                    price={`₹${item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}`}
                    description={item.card.info.description}
                    rating={item.card.info.ratings.aggregatedRating.rating}
                    ratingCount={item.card.info.ratings.aggregatedRating.ratingCount}
                    imageId={item.card.info.imageId}
                  />
                ))}
            </div>
          )
      )}
    </div>
  );
};

export default RestaurantMenu;
