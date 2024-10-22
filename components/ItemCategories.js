import React from "react";
import { ITEM_CATEG_IMG_URL } from "../utils/constants";
import { RES_IMG_URL } from "../utils/constants";

const ItemCategories = ({   name,ImageId }) => {
    <div className="res-card">
    <img
      className="res-logo"
      src={`${RES_IMG_URL}${ImageId}`}
      alt="res-img"
    />
    <h3>{name}</h3>
    </div>
};

export default ItemCategories;
