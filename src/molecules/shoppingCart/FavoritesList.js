
import { useShopping, ACTIONS } from "@/context/CartContext";
import FavoriteItem from './FavoriteItem';

const FavoritesList = () => {
  const { state, handleClick, removeFromFavorites } = useShopping();
  const { favorites } = state;


  return (
    <>
      <div className="favorites">
        <h3>FAVORITOS</h3>
        <div className="grid-responsive">
          {favorites.map((item) => (
            <FavoriteItem key={item.id} item={item} removeFromFavorites={removeFromFavorites} />
          ))}
        </div>
        <button onClick={handleClick}>Eliminar todos</button>
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

export default FavoritesList;   