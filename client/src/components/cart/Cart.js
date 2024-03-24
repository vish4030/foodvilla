import React from "react";

import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {removeItem, addItem, clearItem} from "./CartSlice";
import {IMG_LINK_1} from "../../constant"
import Button from "../button/Button.js";

const MenuDetails = ({meals}) => {
  const {description, imageId, isVeg, name, price} = meals?.card?.info;
  const dispatch = useDispatch();
  const handleClick = (e, type) =>{
    if(type=="remove")
      dispatch(removeItem(imageId));
    else if(type=="add")
      dispatch(addItem({meals, imageId}));
    else if(type == "delete"){
      dispatch(clearItem(imageId));
    }
  }
 return(<div className="row align-center"> 
  <div className="col-4">
      <span>{isVeg ? <span className="veg"></span> : <span className="non-veg"></span>}</span >
      <h3>{name}</h3>
      <span>₹{price ==undefined ? "100-400" : price/100}</span>
    </div>
    <div className="col-5">
      <span>Total item: {meals.count}</span>
      <span>Total price: ₹{meals.price} </span>
    </div>
    <div className="col-3">
      <div className="row">
        <div className="col-12">
          <div className="menu-img">
            <img src={`${IMG_LINK_1}${imageId}`} alt="?" />
          </div>
        </div>
        <div className="col-12">
        <Button btnName="+" handleClick={(e)=>handleClick(e,"add")}/>
        <Button btnName="-" handleClick={(e)=>handleClick(e,"remove")} />
        <Button btnName="delete" handleClick={(e)=>handleClick(e,"delete")} />
        </div>
      </div>
    </div>
  </div>
  )
};


const Cart = () => {

  const cartData = useSelector((state)=>state.cart); 
  const menuKeys = Object.keys(cartData.cart);
  console.log(menuKeys);
  const dispatch = useDispatch();
  const handleRemove = (e, item)=>{
    dispatch(removeItem(item.imageId));
  }
  return(
    <div className="container cart">
      <div className="row meal-box align-center">
        {
          menuKeys?.map((item,i)=>(
              <div key={i+'a'} className="col-12">
                <MenuDetails key={item} meals = {cartData.cart[item]}/>
              </div>
          ))
        }
        <div className="col-12">
          <span>Total item: {cartData.total}</span>
          <span>Total price: ₹{cartData.total_price}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
