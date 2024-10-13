import React from 'react'
import RestaurantCard from './RestaurantCard';
import { mock_restaurants } from '../utils/constants';

const Body = () => {
  return (
    <div className='body'>
    <div className='search'>Search</div>
    <div className='res-container'>
      {
        mock_restaurants.map((restaurant)=>{
          return <RestaurantCard
          name={restaurant.info.name}
          cuisines={restaurant.info.cuisines.join(" , ")}
          deliveryTime={restaurant.info.sla.slaString}
          avgRating={`${restaurant.info.avgRating}stars`}
          cloudinaryImageId={restaurant.info.cloudinaryImageId}
          />
        })
      }
    </div>
    </div>
  )
}

export default Body