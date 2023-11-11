import axios from "axios"
import Card from '@/molecules/Card';
import React, { useState, useEffect } from 'react';

const CardsContainer = () => 
{

  const [destinos, setDestinos] = useState([]);

  const updateState = async () => {
    const ENDPOINTS = {
     destinos: "http://localhost:5000/destinos",
    }
     const resDestinos = await axios.get(ENDPOINTS.destinos);

     const destinosList = await resDestinos.data
     
     setDestinos(destinosList);
   }
   

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

     updateState()
 
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

