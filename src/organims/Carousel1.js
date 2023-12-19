

import { useState, useEffect } from 'react';

// Lista de rutas de imágenes para el carousel es local y está en el directorio del proyecto. 
const images = [  
  '/img/Carousel1/Catamarca.webp',
  '/img/Carousel1/Chubut.webp',
  '/img/Carousel1/Jujuy.webp',
  '/img/Carousel1/Mendoza.webp',
  '/img/Carousel1/Misiones.webp',
  '/img/Carousel1/Neuquen.webp',
  '/img/Carousel1/Ruta-40.webp',
  '/img/Carousel1/Santa-Cruz-Calafate.webp',
  '/img/Carousel1/Tucuman-San-Javier.webp',
  '/img/Carousel1/Tucuman.webp',
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
        <div className="carousel-wrapper">
          <button className="carousel-button button-left" onClick={prevSlide}>
            &lt;
          </button>
          <div className="carousel-slide">
            <img
              className="carousel-img"
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
            />
          </div>
          <button className="carousel-button button-right" onClick={nextSlide}>
            &gt;
          </button>
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        .text-container {
          text-align: center;
          width: 100%;
          margin-top: 55px;
          z-index: 2;
        }

        .carousel-wrapper {
          width: 100%;
          height: 500px;  
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .carousel-slide {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .carousel-img {
          object-fit: cover;
          transition: 0.2s;
          width: 100%;
          height: 100%;
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
          .carousel-container {
            height: 60vh; 
          }
        }

        @media screen and (max-width: 480px) {
          .carousel-container {
            height: 50vh; 
          }
        }
      `}</style>
    </>
 );
};

export default Carousel1;