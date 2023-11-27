

    
const CartItem = ({item, deleteFromCart}) => {
                   
  const {id, title, precio, quantity} = item;

    return (
      <>
          <div className="cart-item">
            <h4>{title}</h4>
            <h5>${precio} x {quantity} = ${precio * quantity}</h5>
            <button onClick={() => deleteFromCart(id)}>Eliminar uno</button>
            <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
          </div>
        
        <style jsx>
        {`
         
        `}
      </style>
      </>
    );
  };
      
   
  
  
  export default CartItem
  