import React, { useState, useEffect } from 'react';


const images = [`https://blog2.alquilerargentina.com/wp-content/uploads/2018/04/cadillal.jpg`, `https://larutanatural.gob.ar/panel/public/uploads/rutas-naturales/generated/w1800,h1253,fcrop,q80/aa2bd951-8e3e-4cab-98f8-004eebe7992b.jpg`, `https://i.pinimg.com/originals/1a/f5/f1/1af5f108fee400d3f54fd90ef9d6d579.jpg`, `https://media.viajando.travel/p/63f976b8cdc1d2ce3ab05c9d5fa968d5/adjuntos/236/imagenes/000/589/0000589954/1200x0/smart/mendoza-la-formacion-rocosa-puente-del-inca-crea-un-puente-natural-el-rio-las-cuevas-y-sus-aguas-son-famosas-poseer-propiedades-curativas.jpg`];

const Carousel1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 6000);

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
    border-radius: 1rem;
    
  }
  .carousel-slide img {
    width: 96vw;
    height: 85vh;
  }
  .carousel-button {
    font-size: 2rem;
    margin: 2vw;
    padding: 0vw 1.5vw;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    border: none;
    position: absolute;
    border-radius:10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }

  .button-left {
    left: 5vw;
  }

  .button-right {
    right: 5vw;
  }

  .carousel-button:hover {
    background-color: rgba(0, 0, 0, 0.5);
    transition : 0.2s;
}
`}</style>
  </>
  );
};

export default Carousel1;