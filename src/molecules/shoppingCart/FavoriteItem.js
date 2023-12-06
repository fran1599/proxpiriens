

const FavoriteItem = ({ item, removeFromFavorites }) => {
  const { id, title, img } = item;

  return (
    <div className="favorite-item">
      <img src={img} alt={`Imagen de ${title}`} />
      <h3>{title}</h3>
      <button onClick={() => removeFromFavorites(id)}>Quitar de Favoritos</button>
    </div>
  );
};

export default FavoriteItem;