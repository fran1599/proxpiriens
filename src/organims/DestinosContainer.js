

import axios from "axios";
import Destino from "@/molecules/Product";
import { useEffect, useState } from "react";

const DestinosContainer = () => {
  const [destinos, setDestinos] = useState([]);

  const updateState = async () => {
    const ENDPOINTS = {
      destinos: "http://localhost:5000/destinos",
      cart: "http://localhost:5000/cart"
    };
  
      const resDestinos = await axios.get(ENDPOINTS.destinos)
          resCart= await axios.get(ENDPOINTS.cart);
      const destinosList = resDestinos.data,
          cartItems = resCart.data;

  };

  useEffect(() => {
    updateState();
  }, []);

  return (
    <>
      <div className="container">
        {destinos.map((destino) => (
          <Destino key={destino.id} destino={destino}/>
        ))}
      </div>

      <style jsx>
        {`
          .container {
            display: flex;
            flex-wrap: wrap;
          }

          
        `}
      </style>
    </>
  );
};

export default DestinosContainer;
   

    