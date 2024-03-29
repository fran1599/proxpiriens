

// Información acerca de uno de los destinos, en este caso San Carlos de Bariloche 

const BarilocheSection = () => {
 
  return (
   <>
      <div className="bariloche-section">
        <div className="container">
          <div className="left-column">
            <img
              src="/img/Bariloche/Bariloche 1.jpeg"
              alt="Lago Nahuel Huapí"
            />
          </div>

          <div className="right-column">
            <h2 className="destacado">DESTINO DESTACADO DEL MES</h2>
            <br/>
            <h2>San Carlos de <span style={{ color: '#0f224c' }}>Bariloche</span></h2>
            <br/>
            <h3>Río Negro - Patagonia Argentina</h3>
            <br/>
            <p>
              Bariloche es uno de los destinos más visitados de la Argentina. ​Recibe alrededor de dos millones de turistas anualmente, principalmente en temporada invernal.
              <br/>
              Está ubicada en el parque nacional Nahuel Huapi, en el suroeste de la provincia de Río Negro, junto a la cordillera de los Andes, en la ribera sur del lago Nahuel Huapi, a 832 km de Viedma, la capital de la provincia.
              <br/>
              Dentro del circuito turístico obligado se encuentra la visita al cerro Tronador pasando por el lago Mascardi, por el cual pueden realizarse paseos lacustres, y visitando el glaciar ventisquero Negro en su base. También es posible ascender hasta la cima del cerro Tronador, pernoctando en el camino en un refugio de montaña.
              <br/>
              La ciudad ha sido considerada por algunas fuentes como el segundo destino de esquí a nivel mundial y el más grande de América del Sur.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`

        .bariloche-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          min-height: 100vh;
          height: 100%;
        }

        .destacado {
          font-style: italic;
          text-decoration: underline;
        }
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: flex-start;
        }

        .left-column,
        .right-column {
          width: 100%;
          max-width: 600px;
          padding: 20px;
          box-sizing: border-box;
        }

        .left-column img {
          width: 100%; 
          max-height: 400px; 
          margin-bottom: 20px; 
          margin-top: 80px;
        }

        .right-column p {
          line-height: 1.6;
        }

        @media only screen and (max-width: 768px) {
          .left-column img {
            margin-top: 40px;
          }
        }

        @media only screen and (max-width: 480px) {
          .left-column img {
            margin-top: 20px;
          }
          
      `}</style>
    </>
  );
};

export default BarilocheSection;