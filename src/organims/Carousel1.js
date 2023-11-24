import React, { useState, useEffect } from 'react';

// Lista de rutas de imágenes para el carousel es local y está en el directorio del proyecto.
const images = [
  '/img/Carousel1/Ruta-40.webp',
  '/img/Carousel1/Tucuman-San-Javier.webp',
  '/img/Carousel1/Chubut.webp',
  '/img/Carousel1/Mendoza.webp',
  '/img/Carousel1/Catamarca.webp',
  '/img/Carousel1/Tucuman.webp',
  '/img/Carousel1/Jujuy.webp',
  '/img/Carousel1/Santa-Cruz-Calafate.webp',
  '/img/Carousel1/Misiones.webp',
  '/img/Carousel1/Neuquen.webp'
];

const colors = [
  { h1: 'white', h2: 'yellow' },
  { h1: 'black', h2: 'red' },
  { h1: 'blue', h2: 'white' },
  { h1: 'green', h2: 'yellow' },
  { h1: 'red', h2: 'white' },
  { h1: 'white', h2: 'blue' },
  { h1: 'yellow', h2: 'black' },
  { h1: 'orange', h2: 'white' },
  { h1: 'pink', h2: 'black' },
  { h1: 'purple', h2: 'white' }
];

const Carousel1 = () => {
  // Este es un estado para realizar el seguimiento al índice actual de la imagen
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
          margin: 0 auto;
          padding: 20px;
          box-shadow: 0px 0px 10px 0px rgba(2, 2, 5, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .text-container {
          text-align: center;
          width: 100%;
          margin-top: 0.1rem;
          margin-bottom: 0.1rem; 
        }

        .carousel-img {
          object-fit: cover;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
          transition: 0.5s;
          width: 96vw;
          height: 88vh;
        }

        .carousel-img:hover {
          transform: scale(1.005);
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
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