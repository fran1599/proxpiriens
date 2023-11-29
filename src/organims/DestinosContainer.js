

import axios from "axios";
import Destino from "@/molecules/Destino";
import { useEffect, useState } from "react";

const DestinosContainer = () => {
  const [destinos, setDestinos] = useState([]);

  const updateState = async () => {
    const ENDPOINTS = {
      destinos: "http://localhost:5000/destinos",
    };

    const resDestinos = await axios.get(ENDPOINTS.destinos);

    const destinosList = await resDestinos.data;

    setDestinos(destinosList);
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
   