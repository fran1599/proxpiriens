import { useContext } from "react";
import CartItem from "@/molecules/shoppingCart/CartItem";
import { CartContext } from "@/context/CartContext";

const Cart = () => {
  const { cart, deleteFromCart, handleClick } = useContext(CartContext);

  return (
    <div className="carrito">
        <h3>Carrito de Compras</h3>
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
    </div>
  );
};

export default Cart;
