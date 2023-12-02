
import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
    const [chartSearch, setChartSearch] = useState(false)

    const handleSearch = () => {
         setChartSearch(!chartSearch);
    };
   
    const handleCart = () => {
        // Agregar lógica para abrir el carrito
        console.log('Abrir carrito');   
    };

    useEffect(() => {
      const handleResize = () => {
        // Solo cierro el menú si está abierto y la pantalla es más grande que 768px
        if (isMenuOpen && window.innerWidth > 768) {
          // Cierra el menú si la pantalla es más grande que 768px
          toggleMenu(false);
        }
      };
      // Agrego el evento de cambio de tamaño
      window.addEventListener('resize', handleResize);
      
      // Limpio el evento al desmontar el componente
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [isMenuOpen, toggleMenu]);

    return (
    <>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="menu-toggle" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </button>
        <ul className="menu-items">
            <li><a href="#">Nosotros</a></li>
            <li><Link href="/destinos">Destinos</Link></li>
            <li><a href="#">Paquetes</a></li>
            <li><a href="#">Contacto</a></li>
            <li className="menu-button">
              <button className="cart-button" onClick={handleCart}>
              <FontAwesomeIcon icon={faShoppingCart} />
              </button>
            </li>
            <li className="menu-button">
              <button className="search-button" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
              </button>
            </li>
        </ul>

          {chartSearch && (
            <div className="search-box">
              {/* Cuadro de búsqueda */}
              <form>
              <input type="text" placeholder="Buscar..." />
              <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
              </form>
            </div>
          )}
      </div>
        
      <style jsx>{`
      
        .mobile-menu {
          display: flex;
          align-items: center;
          z-index: 2;
        }
  
        .menu-toggle {
          background: none;
          border: none;
          cursor: pointer;
          display: none; /* Oculto por defecto */
          flex-direction: column;
          padding: 10px;
        }
  
        .bar {
          background-color: #fff;
          height: 3px;
          width: 30px;
          margin: 2px 0;
          transition: 0.4s;
        }

        .menu-button {
            margin-right: 20px;
            display: flex;
            align-items: center;
          }
    
          .cart-button, .search-button {
            background: none;
            border: none;
            cursor: pointer;
            color: #fff;
            font-size: 16px;
            margin: 0;
            padding: 0;
          }
    
          .cart-button {
            margin-right: 20px;
          }
        .menu-toggle.open .bar:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }
  
        .menu-toggle.open .bar:nth-child(2) {
          opacity: 0;
        }
  
        .menu-toggle.open .bar:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }
  
        .menu-items {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
        }
  
        .menu-items li {
          margin-right: 20px;
        }
  
        .mobile-menu.open .menu-toggle {
          display: flex;
        }
        
        .search-box {
          display: flex;
          align-items: center;
          position: absolute;
          top: 50px;
          right: 0;
          background-color: #333;
          padding: 10px;
        }

        .search-box form {
          display: flex;
        }

        .search-box input {
          padding: 5px;
          margin-right: 5px;
        }

        .search-box button {
          background: none;
          border: none;
          cursor: pointer;
          color: #fff;
          font-size: 16px;
        }
        
        @media (max-width: 768px) {
          .menu-items {
            display: none;
          }
  
          .mobile-menu.open .menu-items {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 50px;
            right: 0;
            background-color: #333;
            padding: 10px;
          }
  
          .mobile-menu .menu-toggle {
            display: flex; /* Mostrar solo en dispositivos móviles */
          }

        }
      `}</style>
    </>
  );
};


export default MobileMenu;
  