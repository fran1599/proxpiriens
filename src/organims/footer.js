
import React from 'react';

const Footer = () => {
    return (
      <>
      <footer className="footer">


        
<div className="banner">
<a href="https://www.facebook.com/"><img src="./img/footer/facebook.svg" alt="Facebook" className="icons-banner" /></a>
<a href="https://www.instagram.com/"><img src="./img/footer/instagram.svg" alt="Instagram" className="icons-banner" /></a>
<a href="https://www.twitter.com/"><img src="./img/footer/twitter.svg" alt="Twitter" className="icons-banner-fullscreen" /></a>
<a href="https://web.whatsapp.com/"><img src="./img/footer/whatsapp.svg" alt="Whatsapp" className="icons-banner" /></a>
<a href="https://tiktok.com/"><img src="./img/footer/tiktok.svg" alt="TikTok" className="icons-banner-fullscreen" /></a>
<a href="https://web.telegram.org/a/"><img src="./img/footer/telegram.svg" alt="Telegram" className="icons-banner-fullscreen" /></a>
</div>



<div className="footer-links">
  
    <img src="./LogoColorFloating.png" alt="Proxpiriens" />
 

    <div className="oferta-turistica">
      <h2>Oferta Turística</h2>
      <p><a href="">San Carlos de Bariloche</a></p>
      <p><a href="">Ciudad de Buenos Aires</a></p>
      <p><a href="">Cataratas del Iguazú</a></p>
      <p><a href="">Cerro de Los 7 Colores</a></p>
      <p><a href="">Ciudad de Córdoba</a></p>
      <p><a href="">Gualeguaychú</a></p>
      <p><a href="">Mendoza</a></p>
      <p><a href="">Glaciar Perito Moreno</a></p>
      <p><a href="">Puerto Madryn</a></p>
      <p><a href="">Ushuaia</a></p>
      <p><a href="">Valle de La Luna</a></p>
    </div>

    <div className="categorias">
      <h2>Categorías</h2>
      <p><a href="">Estadía</a></p>
      <p><a href="">Traslado</a></p>
      <p><a href="">Excursiones</a></p>
      <p><a href="">Paquetes</a></p>
    </div>

    <div className="club-de-beneficios">
      <h2>Club de Beneficios</h2>
      <p><a href="">Inscribirme</a></p>
    </div>

    <div className="nosotros">
      <h2>Nosotros</h2>
      <p><a href="">Nuestra Historia</a></p>
      <p><a href="">Trabajá con Nosotros</a></p>
      <p><a href="">Agencias Afiliadas</a></p>
      <p><a href="">Preuntas Frecuentes</a></p>
    </div>

    <div className="contacto">
      <h2>Contacto</h2>
      <p>0800-999-0000</p>
      <p>info@proxpirienstravel.com</p>
      <p><a href="">Buscanos en Redes</a></p>
      <p><a href="">Chateá con un asesor</a></p>
    </div>
  
</div>
</footer>

<style jsx>{`

      .footer {
        display: grid;
        place-items: center;
      }

      a {
        text-decoration: none;
        color: #000000;
      }

      .banner {
        width: 100%;
        background-image: url(./Footer-Proxpiriens.png);
        display: flex;
        justify-content: space-around;
        
      }

      .banner > a > img {
        width: 70px;
      }

      .icons-banner, .icons-banner-fullscreen {
        filter: invert(32%) sepia(31%) saturate(1523%) hue-rotate(290deg) brightness(99%) contrast(86%);
      }

      .footer-links > img {
        width: 60vw;
        padding-top: 7rem;
        margin-bottom: 3rem;
      }

      .footer-links {
        font-size: 1.5rem;
        padding-bottom: 2rem
      }

      .oferta-turistica, .categorias, .club-de-beneficios, .nosotros{
        display: none;
      }


      @media screen and (min-width: 1023px){

        .oferta-turistica, .categorias, .club-de-beneficios, .nosotros{
          display: block;
        }

        .banner {
          padding: 0.5rem;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          padding: 5rem 5rem 0 4rem;
          gap: 1.5rem;
          font-size: 1.1rem;
        }
        .footer-links > img {
          width: 15vw;
          padding-top: 0;
          margin-bottom: 3rem;
        }
      }
      `}</style>
      </>
    );
  };
  
  export default Footer;