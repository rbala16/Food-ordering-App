import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Slider from "react-slick";
import MenuSlider from "./MenuSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RES_INFO_URL } from "../utils/constants";
import { useLocation } from "react-router-dom"; // For getting URL parameters

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]); //Restaurant to display
  const [allRestaurants, setAllRestaurants] = useState([]); // all Restaurants
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors
  const [menuCategories, setMenuCategories] = useState([]);
  const location = useLocation(); // To access URL parameters

  // Fetch search query from URL
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";

  // Perform search filtering based on the query
  useEffect(() => {
    const normalizedSearchQuery = searchQuery.trim().toLowerCase();
    if (normalizedSearchQuery) {
      const filteredList = allRestaurants.filter((restaurant) => {
        return (
          restaurant.info.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          restaurant.info.cuisines.some((cuisine) =>
            cuisine.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      });
      setRestaurants(filteredList);
    } else {
      setRestaurants(allRestaurants);
    }
  }, [searchQuery, allRestaurants]);

  // Slider settings
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
  //useEffect
  useEffect(() => {
    console.log("component is re rendered");
    fetchData();
  }, []);
  //fetch Restaurant info
  const fetchData = async () => {
    try {
      setIsLoading(true); //Start loading
      const data = await fetch(RES_INFO_URL);
      const json = await data.json();
      // Menu Item
      const ItemCategoriesData =
        json?.data?.cards?.[0]?.card?.card?.imageGridCards?.info || [];
      // console.log(specialCusinesData)
      //Restraunt Data
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

  // const handleSearch = () => {
  //   const filteredList = restaurants.filter((restaurant) => {
  //     // Convert both searchText and restaurant name to lowercase
  //     return restaurant.info.name
  //       .toLowerCase()
  //       .includes(searchText.toLowerCase());
  //   });
  //   setRestaurants(filteredList);
  // };

  const handleTopRatedRestaurants = () => {
    const filteredList = restaurants.filter((restaurant) => {
      return restaurant.info.avgRating >= 4.4;
    });
    console.log("filteredList", filteredList);
    setRestaurants(filteredList);
    console.log("restaurant after filter", restaurants);
  };

  const handleFastDelivery = () => {
    const filteredList = restaurants.filter((restaurant) => {
      const slaString = restaurant.info.sla.slaString;
      //Extract the first number
      const minTime = parseInt(slaString);
      return minTime >= 30 && minTime < 35;
    });
    console.log(filteredList);
    setRestaurants(filteredList);
  };

  const handleLessPrice = () => {
    const filteredList = restaurants.filter((restaurant) => {
      const offerPrice = restaurant.info.costForTwo;
      const price = parseInt(offerPrice.replace(/[^0-9]/g, "")); /// This will extract '300' from 'Rs 300 for two'

      return price <= 300;
    });
    setRestaurants(filteredList);
  };

  if (isLoading) {
    return <Shimmer />;
  }

  if (error) {
    return <div>{error}</div>; // Display error message if fetch fails
  }

  return (
    <div className="body">
      {/* Menu Slider */}
      <div className="p-8 m-5">
        <h1 className="text-3xl font-bold mb-6">Order your favourite food!!</h1>
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
          <div className="text-lg text-gray-500">No menu found.</div>
        )}
      </div>

      {/* Restaurant List */}
      <div className="mt-20 px-20">
        <h1 className="text-3xl font-semibold mb-6 ">
          Restaurants with online food delivery in your area
        </h1>
        {/* Filter buttons */}
        <div>
          <button
            className=" p-1 border-2 bg-white rounded-2xl m-4"
            onClick={handleTopRatedRestaurants}
          >
            Rating 4.0+
          </button>
          <button
            className=" p-1 border-2 bg-white rounded-2xl m-4"
            onClick={handleLessPrice}
          >
            Less than Rs.300
          </button>
          <button
            className=" p-1 border-2 bg-white rounded-2xl m-4"
            onClick={handleFastDelivery}
          >
            Fast Delivery
          </button>
          <button
            className=" p-1 border-2 bg-white rounded-2xl m-4"
            onClick={handleFastDelivery}
          >
            Fast Delivery
          </button>
          <button
            className=" p-1 border-2 bg-white rounded-2xl m-4"
            onClick={handleFastDelivery}
          >
            Fast Delivery
          </button>
        </div>
        {/* Restaurant Card List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {restaurants.length > 0 ? (
            restaurants.map((restaurant, index) => (
              <RestaurantCard
                key={index}
                name={restaurant.info.name}
                cuisines={restaurant.info.cuisines.join(" , ")}
                deliveryTime={restaurant.info.sla.slaString}
                avgRating={`${restaurant.info.avgRating}⭐`}
                cloudinaryImageId={restaurant.info.cloudinaryImageId}
                offer={restaurant.info.costForTwo}
                link={restaurant.cta.link}
                address={`${restaurant.info.locality}, ${restaurant.info.areaName}`}
                discount={`${restaurant.info.aggregatedDiscountInfoV3.header} ${restaurant.info.aggregatedDiscountInfoV3.subHeader}`}
                avaiability={restaurant.info.availability.nextCloseTime}
              />
            ))
          ) : (
            <div>No restaurants found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantList;
