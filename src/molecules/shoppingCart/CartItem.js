

const CartItem = ({ item, deleteToCart }) => {
  const { title, price, id, quantity, img } = item;

  return (
    <>
    <div className="container">
      <div className="cart-item">
        <img src={img} alt={`Imagen de ${title}`} />
        <div className="details">
          <h4>{title}</h4>
          <p>Precio: ${price} x {quantity} = ${price * quantity}</p>
          <p>Pasajeros: {quantity}</p>
        </div>
        <div className="keypad">
          <button onClick={() => deleteToCart(id)}>ELIMINAR</button>
          <button onClick={() => deleteToCart(id, true)}>LIMPIAR</button>
        </div>
      </div>
      </div>

      <style jsx>{`

        .cart-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: white;
          border: 2px solid #d8d8d8; 
          border-radius: 8px;
          box-shadow:  0 4px 8px #000; 
          margin-bottom: 20px;
          margin-left: 10px;
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

        .details {
          padding: 15px;
          width: 100%;
          text-align: center;
        }

        h4 {
          color: var(--primary-color);
          font-size: 1.5rem;
          margin-bottom: 5px;
        }

        p {
          font-size: 1rem;
          color: var(--gray-color);
          margin-bottom: 5px;
        }

        .keypad {
          display: flex;
          justify-content: space-around;
          width: 100%;
          padding: 10px;
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

export default CartItem;