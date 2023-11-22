import React, { useState } from "react";

function ButtonFavorite() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  const image = isFavorite ? "./icon/heart.png" : "./icon/heart-empty.png";

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
