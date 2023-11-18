import React, { useState, useEffect } from 'react';

// Lista de rutas de imágenes para el carousel es local y está en el directorio del proyecto. 
const images = [
  '/img/Carousel1/Ruta-40.png',
  '/img/Carousel1/Jujuy.jpg',
  '/img/Carousel1/Catamarca.jpg',
  '/img/Carousel1/Chubut.jpg',
  '/img/Carousel1/Neuquen.png',
  '/img/Carousel1/Mendoza.jpg',
  '/img/Carousel1/Misiones.jpg',
  '/img/Carousel1/Santa-Cruz-Calafate.png',
  '/img/Carousel1/Tucuman.jpg',
  '/img/Carousel1/Tucuman-San-Javier.jpg'
];

const Carousel1 = () => {
  // El Estado rastrea el índice actual de la imagen.
  const [currentIndex, setCurrentIndex] = useState(0);

// Función nombrada nextSlide para avanzar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
// Función nombrada prevSlide para retroceder al slide anterrior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

//En este efecto se avanzar automáticamente al siguiente slide cada 8 segundos  
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 8000);

//El intervalo se limpia cuando el componente se desmonta
    return () => {
      clearInterval(intervalId);
    };
  }, []);

return (
  <>
  <div className="carousel-container">
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
     align-items: center;
     justify-content: center;
   }
   .carousel-img {
     object-fit: cover;
     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
     transition: 15s;
     width: 96vw;
     height: 85vh;
   }
   .carousel-img:hover {
     transform: scale(1.07);
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
   .carousel-button:hover {
     background-color: rgba(0, 0, 0, 0.5);
     transition : 0.2s;
   }
   @media screen and (max-width: 768px) {
     .carousel-slide img {
       width: 100%;
       height: auto;
     }
   }
   
   @media screen and (max-width: 480px) {
     .carousel-container {
       width: 100%;
     }
` }</style>
 </>
 );
 
};

export default Carousel1;