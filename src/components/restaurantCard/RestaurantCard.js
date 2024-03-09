import React from 'react';

import { IMG_LINK } from "../../constant.js";
import "./RestaurantCard.css";


const RestaurantCard = (props) => {
    const {name, areaName, avgRating, cuisines, cloudinaryImageId } = props?.info;
  return (
   <div className="restaurant-card">
        <div className="card-img">
            <img src={IMG_LINK + cloudinaryImageId} alt={name} />
        </div>
        <div className="card-content">
            <h3>{name}</h3>
            <p><span>*</span> <span>{avgRating}</span></p>
            <p>{cuisines[0]} {cuisines[1]} {cuisines[3]}</p>
            <p>{areaName}</p>
        </div>
   </div>
  )
}

export default RestaurantCard;