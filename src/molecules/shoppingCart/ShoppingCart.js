import axios from "axios";

import { useShopping, ACTIONS } from "@/context/CartContext";

import CartItem from "./CartItem";

import { useEffect } from "react";
import Product from "../Product";

const ShoppingCart = () => {
  const { state, dispatch } = useShopping();

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

  const handleClick = () => {
    clearToCart();
    updateState();
  };


  return (
    <>
      <div>
        <h3>DESTINOS</h3>
        <div className="grid-responsive">
          {products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        <h3>CARRITO</h3>
        <button onClick={handleClick}>LIMPIAR CARRITO</button>
        <div className="grid-responsive">
         {cart.map((item, i) => (
            <CartItem key={i} item={item} deleteToCart={deleteToCart} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .grid-responsive {
          display: flex;
          flex-wrap: wrap;
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
