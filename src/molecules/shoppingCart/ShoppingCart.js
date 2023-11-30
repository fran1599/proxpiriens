

import axios from "axios";

import { useShopping, ACTIONS } from "@/context/CartContext";
import Card from "@/atoms/Card";
import CartItem from "./CartItem";
import { useEffect } from "react";
import Destino from "../Destino";
       
const ShoppingCart = () => {
  const { state, dispatch } = useShopping();

  const updateState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:5000/destinos",
      cart: "http://localhost:5000/cart"
    };
  
      const resDestinos = await axios.get(ENDPOINTS.products)
          resCart= await axios.get(ENDPOINTS.cart);
      const destinosList = resDestinos.data,
          cartItems = resCart.data;
      
      const data = {
        products: destinosList,
        cart: cartItems
      }
      dispatch({type: ACTIONS.READ_STATE, payload: data})
  };
                                   
  useEffect(() => {
    updateState()
  }, [])

  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: id });
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
   
  return (
    <>
      <div>
        <h3>DESTINOS</h3>
        <div className="box-cart box-grid">
          {products.map((destino) => (
            <Destino key={destino.id} destino={destino} addToCart={() => addToCart(destino.id)} img={destino.img} />
          ))}
        </div>
        <h3>CARRITO</h3>
        <button onClick={clearToCart}>LIMPIAR CARRITO</button>
        <div className="box-cart box-grid">
          {cart.map((item, index) => (
            <CartItem key={index} data={item} deleteToCart={() => deleteToCart(item.id)} img={item.img} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .box-cart {
          padding: 1rem;
          margin: 1rem;
          box-shadow: 0 0 1rem #00000025 inset;
        }

        .box-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }
      `}</style>
    </>
  );
};

export default ShoppingCart;
