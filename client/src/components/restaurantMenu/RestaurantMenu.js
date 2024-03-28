import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./RestaurantMenu.css";
import { IMG_LINK_1, IMG_LINK } from "../../constant";
import {addItem } from "../cart/CartSlice"
import Button from "../button/Button";


const MenuDetails = ({meals}) => {
  const {description, imageId, isVeg, name, price} = meals?.card?.info;
  const dispatch = useDispatch();
  const handleClick = () =>{
    let vegTF = isVeg == 1? 1 : 0
    dispatch(addItem({meals, imageId:imageId}))
  }
 return(
 <>
    <div className="col-9">
      <span>{isVeg ? <span className="veg"></span> : <span className="non-veg"></span>}</span >
      <h3>{name}</h3>
      <p>{description}</p>
      <span>₹{price ==undefined ? "100-400" : price/100}</span>
    </div>
    <div className="col-3">
      <div className="row">
        <div className="col-12">
          <div className="menu-img">
            <img src={`${IMG_LINK_1}${imageId}`} alt="?" />
          </div>
        </div>
        <div className="col-12">
        <Button btnName="Add" handleClick={()=>handleClick()}/>
        </div>
      </div>
    </div>
  </>
  )
};



const MenuType = ({category, toggle, handleTitle}) => {
  const {itemCards, title} = category;
  return (<>
    <h2 style={{display:"inline-block"}} onClick={(e)=>{handleTitle(e)}}>{title}</h2>
    <span style={{font:"600 22px var(--ff)"}}>{`(${itemCards.length})`}</span>
    {itemCards.map((item,i)=>(
      <div key={i+"a"} className={`row align-center menu-box ${!toggle && 'display-n'} `} >
         <MenuDetails key={++i} meals = {item} /> </div>))}
  </>);
};

const Heading = ({ id, RestaurantData }) => {
  const { name, areaName, city, avgRating, costForTwoMessage, cloudinaryImageId, 
    cuisines, totalRatingsString } = RestaurantData?.data?.cards[0]?.card?.card?.info;
  return (
    <div className="row align-center">
      <div className="col-3">
        <h2>{name}</h2>
        <p>{...cuisines}</p>
        <p>{costForTwoMessage}</p>
        <address>{city}</address>
      </div>
      <div className="col-6 img-box">
        <img className="img-res" src={`${IMG_LINK}${cloudinaryImageId}`} alt="res-img" />
      </div>
      <div className="col-3">
        <address>{areaName}</address>
        <span>* {avgRating}</span>
        <p>{totalRatingsString}</p>
      </div>
    </div>
  );
};

const RestaurantMenu = () => {
  const[menulist, setMenuList] = useState([]);
  const[resData, setResData] = useState(null);
  const[title, setTitle] = useState("");
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

  const handleTitle = (e)=>{
    if(e.target.innerText == title)
      setTitle(prevTitle=> "");
    else
      setTitle((prevTitle) => e.target.innerText);
  }

  return ( resData == null ? <h3>Loading menu ...</h3>
    :
    <div className="food-menu">
      <div className="container">
        <div className="row">
          <div className="col-12 box-heading">
            <Heading id={id} RestaurantData ={resData}/>
          </div>
          {menulist.map((item, i) => (
            <div key={i} className="col-12 box-menu-type">
              <MenuType key={item.id} category={item} toggle={item.title == title} handleTitle={(e)=>handleTitle(e)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
