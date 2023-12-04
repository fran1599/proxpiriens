
import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import axios from "axios";
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
    
      return initialState

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
  const [cartCount, setCartCount] = useState(0);

  console.log('Estado inicial del carrito:', state);
  
  const updateState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:5000/products",
      cart: "http://localhost:5000/cart",
    };

    const resProducts = await axios.get(ENDPOINTS.products),
      resCart = await axios.get(ENDPOINTS.cart);

    const productsList = await resProducts.data,
      cartItems = await resCart.data;

    dispatch({
      type: ACTIONS.READ_STATE,
      payload: {
        products: productsList,
        cart: cartItems,
      },
    });
  };

  useEffect(() => {
    updateState();
  }, []);


  const addToCart = (id) => {  
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: id });
    setCartCount(cartCount + 1);
    alert(`¡El destino ha sido agregado al carrito!`);
  };

  const deleteToCart = (id, all = false) => {
    if (all) {
      dispatch({ type: ACTIONS.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: ACTIONS.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearToCart = () => {
    dispatch({ type: ACTIONS.CLEAR_CART });
  };

  const handleClick = () => {
    clearToCart();
    updateState();
  };




  return (
    <CartContext.Provider value={{ state, dispatch, addToCart, deleteToCart, handleClick, cartCount }}>
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

