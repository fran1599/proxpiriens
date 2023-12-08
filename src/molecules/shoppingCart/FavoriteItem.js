

const FavoriteItem = ({ item, removeFromFavorites }) => {
  const { id, title, img } = item;

  return (
    <>
    <div className="favorite-item">
      <img src={img} alt={`Imagen de ${title}`} />
      <h3>{title}</h3>
      <button onClick={() => removeFromFavorites(id)}>ELIMINAR</button>
    </div>

     
    <style jsx>
        {`
          figure {
            width: 95%;
            height: auto;
            background-color: var(--black-color);
            border: 1px solid black;
            border-radius: 10px;
            box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
            transition: 0.4s ease-in-out;
            margin-bottom: 20px;
            
          }

          img {
            width: 100%;
            height: 150px;
            object-fit: cover;
          }

          div {
            padding: 15px;
          }

          h4 {
            color: var(--primary-color);
            font-size: 1.8rem;
            text-align: center;
            line-height: 1;
            font-family: "Alfa Slab One", serif;
            letter-spacing: 0.1em;
            margin: 20px 0;
            
          }


          div.keypad {
            display: flex;
            flex-direction: row;
            align-items: center;
            border
          }

          @media only screen and (min-width: 450px) {
            figure {
              width: 300px;
              height: 400px;
            }
          }


        `}
      </style>
    </> 
  );
};

export default FavoriteItem;   