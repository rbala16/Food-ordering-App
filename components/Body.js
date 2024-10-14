import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  useEffect(() => {
    console.log("component is re rendered");
    fetchData();
  }, []);

  let [restaurants, setRestaurants] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.76879019999999&lng=76.5753719&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const resData =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setRestaurants(resData);
  };

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-bar">
        <input type="text" onChange={(e)=>{
         searchText =  e.target.value;
        }}/>
        <button className="btn-search" onClick={()=>{
          const filteredList = restaurants.filter((restaurant)=>{
            return restaurant.info.name.includes(searchText);
          })
          setRestaurants(filteredList);
        }}>Search</button>
        
      </div>
      <div className="filter-top-rated">
        <button
          onClick={() => {
            const filteredList = restaurants.filter((restaurant) => {
              return restaurant.info.avgRating >= 4.4;
            });
            console.log("filteredList", filteredList);
            setRestaurants(filteredList);
            console.log("restaurant after filter", restaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurants &&
          restaurants.map((restaurant, index) => {
            return (
              <RestaurantCard
                key={index}
                name={restaurant.info.name}
                cuisines={restaurant.info.cuisines.join(" , ")}
                deliveryTime={restaurant.info.sla.slaString}
                avgRating={`${restaurant.info.avgRating}stars`}
                cloudinaryImageId={restaurant.info.cloudinaryImageId}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Body;
