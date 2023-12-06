

import { useShopping } from '@/context/CartContext';
import FavoriteItem from './FavoriteItem';

const FavoritesList = () => {

  const { state, deleteToCart, handleClick } = useShopping();
  const { favorites } = state;

  return (
    <>
    <div className="favorites">
        <h3>FAVORITOS</h3>
        <div className="grid-responsive">
         {favorites.map((item, i) => (
            <FavoriteItem key={i} item={item} deleteToCart={deleteToCart} />
          ))}
        </div>
        <button onClick={handleClick}>Limpiar Carrito</button>
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

export default FavoritesList