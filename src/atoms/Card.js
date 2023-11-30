

import ButtonFavorite from "@/atoms/ButtonFavorite";
import ButtonReserve from "@/atoms/ButtonReserve";
import { useState } from "react";

const Card = ({ product, addToCart }) => {
   // Verificar si 'destino' está definido
   if (!product) {
    return <p>Error: Destino no definido</p>;}
    
  const { id, img, title, text, paquete, price, bgcolor } = product;
  const [isOpen, setIsOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(id);
  }
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    if (isOpen) {
      return "Ver menos...";
    } else {
      return "Ver más...";
    }
  };

  return (
    <>
      <figure className={`figure ${isOpen ? "open" : ""}`}>
        <img src={img} alt={title} />
        <div>
          <figcaption>
            <h2>{title}</h2>
          </figcaption>
          <p>{text}</p>
          <h5 onClick={handleToggle}>{handleClick()}</h5>
        </div>
        <div className={`card-body ${isOpen ? "open" : ""}`}>
          <p>{paquete}</p>
          <h6>Precio final por persona</h6>
          <h2>${price}</h2>
          <h6>Incluye impuestos, tasas y cargos</h6>
          <div className="keypad">
          <ButtonReserve key={product.id} product={product} addToCart={addToCart}/>
            <ButtonFavorite />
          </div>
        </div>
      </figure>

      <style jsx>
        {`
            figure {
              width: 95%;
              height: auto;
              background-color: var(--white-color);
              border: 1px solid black;
              border-radius: 10px;
              box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
              display: flex;
              flex-direction: column;
              align-items: center;
              overflow: hidden;
              transition: 0.4s ease-in-out;
              margin-bottom: 20px;
              
            }
            .figure.open {
              padding-bottom: 10px;
              height: auto;
              box-shadow: 5px 5px 10px rgba(3, 187, 133, 0.5);
            }
  
            img {
              width: 100%;
              height: 150px;
              object-fit: cover;
            }
            div {
              padding: 15px;
            }
            h2 {
              color: var(--primary-color);
              font-size: 1.8rem;
              text-align: center;
              line-height: 1;
              font-family: "Alfa Slab One", serif;
              letter-spacing: 0.1em;
              margin: 20px 0;
              
            }
            h5 {
              color: var(--primary-color);
              font-size: 1rem;
              line-height: 0;
              font-family: "Roboto", sans-serif;
              font-style: italic;
              cursor: pointer;
            }
  
            h6 {
              color: var(--primary-color);
              font-size: 0, 7rem;
              line-height: 0;
              font-family: "Roboto", sans-serif;
              margin: 10px 0;
  
            }
            p {
              color: var(--black-color);
              font-size: 1rem;
              text-align: center;
              font-family: "Roboto", sans-serif;
              margin: 30px 0;
              
            }
  
            .card-body {
              margin-top: -10px;
              padding: 15px;
              max-height: 0;
              overflow: hidden;
              transition: max-height 0.4s ease-in-out;
             
            }
  
            .card-body.open {
              max-height: 380px;
            }
  
            div.keypad {
              display: flex;
              flex-direction: row;
              align-items: center;
              border
            }
  
            @media only screen and (min-width: 450px) {
              figure {
                width: 300px;
                height: 400px;
              }
            }
  

        `}
      </style>
    </>
  );
};

export default Card;
