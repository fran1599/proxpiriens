

//Razones por las cuales los clientes deberían elegirnos

const ElegirnosSection = () => {
  return (
    <>
      <div id="ElegirnosSection" className="elegirnos-section">
        <div className="container">
          <div className="centered-content">
            <div className="left-column">
              <h2>POR QUE <span style={{ color: '#de9c2b' }}>ELEGIRNOS</span></h2>
              <br/>
              <h3 style={{ fontFamily: 'SF Pro Display, sans-serif' }}>Somos una empresa líder en excursiones en toda Latinoamérica. Desde 2023 revolucionamos la industria del turismo en Argentina.</h3>
              <br/>
              <ul className="custom-list">
                <li>Nuestro compromiso es brindarte una experiencia personalizada a cada paso de tu viaje.</li>
                <li>Nuestros pasajeros son nuestra prioridad y resolvemos tus dudas a través de nuestros canales digitales las 24 hs.</li>
                <li>Convertimos tus viajes en recuerdos únicos.</li>
                <li>Contamos con una amplia gama de destinos y adaptamos nuestros paquetes a cada una de tus necesidades.</li>
                <li>Somos 100% sustentables.</li>
              </ul>
            </div>

            <div className="right-column">
              <img
                src="/img/Elegirnos/Puerto pirámides.jpg"
                alt="Avistamiento de ballena franca austral"
                style={{ width: '100%', height: 'auto', marginLeft: '30px' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #ElegirnosSection {
          min-height: 100vh;
          height: 100%;
        }

        .elegirnos-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center; 
          padding: 20px;
        }
    
        .container {
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
        }

        .centered-content {
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 100%;
        }
    
        .left-column, .right-column {
          width: 100%;
          max-width: 600px;
          box-sizing: border-box;
        }
    
        .custom-list {
          list-style-type: none;
          padding-left: 20px;
          line-height: 1.5;
        }
    
        .custom-list li {
          padding-left: 30px;
          background-image: url('/img/Elegirnos/tilde.png');
          background-size: 20px 20px;
          background-repeat: no-repeat;
          background-position: 0 50%;
          margin-bottom: 10px;
        }
    
        .custom-list li:nth-child(2),
        .custom-list li:nth-child(3),
        .custom-list li:nth-child(4),
        .custom-list li:nth-child(5) {
          background-image: url('/img/Elegirnos/tilde.png');
        }

        
        @media only screen and (max-width: 768px) {
          .centered-content {
            flex-direction: column;
          }

          .right-column {
            margin-top: 20px;
            margin-right: 50px; 
          }
          .right-column img {
            width: 100%; 
          }

      `}</style>
    </>
  );
};

export default ElegirnosSection;