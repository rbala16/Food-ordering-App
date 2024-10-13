import React from 'react'
import RestrauntCard from './RestrauntCard';
import { mock_restaurants } from '../utils/constants';

const Body = () => {
  return (
    <div className='body'>
    <div className='search'>Search</div>
    <div className='res-container'>
      {
        mock_restaurants.map((restraunt)=>{
          return <RestrauntCard
          name={restraunt.info.name}
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