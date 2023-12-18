   

import Card from "@/atoms/Card";
import { useShopping } from "@/context/CartContext";
import { useWindowSize } from "react-use";

const CardContainer = () => {
  const { state, addToCart } = useShopping();
  const { products } = state;

  // Usamos el hook useWindowSize para obtener el ancho de la pantalla
  const { width } = useWindowSize();

  // Dividimos el ancho de la pantalla por 330 para obtener el número máximo de tarjetas
  const maxCards = Math.floor(width / 330);
  const cardsToShow = width < 660 ? 4 : maxCards;
  // Tomamos solo ese número de elementos del arreglo de productos
  const productsToShow = products.slice(0, cardsToShow);

  return (
    <>
      <div>
        {productsToShow.map((product) => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <style jsx> {`
         
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
        `} </style>
    </>
  );
};

export default CardContainer;