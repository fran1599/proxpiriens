


import { useShopping } from "@/context/CartContext";

import CartItem from "./CartItem";

   
const ShoppingCart = () => {
  const { state, deleteToCart, handleClick } = useShopping();
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
        <button onClick={handleClick}>Terminar Reserva</button>
        <button onClick={handleClick}>Limpiar Carrito</button>
      </div>

      <style jsx>{`
        .grid-responsive {
          display: flex;
          flex-wrap: wrap;
          margin-top: 40px;
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
