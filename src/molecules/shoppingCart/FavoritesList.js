
import { useShopping
 } from "@/context/CartContext";
import FavoriteItem from './FavoriteItem';

const FavoritesList = () => {
  const { state, handleClick, removeFromFavorites } = useShopping();
  const { favorites } = state;


  return (
    <>
      <div className="favorites">
        <h3>FAVORITOS</h3>
        <div className="grid-responsive">
          {favorites.map((fav) => (
            <FavoriteItem key={fav.id} fav={fav} removeFromFavorites={removeFromFavorites} />
          ))}
        </div>
        <button onClick={handleClick}>Eliminar todos</button>
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

export default FavoritesList;   