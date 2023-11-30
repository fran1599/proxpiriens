

import { useShopping } from "@/context/CartContext";

import CartItem from "./CartItem";


const ShoppingCart = () => {
  const { state, deleteToCart,handleClick } = useShopping();
  const { cart } = state;
  
  return (
    <>
      <div className="cart">
        <h3>CARRITO</h3>
        <div className="grid-responsive">
         {cart.map((item, i) => (
            <CartItem key={i} item={item} deleteToCart={deleteToCart} />
          ))}
        </div>
        <button onClick={handleClick}>LIMPIAR CARRITO</button>
      </div>

      {/* <div className="carrito">
        <h3>Carrito de Compras</h3>
        <div className="box">
          {cart.map((item, i) => (
            <CartItem key={i} item={item} deleteToCart={deleteToCart} />
          ))}
        </div>
      </div>
      <button onClick={handleClick}>Limpiar Carrito</button> */}


      <style jsx>{`
        .grid-responsive {
          display: flex;
          flex-wrap: wrap;
        }


        .box-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }
      `}</style>
    </>
  );
};

export default ShoppingCart;
