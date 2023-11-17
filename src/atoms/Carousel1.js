import React, { useState, useEffect } from 'react';


const images = ['/img/Carousel1/Ruta-40.png', '/img/Carousel1/Jujuy-Purmamarca.png', '/img/Carousel1/Catamarca.png', '/img/Carousel1/Chubut-cholila.png', '/img/Carousel1/Neuquen.png', '/img/Carousel1/Resistencia-Chaco.png', '/img/Carousel1/San-Juan.png', '/img/Carousel1/Santa-Cruz-Calafate.png', '/img/Carousel1/Tucuman-El-Cadillal.jpg', '/img/Carousel1/Tucuman-San-Javier.jpg'];

//Este arrays contiene las url de las imagenes que se van a mostrar.

const Carousel1 = () => {
  //El Estado rastrea el indice actual de la imagen.
  const [currentIndex, setCurrentIndex] = useState(0);
 
  //Las dos funciones para avanzar y volver a la imagen anterior.
 
 const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  //El Efecto para cambiar automaticamente las imagenes cada 5 segundos.

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);

//Se limpia el intervalo cuando el componente se desmonta.

    return () => {
      clearInterval(intervalId);
    };
  }, []);

//Renderizado y Estilos utilizando style-jsx.
  
return (
  <>
  <div className="carousel-container">
    <div className="carousel-slide">
      <img className="card-img" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  </div>
  <style jsx>{`
  .carousel-container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0px 0px 10px 0px rgba(2, 2, 5, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 1rem;
  }
  .carousel-slide img {
    width: 60rem;
    height: 30rem;
    object-fit: cover;
  }
  .carousel-button:hover {
    background-color: blue;
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
`}</style>
  </>
  );
};

export default Carousel1;