


import { TYPES } from "@/actions/ShoppingActions";

export const cartInitialState = {
    
  products: [
        {id: 1, name: "PRODUCTO A", price: "50"},
        {id: 2, name: "PRODUCTO B", price: "50"},
        {id: 3, name: "PRODUCTO C", price: "50"},
        {id: 4, name: "PRODUCTO D", price: "50"},
        {id: 5, name: "PRODUCTO E", price: "50"}
    ],

    cart: [],

    favorites: [],        
   
};         

export const cartReducer = (state, action) => {
    switch (action.type) {

      case TYPES.ADD_TO_CART:{

        const newItem = state.products.find((product) => product.id === action.payload);
        
        const newItemCart = state.cart.find((item) => item.id === action.payload);
       
        return newItemCart 
        ? {
          ...state,
          cart: state.cart.map((item) => item.id === newItem.id
          ?{...item, quantity: item.quantity +1}
          :item
          ),        
        }
        :{
          ...state,
          cart: [...state.cart, {...newItem, quantity: 1}]
        };
      }

      case TYPES.REMOVE_ONE_FROM_CART:{
      
      const itemToRemove = state.cart.find((item) => item.id === action.payload)

        if (itemToRemove.quantity > 1) {
      return {
        ...state,
        cart: state.cart.map((item) => item.id === action.payload
          ? {...item, quantity : item.quantity - 1}
          : item
        ),
      };
        } else {
          return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
      }
    }

      case TYPES.REMOVE_ALL_FROM_CART:
        
      return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };

      case TYPES.CLEAR_CART:
      
        return cartInitialState

      // case TYPES.ADD_TO_FAVORITES:{
        
      //   const newFavorite = state.products.find((product) => product.id === action.payload);

      //   return { 
      //     favorites: [...state.favorites, newFavorite] };
      // }

       
      default:
        return state;
    }
  }; 
