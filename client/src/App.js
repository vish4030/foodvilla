import React, { useEffect, useState } from "react";

import RestaurantCard from "./components/restaurantCard/RestaurantCard";
import { filterRestaurant } from "./utils/reuseable";
import useIsOnline from "./utils/customHooks/useIsOnline";

import Button from "./components/button/Button";
import Input from "./components/input/Input";
import { Link } from "react-router-dom";
import { RestaurantData } from "./config";

const App = () => {
  const [restaurants, setRestaurants] = useState(null);
  const [filteredRestaurant, setFilteredRestaurant] = useState(null)
  const [searchText, setSearchText] = useState("");
  const isOnline = useIsOnline();
  const resKeys = Object.keys(RestaurantData);
  
  const fetchRestaurant = async()=>{
    const res = await fetch('http://localhost:3000/data/all');
    const json = await res.json();
    const data = json[0]?.data?.cards[4]?.card?.card?.gridElements?.
    infoWithStyle?.restaurants?.map((x) => x.info);
    setRestaurants(data);
    setFilteredRestaurant(data);
  }

  useEffect(()=>{
    fetchRestaurant();
  },[])

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredRestaurant(filterRestaurant(searchText, restaurants));
    setSearchText("");
  };

  return !isOnline ? (
    <h1>Look like you are not connected</h1>
  ) : ( filteredRestaurant == null ? <h3>Simmer...</h3>:
    <div className="app">
      <div className="container">
        <div className="search-box">
          <Input
            type="text"
            inputName="search"
            inputValue={searchText}
            onChange={(e) => handleChange(e)}
          />
          <Button
            btnName="Search Restaurant"
            handleClick={(e) => handleSubmit(e)}
          />
        </div>
        <div className="row">
          {filteredRestaurant?.map((item, i) => {
            return (
              <div key={i} className="col-3">
                <Link to={`/food-menu/:${item.id}`}>
                  <RestaurantCard key={item.id} info={item} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;