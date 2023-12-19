
const FavoriteItem = ({ fav, removeFromFavorites }) => {
  const { id, title, img } = fav;

  return (
    <>
      <div className="favorite-item">
        <img src={img} alt={`Imagen de ${title}`} />
        <h3>{title}</h3>
        <button onClick={() => removeFromFavorites(id)}>ELIMINAR</button>
      </div>

      <style jsx>{`
        .favorite-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: white;
          border: 2px solid #d8d8d8; 
          border-radius: 8px;
          margin-left: 10px;
          box-shadow: 0 4px 8px #000; 
          margin-bottom: 20px;
          overflow: hidden;
          transition: 0.4s ease-in-out;
        }

        img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        h3 {
          color: var(--primary-color);
          font-size: 1.5rem;
          margin: 10px 0;
        }

        button {
          padding: 10px 15px;
          background-color: var(--primary-color);
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease-in-out;
        }

        button:hover {
          background-color: #0066cc;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default FavoriteItem;