import axios from "axios";
import Card from "@/molecules/Card";
import React, { useState, useEffect } from "react";

const CardsContainer = () => {
  // Declaramos la variable destinos usando useState
  // El valor inicial de destinos es un array vacío

  const [destinos, setDestinos] = useState([]);

  // Definimos una función asíncrona llamada updateState que obtendrá los datos de la API y actualizará el estado

  const updateState = async () => {
    
    // Definimos un objeto con los endpoints de la API
    // En este caso, solo tenemos un endpoint para destinos

    const ENDPOINTS = {
      destinos: "http://localhost:5000/destinos",
    };

    // Usamos axios para hacer una petición GET al endpoint de destinos
    // Usamos await para esperar la respuesta

    const resDestinos = await axios.get(ENDPOINTS.destinos);
    // Obtenemos los datos de la respuesta y los guardamos en una variable llamada destinosList
    
    const destinosList = await resDestinos.data;

    // Asignamos el valor de destinosList a la variable destinos usando setDestinos
    // setDestinos es una función que actualiza el estado del componente con el nuevo valor

    setDestinos(destinosList);
  };

  const [cardCount, setCardCount] = useState(0);

  useEffect(() => {
    const updateCardCount = () => {
      const width = window.innerWidth;
      const cardLimit = Math.floor(width / 330);
      const count = cardLimit < 2 ? 5 : cardLimit;
      setCardCount(count);
    };

    window.addEventListener("resize", updateCardCount);
    updateCardCount();

    updateState();

    return () => {
      window.removeEventListener("resize", updateCardCount);
    };
  }, []);

  return (
    <>
      <div>
        {destinos.slice(0, cardCount).map((destino) => (
          <Card destino={destino} />
        ))}
      </div>

      <style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          padding: 10px;
          margin: 20px 0;
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
