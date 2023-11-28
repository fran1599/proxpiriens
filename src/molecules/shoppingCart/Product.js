
import ButtonFavorite from "@/atoms/ButtonFavorite";
import ButtonReserve from "@/atoms/ButtonReserve";
import { ProductsContext } from "@/context/ProductsContext";

const Product = ({ product, addToCart }) => {
 
  const { id, img, title, text, paquete, precio, bgcolor } = product;

  return (
    <>
      <section
        className="destination"
        style={{ backgroundImage: `url(${img})` }}
        key={id}
      >
        <div className="destination-overlay"></div>
        <div className="destination-content">
          <h1 className="destination-title">{title}</h1>
          <p className="destination-text">{text}</p>
          <p className="destination-paquete">{paquete}</p>
          <h6>Precio final por persona</h6>
          <h2>${precio}</h2>
          <h6>Incluye impuestos, tasas y cargos</h6>
          <div className="keypad">
            <ButtonReserve  key={product.id} product={product} addToCart={addToCart}/>
            <ButtonFavorite />
          </div>
        </div>
      </section>

      <style jsx>
        {`
          .destination {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0px;
            padding: 30px;
            height: auto;
            width: 100%;
            text-align: center;
            background-size: cover;
            background-position: center;
            position: relative;
            z-index: 1;
          }

          .destination-overlay {
            background-color: rgba(15, 34, 76, 0.5);
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            visibility: hidden;
            z-index: -1;
          }

          .destination-content {
            width: 80%;
            margin: auto;
            color: var(--white-color);
            padding: 10px;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
            visibility: hidden;
          }

          .destination-title {
            text-transform: uppercase;
            font-size: 30px;
            font-weight: bold;
            margin: 10px 0;
          }

          .destination-text {
            font-size: 20px;
            margin: 10px 0;
          }

          .destination-paquete {
            font-size: 16px;
            margin: 10px 0;
          }

          .destination h6 {
            font-size: 16px;
            margin: 10px 0;
          }

          .destination h2 {
            font-size: 35px;
            font-weight: bold;
            margin: 10px 0;
          }

          .keypad {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;
          }

          button {
            color: white;
            background-color: ${bgcolor ? bgcolor : "gray"};
            border: none;
            border-radius: 0.5rem;
            box-shadow: 1px 2px 2px black;
            padding: 10px 20px;
            text-transform: uppercase;
            font-weight: bold;
           
            margin:auto;
            cursor: pointer;
            
          }
          button:hover {
            transform: traslateY(2px);
            box-shadow: none;

          }

          .destination:hover .destination-overlay {
            visibility: visible;
          }
          .destination:hover .destination-content {
            visibility: visible;
          }

          @media only screen and (max-width: 450px) {
            .destination-overlay {
              visibility: visible;
            }
            .destination-content {
              visibility: visible;
            }
          }
          @media (min-width: 768px) {
            .destination {
              width: 50%;
            }
          }

          @media (min-width: 1024px) {
            .destination {
              width: 33.33%;
            }
          }
        `}
      </style>
    </>
  );
};

export default Product;
