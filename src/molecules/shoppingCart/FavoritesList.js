
import { useShopping } from "@/context/CartContext";
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
        <div className="button-container">
        <button onClick={handleClick} className="clear-button">Eliminar todos</button>
        </div>
      </div>

      <style jsx>{`

        h3 {
          margin-top: 75px;
          margin-left: 25px;
        }
        .grid-responsive {
          display: flex;
          flex-wrap: wrap;
          margin-top: 80px; 
        }

        .button-container {
          display: flex;
          margin-top: 30px;
          margin-left: 15px;
          margin-bottom: 230px; 
        }

        .clear-button {
          background-color: #00a55e;
          color: white;
          padding: 12px 20px;
          border: none;
          cursor: pointer;
          border-radius: 4px;
          font-size: 16px;
          margin-right: 15px;
          transition: background-color 0.3s ease;
        }

        .clear-button:hover {
          background-color: #008d51;
        }
        
      `}</style>
    </>
  );
};

export default FavoritesList;   