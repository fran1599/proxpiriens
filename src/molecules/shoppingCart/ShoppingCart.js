

import { TYPES } from "@/actions/ShoppingActions"

import { useReducer } from "react"

import { cartReducer, cartInitialState } from "./ShoppingReducer";

import Card from "@/atoms/Card";
import CartItem from "./CartItem";


const ShoppingCart = () => {

  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const {products, cart, favorites} = state;

  const addToCart = (id) => {
    dispatch({type: TYPES.ADD_TO_CART, payload:id})
  };

  const deleteToCart = (id, all = false) => {
    if (all) {
      dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload:id});
    } else {
      dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload:id});
    }
  }

  const clearToCart = () => {
    dispatch({type: TYPES.CLEAR_CART})  
  }
  


  return (
    <>
    <div>
    <h3>PRODUCTOS</h3>
    <div className="box-cart box-grid">
      {products.map((product) => (<Card key={product.id} destino={product} addToCart={addToCart}/> ))}
    </div>
    <h3>CARRITO</h3>
    <button onClick={clearToCart}>LIMPIAR CARRITO</button>
    <div className="box-cart box-grid">
        {cart.map((item,index) => (<CartItem key={index} data={item} deleteToCart={deleteToCart} />))}
    </div>
    
    </div>



    <style jsx> {`
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
  )
}


export default ShoppingCart

