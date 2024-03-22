import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IMG_LINK_1 } from "../../constant";
import "./RestaurantMenu.css";
import { useDispatch } from "react-redux";
import {addItem } from "../CartSlice"

import Button from "../button/Button";

const MenuDetails = (props) => {
  const {description, imageId, isVeg, name, price} = props?.meals?.card?.info;
  const dispatch = useDispatch();

  const handleClick = () =>{
    let vegTF = isVeg == 1? 1 : 0
    dispatch(addItem({name,vegTF,price,imageId}))
  }

 return(
  <div className="row box-inner align-center">
    <div className="col-10">
      <span>Veg {isVeg ? <span className="veg"></span> : <span className="non-veg"></span>}</span >
      <h3>{name}</h3>
      <p>{description}</p>
      <span>₹{price/100}</span>
    </div>
    <div className="col-2">
      <div className="img">
        <img src={`${IMG_LINK_1}${imageId}`} alt="?" />
        <Button btnName="Add" handleClick={()=>handleClick()}/>
      </div>
    </div>
  </div>
  )
};



const MenuType = (props) => {
  const {itemCards, title} = props.category;
  return (<>
    <h2>{title+`(${itemCards.length})`}</h2>
    {itemCards.map((item,i)=>(<MenuDetails key={++i} meals = {item} />))}
  </>);
};

const Heading = ({ id, RestaurantData }) => {
  const {
    name,
    areaName,
    city,
    avgRating,
    costForTwoMessage,
    cloudinaryImageId,
    cuisines,
    totalRatingsString,
  } = RestaurantData?.data?.cards[0]?.card?.card?.info;
  return (
    <div className="row align-center">
      <div className="col-10">
        <h2>{name}</h2>
        <p>{...cuisines}</p>
        <address>{city}</address>
      </div>
      <div className="col-2">
        <span>*{avgRating}</span>
        <p>{totalRatingsString}</p>
      </div>
    </div>
  );
};

const RestaurantMenu = () => {
  const[menulist, setMenuList] = useState([]);
  const[resData, setResData] = useState(null);
  const id = useParams().Id.slice(1);

  const fetchMenu = async()=>{
    const res = await fetch(`http://localhost:3000/data/${id}`);
    const json = await res.json();
    setResData(json[0]);
    return json[0]
  }

  useEffect(() => {
    fetchMenu().then((res)=>{
    const data1 = res.data;
    
    setMenuList(
      data1?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.map((x) => x.card?.card)
        ?.filter(
          (x) =>
            x["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
      )
  });
  }, []);

  return ( resData == null ? <h3>Loading menu ...</h3>
    :
    <div className="food-menu">
      <div className="container">
        <div className="row">
          <div className="col-12 box">
            <Heading id={id} RestaurantData ={resData}/>
          </div>
          {menulist.map((item, i) => (
            <div key={i} className="col-12 box">
              <MenuType key={item.id} category={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
