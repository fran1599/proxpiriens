
import {useContext, createContext, useReducer} from 'react'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
  };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};


// Este código define un contexto "CartContext" que proporciona el estado global del carrito y el despachador (dispatch) para actualizar el estado. El "CartProvider" envuelve la aplicación y proporciona el contexto a través del cual los componentes pueden acceder y manipular el estado del carrito. useCart es un hook personalizado para acceder fácilmente al contexto en los componentes //