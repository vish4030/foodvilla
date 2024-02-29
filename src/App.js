import React, { useEffect, useState } from 'react';

import { CDN_URL, Restaurants } from './constant';
import RestaurantCard from './components/restaurantCard/RestaurantCard';


const App = () => {
    const [restaurants , setRestaurants] = useState(Restaurants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    

    useEffect(()=>{
        console.log((restaurants));

    },[])

    return(
        <div className="app">
            <div className="container">
                <div className="row">
                    {restaurants.map((item,i)=>{
                        return ( <div key={i}  className="col-3"><RestaurantCard key={item.id}  info = {item}/></div> )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default App;

