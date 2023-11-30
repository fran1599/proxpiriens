
import { createContext, useContext, useReducer } from 'react';

// Definir el contexto
const CartContext = createContext();

// Estado inicial del carrito
const initialState = {
  products: [], 
  cart: [],
  favorites: [],   
};

// Acciones para modificar el estado del carrito
export const ACTIONS = {
  READ_STATE: 'READ_STATE',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_ONE_FROM_CART: 'REMOVE_ONE_FROM_CART',
  REMOVE_ALL_FROM_CART: 'REMOVE_ALL_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
};
           
// Reducer para gestionar el estado del carrito
export const shoppingReducer = (state, action) => {
  switch (action.type) {

    case ACTIONS.READ_STATE:{
      return {
        ...state,
        products: action.payload.products,
        cart: action.payload.cart
      }
    }

    case ACTIONS.ADD_TO_CART:{

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
    
    case ACTIONS.REMOVE_ONE_FROM_CART:{
    
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

    case ACTIONS.REMOVE_ALL_FROM_CART:
      
    return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case ACTIONS.CLEAR_CART:
    
      return cartInitialState

    // case ACTIONS.ADD_TO_FAVORITES:{
      
    //   const newFavorite = state.products.find((product) => product.id === action.payload);

    //   return { 
    //     favorites: [...state.favorites, newFavorite] };
    // }

     
    default:
      return state;
  }
};

// Componente proveedor que utiliza el contexto y el reducer
export const ShoppingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  console.log('Estado inicial del carrito:', state);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acceder al contexto y al estado del carrito
export const useShopping = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useShopping debe utilizarse dentro de un ShoppingProvider');
  }
  return context;
};