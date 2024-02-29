import React from 'react';

import RestaurantCard from '../../components/restaurantCard/RestaurantCard';
import { Restaurants } from '../../constant';

const About = () => {
 
  return (
    <div>
      <div className="row">
        <div className="col-3"><RestaurantCard info = {Restaurants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]}/></div>
        <div className="col-3"><RestaurantCard info = {Restaurants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[1]}/></div>
        <div className="col-3"><RestaurantCard info = {Restaurants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[2]}/></div>
        <div className="col-3"><RestaurantCard info = {Restaurants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[3]}/></div>
      </div>
      
    </div>
  )
}

export default About