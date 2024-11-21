import React from 'react'

const useMenuCategories = async() => {
 try{
     // Fetch data from the API
     const response = await fetch(RES_INFO_URL);
     // Parse JSON
    const json = await response.json();
     const ItemCategoriesData =
        json?.data?.cards?.[0]?.card?.card?.imageGridCards?.info || [];
 }
 catch{

 }
}

export default useMenuCategories
