import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RES_MENU_URL } from "../../utils/constants";
// import RestaurantShimmer from "./RestaurantShimmer";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { TfiArrowCircleDown,TfiArrowCircleUp } from "react-icons/tfi";
import ItemList from "./ItemList";
// import { BsCart4 } from "react-icons/bs";
import Cart from "../Cart/Cart";
import { useSelector,useDispatch } from "react-redux";
import { toggleCart } from "../../features/cardSlice";

const RestaurantMenu = () => {
  // const dispatch = useDispatch();
  // const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const cartItems = useSelector((state) => state.cart.items);

  const { resId } = useParams(); //resId is extracted from the URL using useParams
  const [resMenu, setResMenu] = useState([]);
  const [itemShouldShow, setItemShouldShow] = useState(false); 

 
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

// const handleToggleCart = () => {
//   dispatch(toggleCart());
// };


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
             <ItemList items=   {menu.card.card.itemCards }/>
               
                  // <RestaurantMenuCard
                  //   key={item.card.info.id}
                  //   name={item.card.info.name}
                  //   price={`₹${item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}`}
                  //   description={item.card.info.description}
                  //   rating={item.card.info.ratings.aggregatedRating.rating}
                  //   ratingCount={item.card.info.ratings.aggregatedRating.ratingCount}
                  //   imageId={item.card.info.imageId}
                  // />
                }
            </div>
          )
      )}
 {/* Card Drawer */}
 {/* <button
        onClick={handleToggleCart}
        className="fixed bottom-0 right-0 text-white bg-primary-color rounded-3xl lg:text-3xl text-2xl flex p-2 hover:bg-white"
      >
        <BsCart4 />
        <span className="text-xl"> {cartItems.reduce((total, item) => total + (item.quantity || 1), 0)}</span>
      </button> */}

      {/* Conditionally render the Cart component */}
      {/* {isCartOpen && <Cart />} */}
    </div>
  );
};

export default RestaurantMenu;
