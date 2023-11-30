import React from 'react';

const ElegirnosSection = () => {
  
  const styles = `
    .elegirnos-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: flex-start;
    }

    .left-column, .right-column {
      width: 100%;
      max-width: 600px;
      padding: 20px;
      box-sizing: border-box;
    }

    .custom-list {
      list-style-type: none;
      padding-left: 20px;
    }

    .custom-list li {
      padding-left: 30px;
      background-image: url('../../public/img/Elegirnos/tilde.png');
      background-size: 20px 20px;
      background-repeat: no-repeat;
      background-position: 0 50%;
      margin-bottom: 10px;
    }

    .custom-list li:nth-child(2),
    .custom-list li:nth-child(3),
    .custom-list li:nth-child(4),
    .custom-list li:nth-child(5) {
      background-image: url('../../public/img/Elegirnos/tilde.png');
    }
  `;

  return (
    <div>
      {}
      <style>{styles}</style>

      {}
      <div className="elegirnos-section">
        <div className="container">
          <div className="left-column">
            <h2 style={{ fontFamily: 'SF Pro Display, sans-serif' }}>Por qué Elegirnos</h2>
            <h3 style={{ fontFamily: 'SF Pro Display, sans-serif' }}>Somos una empresa líder en excursiones en toda Latinoamérica. Desde 2023 revolucionamos la industria del turismo en Argentina.</h3>
            <ul className="custom-list">
              <li>Nuestro compromiso es brindarte una experiencia personalizada a cada paso de tu viaje.</li>
              <li>Nuestros pasajeros son nuestra prioridad y resolvemos tus dudas a través de nuestros canales digitales las 24 hs.</li>
              <li>Convertimos tus viajes en recuerdos únicos.</li>
              <li>Contamos con una amplia gama de destinos y adaptamos nuestros paquetes a cada una de tus necesidades.</li>
              <li>Somos 100% sustentables.</li>
            </ul>
            <button style={{ backgroundColor: '#DE9C2B', fontFamily: 'SF Pro Display, sans-serif' }}>Descubrí nuestros destinos</button>
          </div>

          <div className="right-column">
            <img
              src="../../public/img/Elegirnos/Puerto pirámides.jpg"
              alt="Avistamiento de ballena franca austral"
              style={{ width: '85%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElegirnosSection;