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

  // Variable de estado para mostrar todas las tarjetas o las correspondientes al ancho de pantalla
  const [showAll, setShowAll] = useState(false);

  // Función para cambiar el valor de showAll al opuesto
  const handleVerMas = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <div>
        {/* Operador ternario para decidir qué tarjetas mostrar según el valor de showAll */}
        {showAll
          ? destinos.map((destino) => <Card destino={destino} />)
          : destinos
              .slice(0, cardCount)
              .map((destino) => <Card destino={destino} />)}
      </div>
      {/* Botón para llamar a la función handleVerMas */}
      <button onClick={handleVerMas}>{showAll ? "Ver menos" : "Ver más"}</button>

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
