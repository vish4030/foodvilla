import React from "react";

import "./Cart.css";
import { IMG_LINK_1 } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import {removeItem} from "../CartSlice";
import Button from "../button/Button";

const MealData = (props) => {
  const {name, price, imageId, vegTF} = props.item;

  const dispatch  = useDispatch();

  const handleClick = ()=>{
    dispatch(removeItem(imageId));
  }

  return (<div className="box-inner">
        <span>Veg {vegTF ? (
            <span className="veg"></span>
          ) : (
            <span className="non-veg"></span>
          )}
        </span>
        <h3>{name}</h3>
        <span>₹{price / 100}</span>
        <Button btnName="Remove" handleClick={()=>handleClick()} />
        <div className="img">
          <img src={`${IMG_LINK_1}${imageId}`} alt="?" />
          
        </div>
      </div>
  );
};

const Cart = () => {

  const cartData = useSelector((state)=>state.cart); 
  return(
    <div className="cart">
    <div className="container">
      <div className="row">
        {
          cartData?.map((item)=>(
            <div className="col-3">
              <div className="row">
                <MealData key={item.imageId} item = {item}/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </div>
  );
};

export default Cart;
