
import { useShopping } from "@/context/CartContext";
import CartItem from "./CartItem";
import { useState } from "react";

const ShoppingCart = () => {
  const { state, deleteToCart, clearToCart, handleClick } = useShopping();
  const { cart } = state;

  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const simulatePurchase = () => {
    console.log("Simulación de compra realizada");

    // Cierra el modal después de la compra simulada
    setShowCheckoutModal(false);

    alert("¡Compra realizada con éxito!");

    //clearToCart(); // Elimina los items del carrito una vez realizada la compra
  };

  const openCheckoutModal = () => {

    // Muestra el modal al hacer clic en "Terminar Reserva"
    setShowCheckoutModal(true);
  };

  return (
    <div className="cart">
      <h3>CARRITO</h3>
      <div className="grid-responsive">
        {cart.map((item, i) => (
          <CartItem key={i} item={item} deleteToCart={deleteToCart} />
        ))}
      </div>
      <div className="button-container">
        <button onClick={openCheckoutModal} className="checkout-button">
          Terminar Reserva
        </button>
        <button onClick={handleClick} className="clear-button">
          Limpiar Carrito
        </button>
      </div>
      {showCheckoutModal && (
        <div className="checkout-modal">
          <h3 className="checkout-tittle">CHECKOUT</h3>
          <form onSubmit={simulatePurchase}>
            <label>
              NOMBRE Y APELLIDO:
              <input type="text" name="nombre" required />
            </label>

            <label>
              EMAIL:
              <input type="email" name="email" required />
            </label>

            <label>
              NUMERO DE TARJETA:
              <input type="number" name="tarjeta" required />
            </label>

            <label>
              FECHA DE VENCIMIENTO:
              <input type="number" name="vencimiento" required />
            </label>

            <label>
                CUOTAS:
              <select name="cuotas" required>
                <option value="1">1 cuota sin interes</option>
                <option value="2">AHORA 3 </option>
                <option value="3">AHORA 6</option>
              </select>
            </label>

            <div className="button-group">
              <button type="submit" className="submit-button">
                Finalizar
              </button>
              <button type="button" onClick={() => setShowCheckoutModal(false)} className="cancel-button">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <style jsx>{`
        h3 {
          margin-top: 75px;
          margin-left: 25px;
        }

        .checkout-tittle {
          margin-bottom: 60px;
          margin-left: 145px;
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
          margin-bottom: 150px;
        }

        .checkout-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 40px;
          background-color: white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          z-index: 999;
          width: 500px; 
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 20px; 
        }

        label {
          display: flex;
          flex-direction: column;
          gap: 10px; 
        }

        .checkout-button,
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

        .checkout-button:hover,
        .clear-button:hover {
          background-color: #008d51;
        }

        .button-group {
          display: flex;
          gap: 10px;
          margin-left: 85px;
        }

        .submit-button,
        .cancel-button {
          padding: 12px 20px;
          border: none;
          cursor: pointer;
          border-radius: 4px;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }

        .submit-button {
          background-color: #00a55e;
          color: white;
        }

        .cancel-button {
          background-color: #d9534f;
          color: white;
        }

        .submit-button:hover,
        .cancel-button:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
};

export default ShoppingCart;