import React from "react";
import { RES_IMG_URL } from "../utils/constants";

const RestrauntCard = ({
  name,
  cuisines,
  avgRating,
  deliveryTime,
  cloudinaryImageId,
}) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`${RES_IMG_URL}${cloudinaryImageId}`}
        alt="res-img"
      />
      <h3>{name}</h3>
      <h3>{cuisines}</h3>
      <h3>{avgRating}</h3>
      <h3>{deliveryTime}</h3>
    </div>
  );
};

export default RestrauntCard;
