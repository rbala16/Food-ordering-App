import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Slider from "react-slick";
import MenuSlider from "./MenuSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]); //Restaurant to display
  const [allRestaurants, setAllRestaurants] = useState([]); // all Restaurants
  const [searchText, setSearchText] = useState(""); //Track search
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors
  const [menuCategories, setMenuCategories] = useState([]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Automatically slide to next project
    autoplaySpeed: 3000, // 3 seconds per slide
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

      const ItemCategoriesData =
        json?.data?.cards?.[0]?.card?.card?.imageGridCards?.info || [];
      // console.log(specialCusinesData)

      const resData =
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      console.log(resData);
      setMenuCategories(ItemCategoriesData);
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
      // Convert both searchText and restaurant name to lowercase
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
            const searchText = e.target.value; // Store search text in state
            setSearchText(searchText);
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

      {/* Whats in your mind */}
      <div className="res-container">
        <h1>Whats on your mind</h1>
        {menuCategories.length > 0 ? (
          <Slider {...sliderSettings} className="space-x-4">
            {menuCategories.map((info, index) => (
              <MenuSlider
                key={index}
                ImageId={info.imageId}
                link={info.action.link}
              />
            ))}
          </Slider>
        ) : (
          <div>No menu found.</div>
        )}
      </div>
      <div className="res-container">
        {/* <h2>Top Restaurants</h2> */}
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

export default RestaurantList;
