
import Card from '@/molecules/Card';
import React, { useState, useEffect } from 'react';

const destinos = [
  {
    id:1,
    img: "/img/cards/Card-Bariloche.jpg",
    title: "Bariloche",
    text: "Paisajes, colores y belleza natural en Bariloche",
    paquete: "8 días / 7 noches, Vuelo directo Buenos Aires / Rosario - Bariloche, Gran Hotel Panamericano",
    precio: "$289.467",
    bgcolor: "#0f224c",
  },
  {
    id:2,
    img: "/img/cards/Card-Buenos-Aires.jpg",
    title: "Buenos Aires",
    text: "Una mágica ciudad para descubrir",
    paquete: "4 días / 3 noches, Vuelo directo desde todo el país, Hotel HR Luxor Buenos Aires",
    precio: "$140.544",
    bgcolor: "#0f224c",
  },
  {
    id:3,
    img: "/img/cards/Card-Cerro-Siete-Colores.jpg",
    title: "Cerro Siete Colores",
    text: "Purmamarca ( cerro 7 colores) y Salinas Grandes",
    paquete: "9 días / 8 noches, Vuelos desde Buenos Aires, Quebrada de Humahuaca, Purmamarca, Cuesta de Lipan y Salinas Grandes, Hostal de los colores",
    precio: "$260.430",
    bgcolor: "#0f224c",
  },
  {
    id:4,
    img: "/img/cards/Card-Cordoba.jpg",
    title: "Córdoba",
    text: "Paisajes, colores y naturaleza en Córdoba",
    paquete: "5 días / 4 noches, Vuelo directo Buenos Aires / Rosario - Córdoba, Villa Cabrera Apart & Suites",
    precio: "$218.185",
    bgcolor: "#0f224c",
    
  },
  {
    id:5,
    img: "/img/cards/Card-Gualeguaychu.jpg",
    title: "Gualeguaychú",
    text: "Viví los mejores carnavales del país",
    paquete: "3 días / 2 noches, Toda la fiesta inigualable de los carnavales, Hotel Gualeguaychu",
    precio: "$110.560",
    bgcolor: "#0f224c",
    
  },

  {
    id:65,
    img: "/img/cards/Card-Iguazu.jpg",
    title: "Iguazú",
    text: "Apurate que se inundo todo",
    paquete: "3 días / 2 noches, Toda la fiesta inigualable de los carnavales, Hotel Gualeguaychu",
    precio: "$320.560",
    bgcolor: "#0f224c",
    
  },

];

const CardsContainer = () => 
{
  const [cardCount, setCardCount] = useState(0);
 
  useEffect(() => {
     const updateCardCount = () => {
       const width = window.innerWidth;
       const cardLimit = Math.floor(width / 330);       
       const count = cardLimit < 2 ? 5 : cardLimit;
       setCardCount(count);
       };
 
     window.addEventListener('resize', updateCardCount);
     updateCardCount();
 
     return () => {
       window.removeEventListener('resize', updateCardCount);
     };
  }, []);
 
  return (
     <>
       <div>
         {destinos.slice(0, cardCount).map((destino) => (
           <Card destino={destino}/>
         ))}
       </div>


      <style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          padding:10px;
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

