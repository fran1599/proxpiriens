import React, { useState, useEffect } from 'react';

// Lista de rutas de imágenes para el carousel es local y está en el directorio del proyecto. 
const images = [
  'https://onedrive.live.com/embed?resid=26221A9FCBB03F5A%21288&authkey=%21AAGYVpqUYxp9TRw&width=1024',
  'https://onedrive.live.com/embed?resid=26221A9FCBB03F5A%21284&authkey=%21AGEUiQanj3Vtjow&width=1024',
  'https://onedrive.live.com/embed?resid=26221A9FCBB03F5A%21283&authkey=%21ANHxHabg8QwcQy0&width=1024',
  'https://onedrive.live.com/embed?resid=26221A9FCBB03F5A%21282&authkey=%21ABNYMowcjTsUXXE&width=1024',
  'https://onedrive.live.com/embed?resid=26221A9FCBB03F5A%21286&authkey=%21ALNgOQ2deLYwYMY&width=1024',
  'https://onedrive.live.com/embed?resid=26221A9FCBB03F5A%21285&authkey=%21APVvF4SQL4YjtRU&width=1024',
  'https://onedrive.live.com/embed?resid=26221A9FCBB03F5A%21287&authkey=%21ACiR82nFudWqCsM&width=1024',
  'https://onedrive.live.com/embed?resid=26221A9FCBB03F5A%21289&authkey=%21AMI_WORx_DpSVn8&width=1024',
  'https://onedrive.live.com/embed?resid=26221A9FCBB03F5A%21290&authkey=%21AHrdpTdYlknrs1E&width=1024',
  'https://onedrive.live.com/embed?resid=26221A9FCBB03F5A%21291&authkey=%21AGZLMpatcAXW4-8&width=1024'
];
//Cambio de colores de letras
const colors = [
  { h1: '#F4F4F8', h2: '#D7B860' },
  { h1: '#5B2747', h2: '#CAB3A9' },
  { h1: '#4F5A5D', h2: '#845C41' },
  { h1: '#22517C', h2: '#284902' },
  { h1: '#878459', h2: '#325076' },
  { h1: '#B3BACB', h2: '#F1E5DB' },
  { h1: '#C4B457', h2: '#04356F' },
  { h1: '#8A4118', h2: '#FDFCF9' },
  { h1: '#F0F1F4', h2: '#9D948C' },
  { h1:'#000000' , h2:  '#F61118'}
];

const Carousel1 = () => {
  // El Estado rastrea el índice actual de la imagen.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función nombrada nextSlide para avanzar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función nombrada prevSlide para retroceder al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // En este efecto se avanza automáticamente al siguiente slide cada 8 segundos
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 8000);

    // El intervalo se limpia cuando el componente se desmonta
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const currentColor = colors[currentIndex];
  
  return (
    <>
      <div className="carousel-container">
        <div className="text-container">
          <h1 style={{ color: currentColor.h1 }}>La Aventura te espera...</h1>
          <h2 style={{ color: currentColor.h2 }}>viaja con nosotros</h2>
        </div>
        <button className="carousel-button button-left" onClick={prevSlide}>&lt;</button>
        <div className="carousel-slide">
          <img className="carousel-img" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
        <button className="carousel-button button-right" onClick={nextSlide}>&gt;</button>
      </div>

      <style jsx>{`
        .carousel-container {
          width: 100%;
          height: auto;
          margin: 0 auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 40px;
        }

        .text-container {
          text-align: center;
          width: 100%;
          margin-top: 0.1rem;
          margin-bottom: 0.1rem; 
        }

        .carousel-img {
          object-fit: cover;
          
          transition: 0.2s;
          width: 96vw;
          height: 80vh;
        }

        .carousel-img:hover {
          transform: scale(1.005);
          box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
        }

        .carousel-button {
          font-size: 2rem;
          margin: 2vw;
          padding: 0vw 1.5vw;
          cursor: pointer;
          background-color: rgba(0, 0, 0, 0.2);
          color: white;
          border: none;
          border-radius: 10px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          transition: 2s;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
        }

        .button-left {
          left: 1vw;
        }

        .button-right {
          right: 1vw;
        }

        @media screen and (max-width: 768px) {
          .carousel-slide img {
            width: 100%;
            height: auto;
          }
          h1 {
            font-size: 1.5rem;
          }
          h2 {
            font-size: 1.5rem;
          }
        }

        @media screen and (max-width: 480px) {
          .carousel-container {
            width: 100%;
            height: auto;
          }
          .carousel-button {
            display: none;
          }
          h1 {
            font-size: 1rem;
          }
          h2 {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
 );
};

export default Carousel1;