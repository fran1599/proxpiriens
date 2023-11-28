import '@/styles/globals.css'
import { useReducer , useEffect} from "react";
import { TYPES } from "@/actions/ShoppingActions";
import axios from "axios";
import { shoppingReducer } from "@/molecules/shoppingCart/ShoppingReducer";
import { shoppingInitialState } from "@/molecules/shoppingCart/ShoppingInitialState";
import { CartContext } from "@/context/CartContext"; // Importa el contexto que creaste
import { ProductsContext } from '@/context/ProductsContext';

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const updateState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:5000/destinos",
      cart: "http://localhost:5000/cart",
    };

    const resProducts = await axios.get(ENDPOINTS.products),
      resCart = await axios.get(ENDPOINTS.cart);

    const productsList = await resProducts.data,
      cartItems = await resCart.data;

    dispatch({
      type: TYPES.READ_STATE,
      payload: {
        products: productsList,
        cart: cartItems,
      },
    });
  };

  useEffect(() => {
    updateState ()
  }, [])

  const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });
  
  const handleClick = () => {
    clearCart();
    updateState();
  };
  

  return (
    // Envuelve el componente con los componentes ProductsContext.Provider y CartContext.Provider
    <ProductsContext.Provider value={{ products }}>
      <CartContext.Provider
        value={{ cart, addToCart, deleteFromCart, clearCart, handleClick, useReducer }}>
          <Component {...pageProps} />
      </CartContext.Provider>
    </ProductsContext.Provider>
  );

}