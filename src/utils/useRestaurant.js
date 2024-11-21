import React from "react";
import { RES_INFO_URL ,mock_restaurants} from "./constants";

const useRestaurant = async () => {
  try {
    // Fetch data from the API
    const response = await fetch(RES_INFO_URL);
    // Check if response is valid
    if (!response.ok) {
      console.error(`Error fetching data: ${response.status}`);
      return mock_restaurants; // Fallback if the API response is not OK
    }
    // Parse JSON
    const json = await response.json();

    // Loop through cards to find restaurants
    const cards = json?.data?.cards || [];
    let resData = null;

    for (let i = 0; i < cards.length; i++) {
      const restaurants =
        cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (restaurants) {
        resData = restaurants;
        break; // Stop the loop when restaurants are found
      }
    }

    // Return restaurants or fallback to mock_restaurants
    return resData || mock_restaurants;
  } catch (error) {
    console.error("Error in useRestaurants hook:", error);
    return mock_restaurants; // Fallback in case of an error
  }
};

export default useRestaurant;
