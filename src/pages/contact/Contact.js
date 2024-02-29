import React from 'react'

  import RestaurantCard from '../../components/restaurantCard/RestaurantCard';
  import { Restaurants } from '../../constant';
  
  const Contact = () => {
   
    return (
      <div>
        <div className="row">
          <div className="col-3"><RestaurantCard info = {Restaurants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[4]}/></div>
          <div className="col-3"><RestaurantCard info = {Restaurants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[5]}/></div>
          <div className="col-3"><RestaurantCard info = {Restaurants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[6]}/></div>
          <div className="col-3"><RestaurantCard info = {Restaurants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[7]}/></div>
        </div>
        
      </div>
    )
  }
export default Contact;