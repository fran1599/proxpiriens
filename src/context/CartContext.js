

import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from "axios";

// Defino el contexto
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
  REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES',
};

// Reducer para gestionar el estado del carrito
export const shoppingReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.READ_STATE: {
      const { products, cart, favorites } = action.payload;

      return {
        ...state,
        products: state.products.length > 0 ? state.products : products,
        cart,
        favorites,
      };
    }

    case ACTIONS.ADD_TO_CART: {
      const newItem = state.products.find((product) => product.id === action.payload);
      const newItemCart = state.cart.find((item) => item.id === action.payload);

      return newItemCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }

    case ACTIONS.REMOVE_ONE_FROM_CART: {
      const itemToRemove = state.cart.find((item) => item.id === action.payload);

      if (itemToRemove.quantity > 1) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
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
      return initialState;

    case ACTIONS.ADD_TO_FAVORITES: {
      const newFavorite = state.products.find((product) => product.id === action.payload);
      const isAlreadyFavorite = state.favorites.some((fav) => fav.id === newFavorite.id);

      return isAlreadyFavorite
        ? state
        : {
            ...state,
            favorites: [...state.favorites, newFavorite],
          };
    }

    case ACTIONS.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };

    default:
      return state;
  }
};

// Componente proveedor que utiliza el contexto y el reducer

export const ShoppingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingReducer, initialState);
  const { cart = [] } = state;
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const { favorites = [] } = state;
  const favoritesCount = favorites.length;

  console.log('Estado inicial del carrito:', state);

  const updateState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:5000/products",
      cart: "http://localhost:5000/cart",
      favorites: "http://localhost:5000/favorites",
    };

    try {
      const [resProducts, resCart, resFavorites] = await Promise.all([
        axios.get(ENDPOINTS.products),
        axios.get(ENDPOINTS.cart),
        axios.get(ENDPOINTS.favorites),
      ]);

      console.log('Datos actualizados desde la API:', resProducts.data, resCart.data, resFavorites.data);

      const productsList = resProducts.data,
        cartItems = resCart.data,
        favoritesItems = resFavorites.data;

      dispatch({
        type: ACTIONS.READ_STATE,
        payload: {
          products: productsList,
          cart: cartItems,
          favorites: favoritesItems,
        },
      });

      console.log('Datos guardados en localStorage:', cartItems, favoritesItems);

      localStorage.setItem('cartState', JSON.stringify(cartItems));
      localStorage.setItem('favoritesState', JSON.stringify(favoritesItems));
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };


  useEffect(() => {
    console.log('Efecto de actualización de estado ejecutado');
    if (!state.products.length) {
      updateState();
    }
  }, []);

  const addToCart = (id) => {
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: id });

    alert(`¡Destino agregado al carrito!`);
  };

  const deleteToCart = (id, all = false) => {
    if (all) {
      dispatch({ type: ACTIONS.REMOVE_ALL_FROM_CART, payload: id });
      alert(`¡Los destinos fueron eliminados del carrito!`);
    } else {
      dispatch({ type: ACTIONS.REMOVE_ONE_FROM_CART, payload: id });
      alert(`¡Destino eliminado del carrito!`);
    }
  };

  const clearToCart = () => {
    dispatch({ type: ACTIONS.CLEAR_CART });
    alert(`¡Eliminaste todos los destinos del carrito!`);
  };

  const addToFavorites = (id) => {
    const productToAdd = state.products.find((product) => product.id === id);

    dispatch({ type: ACTIONS.ADD_TO_FAVORITES, payload: productToAdd.id });
    alert(`¡Destino agregado a favoritos!`);
  };

  const removeFromFavorites = (id) => {
    dispatch({ type: ACTIONS.REMOVE_FROM_FAVORITES, payload: id });

    alert(`¡Destino eliminado de favoritos!`);
  };

  const handleClick = () => {
    clearToCart();
    updateState();
  };

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        deleteToCart,
        handleClick,
        addToFavorites,
        removeFromFavorites,
        cartCount,
        favoritesCount,
      }}
    >
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