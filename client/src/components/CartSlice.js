import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addItem: (state, action)=>{
            state.push(action.payload);
        },
        removeItem: (state, action)=>{
           
            const bol = state.find((item)=>item.imageId == action.payload);
            if(bol){
                return state.filter(item=> item.imageId != action.payload);
            }

        },
        clearItem: ()=>{
            state = [];
        }
    }
})

export const {addItem, removeItem, clearItem} = cartSlice.actions;
export default cartSlice.reducer;