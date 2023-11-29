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



