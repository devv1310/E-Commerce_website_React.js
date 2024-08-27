
import { createSlice } from '@reduxjs/toolkit';
const initialState={
    cart:[]
}
const cartSlice= createSlice({
    name:"mycart",
    initialState:initialState,
    reducers:{
         addtoCart:(state, action)=>{
            let id=action.payload.id;
            let name=action.payload.name;
            let price=action.payload.price;
            let image=action.payload.image;
            let brand=action.payload.brand;            
            const myCart= state.cart.filter((key)=>key.id==action.payload.id);
            if (myCart.length>=1)
            {
                alert("Prodcut Aleready Added!!!");
            }
            else 
            {        
            state.cart.push({id:id, name:name, price:price, image:image, brand:brand, qnty:1});
            }
        
        },

        addQTY:(state, action)=>{
            let id=action.payload.id;
           
           for (var i=0; i<state.cart.length; i++)
           {
            if (state.cart[i].id==id)
            {
                state.cart[i].qnty++;
            }
           }

        },
        removeQTY:(state, action)=>{
            let id=action.payload.id;
           
           for (var i=0; i<state.cart.length; i++)
           {
            if (state.cart[i].id==id)
            {
                if (state.cart[i].qnty<=1)
                {
                    alert("atlest one product necessary!!");
                }
                else 
                {
                state.cart[i].qnty--;
                }
            }
           }

        },

       removeItem:(state, action)=>{
          state.cart=state.cart.filter((item)=>item.id!=action.payload);
       },

       cartEmpty:(state)=>{
        state.cart=[];
       }
    }
});

export const {addtoCart, addQTY, removeQTY, removeItem, cartEmpty}= cartSlice.actions;
export default cartSlice.reducer;