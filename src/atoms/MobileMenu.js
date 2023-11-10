
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';


const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
    const handleSearch = () => {
        // Agregar lógica para mostrar el cuadro de búsqueda
        console.log('Mostrar cuadro de búsqueda');
    };

    const handleCart = () => {
        // Agregar lógica para abrir el carrito
        console.log('Abrir carrito');
    };
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
            <li><a href="#">Destinos</a></li>
            <li><a href="#">Paquetes</a></li>
            <li><a href="#">Contacto</a></li>
            <li className="menu-button"><button className="cart-button" onClick={handleCart}><FontAwesomeIcon icon={faShoppingCart} /></button></li>
            <li className="menu-button"><button className="search-button" onClick={handleSearch}><FontAwesomeIcon icon={faSearch} /></button></li>
        </ul>
      </div>
        
      <style jsx>{`
      
        .mobile-menu {
          display: flex;
          align-items: center;
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
  