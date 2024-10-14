import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]); //Restaurant to display
  const [allRestaurants, setAllRestaurants] = useState([]); // all Restaurants
  const [searchText, setSearchText] = useState(""); //Track search
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    console.log("component is re rendered");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true); //Start loading
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.76879019999999&lng=76.5753719&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const resData =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestaurants(resData);
      setAllRestaurants(resData); //Save unfiltered restaurants
      setIsLoading(false); //End loading
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch restaurants. Please try again.");
      setIsLoading(false); // End loading even if there’s an error
    }
  };

  const handleSearch = () => {
    const filteredList = restaurants.filter((restaurant) => {
      return restaurant.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setRestaurants(filteredList);
  };

  const handleTopRatedRestaurants = () => {
    const filteredList = restaurants.filter((restaurant) => {
      return restaurant.info.avgRating >= 4.4;
    });
    console.log("filteredList", filteredList);
    setRestaurants(filteredList);
    console.log("restaurant after filter", restaurants);
  };

  if (isLoading) {
    return <Shimmer />;
  }

  if (error) {
    return <div>{error}</div>; // Display error message if fetch fails
  }

  return (
    <div className="body">
      <div className="search-bar">
        <input
          type="text"
          onChange={(e) => {
            const searchTextValue = e.target.value;
            setSearchText(searchTextValue);
          }}
        />
        <button className="btn-search" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="filter-top-rated">
        <button onClick={handleTopRatedRestaurants}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              name={restaurant.info.name}
              cuisines={restaurant.info.cuisines.join(" , ")}
              deliveryTime={restaurant.info.sla.slaString}
              avgRating={`${restaurant.info.avgRating}stars`}
              cloudinaryImageId={restaurant.info.cloudinaryImageId}
            />
          ))
        ) : (
          <div>No restaurants found.</div>
        )}
      </div>
    </div>
  );
};

export default Body;
