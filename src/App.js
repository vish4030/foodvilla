import React, { useEffect, useState } from "react";
import { Restaurants } from "./constant";
import RestaurantCard from "./components/restaurantCard/RestaurantCard";
import { filterRestaurant } from "./utils/reuseable";
import useIsOnline from "./utils/customHooks/useIsOnline";

import Button from "./components/button/Button";
import Input from "./components/input/Input";
import { Link } from "react-router-dom";
import { RestaurantData } from "./config";

const App = () => {
  const data = Restaurants?.data?.cards[2]?.data?.data?.cards?.map(
    (x) => x.data
  );
  const [restaurants, setRestaurants] = useState(data);
  const [searchText, setSearchText] = useState("");
  const isOnline = useIsOnline();
  const resKeys = Object.keys(RestaurantData);
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRestaurants(filterRestaurant(searchText, data));
    setSearchText("");
  };

  return !isOnline ? (
    <h1>Look like you are not connected</h1>
  ) : (
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
          {restaurants?.map((item, i) => {
            return (
              <div key={i} className="col-3">
                <Link to={`/food-menu/:${resKeys[i]}`}>
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
