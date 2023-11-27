import { useReducer , useEffect} from "react";
import { TYPES } from "@/actions/ShoppingActions";
import axios from "axios";
import { shoppingReducer } from "@/molecules/shoppingCart/ShoppingReducer";
import { shoppingInitialState } from "@/molecules/shoppingCart/ShoppingInitialState";
import Product from "@/molecules/shoppingCart/Product";
import CartItem from "@/molecules/shoppingCart/CartItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const updateState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:5000/destinos",
      cart: "http://localhost:5000/cart",
    };

    const resProducts = await axios.get(ENDPOINTS.products),
      resCart = await axios.get(ENDPOINTS.cart);

    const productsList = await resProducts.data,
      cartItems = await resCart.data;

    dispatch({
      type: TYPES.READ_STATE,
      payload: {
        products: productsList,
        cart: cartItems,
      },
    });
  };

  useEffect(() => {
    updateState ()
  }, [])

  const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });
  
  const handleClick = () => {
    clearCart();
    updateState();
  };
  
  <button onClick={handleClick}>Limpiar Carrito</button>
  return (
    <>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <div className="grid-responsive">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
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

//Asumo que cada producto tiene un id, name, y description, y que se almacenan en el estado global del carrito cuando se hace clic en el botón "Agregar al Carrito"

export default ShoppingCart;
