// import axios from "axios";
// import Card from "@/molecules/Card";
// import Link from "next/link";
// import { TYPES } from "@/actions/ShoppingActions";
// import React, { useState, useEffect, useReducer } from "react";
// import { shoppingReducer } from "@/molecules/shoppingCart/ShoppingReducer";
// import { shoppingInitialState } from "@/molecules/shoppingCart/ShoppingInitialState";

// const CardsContainer = () => {
//   // Declaramos la variable destinos usando useState
//   // El valor inicial de destinos es un array vacío

//   const [product, setDestinos] = useState([]);

//   // Definimos una función asíncrona llamada updateState que obtendrá los datos de la API y actualizará el estado

//   const updateState = async () => {
//     // Definimos un objeto con los endpoints de la API
//     // En este caso, solo tenemos un endpoint para destinos

//     const ENDPOINTS = {
//       products: "http://localhost:5000/destinos",
//       cart: "http://localhost:5000/cart",
//     };

//     const resProducts = await axios.get(ENDPOINTS.products),
//       resCart = await axios.get(ENDPOINTS.cart);

//     const productsList = await resProducts.data,
//       cartItems = await resCart.data;

//     dispatch({
//       type: TYPES.READ_STATE,
//       payload: {
//         products: productsList,
//         cart: cartItems,
//       }})
//     // Asignamos el valor de destinosList a la variable destinos usando setDestinos
//     // setDestinos es una función que actualiza el estado del componente con el nuevo valor
//     setDestinos(productsList);

//   };

//   const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });
//   const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
//   const { products, cart } = state;

//   const [cardCount, setCardCount] = useState(0);

//   useEffect(() => {
//     const updateCardCount = () => {
//       const width = window.innerWidth;
//       const cardLimit = Math.floor(width / 330);
//       const count = cardLimit < 2 ? 4 : cardLimit;
//       setCardCount(count);
//     };

//     window.addEventListener("resize", updateCardCount);
//     updateCardCount();

//     updateState();

//     return () => {
//       window.removeEventListener("resize", updateCardCount);
//     };
//   }, []);

import { useContext } from "react";
import { CartContext } from "@/context/CartContext.js"; 
import Card from "@/molecules/Card";
import Link from "next/link";
import { ProductsContext } from "@/context/ProductsContext";



const CardsContainer = () => {
  const { addToCart} = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  return (
    <>
      <div>
        {products.map((product) => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <button>
        <Link href="/shoppingCart">Conocé todos nuestros destinos</Link>
      </button>
      
      <style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          padding: 10px;
          margin: 20px 0;
        }

        h3 {
          font-size: 1rem;
          font-family: "Alfa Slab One", serif;
          letter-spacing: 0.1em;
          cursor: pointer;
          color: var(--primary-color);
        }

        button {
          color: white;
          background-color: var(--primary-color);
          border: none;
          border-radius: 0.5rem;
          box-shadow: 1px 2px 2px black;
          padding: 10px 20px;
          text-transform: uppercase;
          font-weight: bold;
          transition: 0.3s;
          margin-bottom: 30px;
          cursor: pointer;
        }
        button:hover {
          transform: traslateY(2px);
          box-shadow: none;
        }

        @media only screen and (min-width: 450px) {
          div {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
            grid-gap: 20px;
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default CardsContainer;



