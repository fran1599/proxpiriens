import { useContext } from "react";
import CartItem from "@/molecules/shoppingCart/CartItem";
import { CartContext } from "@/context/CartContext";

const CartPage = () => {
  const { cart, deleteFromCart, handleClick, clearCart, useReducer} = useContext(
    CartContext
  );
 
  return (
    <>
      <h3>Carrito</h3>
      <div className="box">
        {cart.map((item, i) => (
          <CartItem key={i} item={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>
      <button onClick={handleClick}>Limpiar Carrito</button>

      <style jsx>
        {`
          .box {
            padding: 1rem;
            margin: 1rem;
            background-color: var(--primary-color);
          }

          .grid-responsive {
            display: flex;
            flex-wrap: wrap;
          }

          }

          .product {
            padding: 1rem;
            background-color: var(--secondary-color);
            color: var(--white-color);
          }

          .cart-item {
            background-color: var(--quinary-color);
            padding: 1rem;
            color: var(--white-color);
          }
        `}
      </style>
    </>
  );
};

export default CartPage;