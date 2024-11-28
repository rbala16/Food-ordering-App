import React, { useEffect } from "react";
import { RES_INFO_URL, mock_restaurants } from "./constants";

const useRestaurant = async () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchRestaurants = async () => {
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
          let restaurants =
            cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (restaurants) {
            resData = restaurants;
            break; // Stop the loop when restaurants are found
          }
        }
        setRestaurants(resData || mock_restaurants);
      } catch (err) {
        console.error("Error in useRestaurant:", err);
        setError("Failed to fetch restaurants. Please try again.");
        setRestaurants(mock_restaurants); // Fallback data
      } finally {
        setIsLoading(false); //end loading
      }
    };
    fetchRestaurants();
  }, []);
  return { restaurants, isLoading, error };
};

export default useRestaurant;
