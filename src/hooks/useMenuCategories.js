import React, { useEffect ,useState} from "react";
import { RES_INFO_URL } from "../utils/constants";

const useMenuCategories = () => {
  const [itemCategories, setItemCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItemCategories = async () => {
      try {
        setIsLoading(true); //start loading
        // Fetch data from the API
        const response = await fetch(RES_INFO_URL);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }
        // Parse JSON
        const json = await response.json();
        const ItemCategoriesData =
          json?.data?.cards?.[0]?.card?.card?.imageGridCards?.info || [];
        setItemCategories(ItemCategoriesData);
      } catch (err) {
        console.error("Error fetching ItemCategories:", err);
        setError("Failed to fetch ItemCategories. Please try again.");
      } finally {
        setIsLoading(false); //end loading
      }
    };

    fetchItemCategories(); //runs only once
  }, []);
  return { itemCategories, isLoading, error };
};

export default useMenuCategories;
