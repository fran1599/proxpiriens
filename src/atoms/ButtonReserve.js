

const ButtonReserve = ({bgcolor, onClick}) => {
  const handleButtonClick = () => {
    if (onClick) {
      onClick(); // Llama a la función onClick si se proporciona
    }
  }
                                   
  return (
      <>
        <button onClick ={handleButtonClick}>Reservar ahora</button>
        <style jsx>
          {`
            button {
              color: white;
              background-color: ${bgcolor ? bgcolor : "gray"};
              border: none;
              border-radius: 0.5rem;
              box-shadow: 1px 2px 2px black;
              padding: 10px 20px;
              text-transform: uppercase;
              font-weight: bold;
             
              margin:auto;
              cursor: pointer;
              
            }
            button:hover {
              transform: traslateY(2px);
              box-shadow: none;
  
            }
          `}
        </style>
      </>
    );
  };
  
  export default ButtonReserve;