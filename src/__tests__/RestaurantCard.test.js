import React from "react";
import { render,screen } from "@testing-library/react";    
import { mock_restaurants } from "../utils/constants";
import RestrauntCard from "../components/Restaurants/RestaurantCard";
import "@testing-library/jest-dom"

it("Should render Restaurant Card with props",()=>{
    const restaurant = mock_restaurants[0];
    //render
    render(<RestrauntCard
        name={restaurant.info.name}
        promoted={restaurant.info.promoted}
        cuisines={restaurant.info.cuisines.join(" , ")}
        deliveryTime={restaurant.info.sla.slaString}
        avgRating={`${restaurant.info.avgRating}⭐`}
        cloudinaryImageId={restaurant.info.cloudinaryImageId}
        offer={restaurant.info.costForTwo}
        link={restaurant.cta.link}
        address={`${restaurant.info.locality}, ${restaurant.info.areaName}`}
        avaiability={restaurant.info.availability.nextCloseTime}
    />)

    
    // Query
    const cardName = screen.getByText("Manekchowk Sandwich & Pizza")

    // Assert
    expect(cardName).toBeInTheDocument()
})