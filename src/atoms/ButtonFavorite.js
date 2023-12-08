import { useState } from "react";
import { useShopping, ACTIONS } from "@/context/CartContext";

function ButtonFavorite({ product }) {
  const { state, dispatch } = useShopping();
  const { favorites } = state;

  const [isFavorite, setIsFavorite] = useState(
    product && favorites.some((fav) => fav.id === product.id)
  );

  const handleClick = () => {
    if (product) {
      setIsFavorite(!isFavorite);
      if (isFavorite) {
        // Eliminar de favoritos si ya está en la lista
        dispatch({ type: ACTIONS.REMOVE_FROM_FAVORITES, payload: product.id });
      } else {
        // Agregar a favoritos si no está en la lista
        dispatch({ type: ACTIONS.ADD_TO_FAVORITES, payload: product.id });
      }
    }
  };

  const image = isFavorite ? "/icon/heart.png" : "/icon/heart-empty.png";

  return (
    <>
      <button onClick={handleClick}>
        <img src={image} alt="Heart" />
      </button>

      <style jsx>
        {`
          button {
            background-color: transparent;
            border: none;
            cursor: pointer;
          }
          img {
            width: 55px;
          }
        `}
      </style>
    </>
  );
}

export default ButtonFavorite;