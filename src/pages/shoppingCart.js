

import { useCart } from '../contexts/CartContext';

const shoppingCart = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {state.cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => removeFromCart(item)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

//Asumo que cada producto tiene un id, name, y description, y que se almacenan en el estado global del carrito cuando se hace clic en el botón "Agregar al Carrito"


export default shoppingCart;

