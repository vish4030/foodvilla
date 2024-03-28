import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:{},
        total:0,
        total_price:0,
    },
    reducers:{
        addItem: (state, action)=>{
            const meal = state.cart[action.payload.imageId];
            if(meal){
                let meal_price = state.cart[action.payload.imageId]?.card?.info?.price;
                meal_price = meal_price == undefined ? 150 : meal_price/100; 
                console.log(meal_price);
                meal.count +=1;
                meal.price += meal_price;
                state.total_price += meal_price;
            }else{
                const menu = {...action.payload};
                let meal_price = menu.meals?.card?.info?.price;
                meal_price = meal_price == undefined ? 150 : meal_price/100; 
                console.log(meal_price);
                menu.meals.count = 1;
                menu.meals.price = meal_price;
                state.cart[menu.imageId] = menu.meals;
                state.total_price += meal_price
            }
            state.total +=1;
        },
        removeItem: (state, action)=>{
           const count = state.cart[action.payload].count;
           let meal_price = state.cart[action.payload]?.card?.info?.price;
           meal_price = meal_price == undefined ? 150 : meal_price/100; 
          if(count == 1) {
            state.total_price -= +meal_price;
            delete state.cart[action.payload];
          }else{
            state.cart[action.payload].count-=1; 
            state.cart[action.payload].price -= meal_price;
            state.total_price -= +meal_price;
          } 
           state.total-=1;
           

        },
        clearItem: (state, action)=>{
            state.total = state.total - state.cart[action.payload].count;
            state.total_price -= state.cart[action.payload].price;
            delete state.cart[action.payload];
        }
    }
})

export const {addItem, removeItem, clearItem} = cartSlice.actions;
export default cartSlice.reducer;