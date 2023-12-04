

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
        <button onClick={handleClick}>LIMPIAR CARRITO</button>
      </div>
      <div className = "items-count">
        {
          cart.length === 0 ? ("Carrito vacío") : (
            <> <h4>Productos en el carrito:</h4> <p>{cart.reduce((total, item) => total + item.quantity, 0)}</p> </> )
        }
      </div>
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
