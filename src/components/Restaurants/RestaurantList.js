import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../Shimmer";
import Slider from "react-slick";
import MenuSlider from "./MenuSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router-dom"; // For getting URL parameters
import { Link } from "react-router-dom";
import withPromotedLabel from "./withPromotedLabel";
import useRestaurant from "../../utils/useRestaurant";
import useMenuCategories from "../../utils/useMenuCategories";

const RestaurantList = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // Custom hooks
  const {
    restaurants,
    isLoading: isRestaurantLoading,
    error: restaurantError,
  } = useRestaurant();
  const {
    itemCategories,
    isLoading: isMenuLoading,
    error: menuError,
  } = useMenuCategories();

  const location = useLocation(); // To access URL parameters

  // Fetch search query from URL
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";

  // Perform search filtering based on the query
  useEffect(() => {
    const normalizedSearchQuery = searchQuery.trim().toLowerCase();
    if (normalizedSearchQuery) {
      const filteredList = restaurants.filter((restaurant) => {
        return (
          restaurant.info.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          restaurant.info.cuisines.some((cuisine) =>
            cuisine.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      });
      setFilteredRestaurants(filteredList);
    } else {
      setFilteredRestaurants(restaurants); // Use all restaurants when no query
    }
  }, [searchQuery, restaurants]);

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
  // useEffect(() => {
  //   console.log("component is re rendered");
  //   // fetchData();

  //   setFilteredRestaurants(itemCategories);
  //   setFilteredRestaurants(restaurants);
  // }, []);
 

  const handleTopRatedRestaurants = () => {
    const filteredList = restaurants.filter((restaurant) => {
      return restaurant.info.avgRating >= 4.0;
    });
    console.log("filteredList", filteredList);
    setFilteredRestaurants(filteredList);
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
    setFilteredRestaurants(filteredList);
  };

  const handleLessPrice = () => {
    const filteredList = restaurants.filter((restaurant) => {
      const offerPrice = restaurant.info.costForTwo;
      const price = parseInt(offerPrice.replace(/[^0-9]/g, "")); /// This will extract '300' from 'Rs 300 for two'

      return price <= 300;
    });
    setFilteredRestaurants(filteredList);
  };

  if (isRestaurantLoading || isMenuLoading) {
    return <Shimmer />;
  }

  // Render error states
  if (restaurantError) return <div>{restaurantError}</div>;
  if (menuError) return <div>{menuError}</div>;

  //Wrap RestaurantCard with withPromotedLabel HOC
  //HOC => accepts RestaurantCard as input and returns enhancedRestaurantCard
  const EnhancedRestaurantCard = withPromotedLabel(RestaurantCard);
  return (
    <div className="body">
      {/* Menu Slider */}
      <div className="p-8 m-5">
        <h1 className="text-3xl font-bold mb-6">Order your favourite food!!</h1>
        {itemCategories.length > 0 ? (
          <Slider {...sliderSettings} className="space-x-4">
            {itemCategories.map((info, index) => (
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
      <div className="mt-20 lg:px-20 md:px-2 sm:px-2">
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
        </div>
        {/* Restaurant Card List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant, index) => (
              <Link to={"restaurantmenu/" + restaurant.info.id}>
                <EnhancedRestaurantCard
                  key={index}
                  name={restaurant.info.name}
                  promoted={restaurant.info.promoted}
                  cuisines={restaurant.info.cuisines.join(" , ")}
                  deliveryTime={restaurant.info.sla.slaString}
                  avgRating={`${restaurant.info.avgRating}⭐`}
                  cloudinaryImageId={restaurant.info.cloudinaryImageId}
                  offer={restaurant.info.costForTwo}
                  link={restaurant.cta.link}
                  address={`${restaurant.info.locality}, ${restaurant.info.areaName}`}
                  // discount={`${restaurant.info.aggregatedDiscountInfoV3.header} ${restaurant.info.aggregatedDiscountInfoV3.subHeader}`}
                  avaiability={restaurant.info.availability.nextCloseTime}
                />
              </Link>
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
