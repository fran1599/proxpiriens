



import { useShopping, ACTIONS } from "@/context/CartContext";
import Card from "@/atoms/Card";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const { state, dispatch } = useShopping();

  if (!state || typeof state !== 'object' || !('cart' in state)) {
    // Manejar el caso donde state no es un objeto iterable o no tiene la propiedad 'cart'
    return <p>Error: No se pudo obtener el estado del carrito</p>;
  }

  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: id });
  };

  const deleteToCart = (id, all = false) => {
    if (all) {
      dispatch({ type: ACTIONS.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: ACTIONS.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearToCart = () => {
    dispatch({ type: ACTIONS.CLEAR_CART });
  };

  return (
    <>
      <div>
        <h3>DESTINOS</h3>
        <div className="box-cart box-grid">
          {products.map((destino) => (
            <Card key={destino.id} destino={destino} addToCart={() => addToCart(destino.id)} img={destino.img} />
          ))}
        </div>
        <h3>CARRITO</h3>
        <button onClick={clearToCart}>LIMPIAR CARRITO</button>
        <div className="box-cart box-grid">
          {cart.map((item, index) => (
            <CartItem key={index} data={item} deleteToCart={() => deleteToCart(item.id)} img={item.img} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .box-cart {
          padding: 1rem;
          margin: 1rem;
          box-shadow: 0 0 1rem #00000025 inset;
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
