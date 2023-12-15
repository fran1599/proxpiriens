import { useState, useEffect } from "react";
import Link from "next/link";
import { useShopping } from "@/context/CartContext";

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  const [chartSearch, setChartSearch] = useState(false);

  const { cartCount, favoritesCount } = useShopping();

  const handleSearch = () => {
    setChartSearch(!chartSearch);
  };

  const handleCart = () => {
    // Agregar lógica para abrir el carrito
    console.log("Abrir carrito");
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
    window.addEventListener("resize", handleResize);

    // Limpio el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen, toggleMenu]);

  return (
    <>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <button className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul className="menu-items">
          <li>
            <Link href="/">
              Inicio
            </Link>
          </li>

          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <Link href="/destinos">Destinos</Link>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li className="menu-button">
            <Link href="/cart">
              <button className="cart-button" onClick={handleCart}>
                <img src="/icon/cart.png" alt="cart" className="cart-image" />
                {cartCount > 0 && (
                  <span className="cart-count">{cartCount}</span>
                )}
              </button>
            </Link>
          </li>
          <li>
            <Link href="/favorites">
              <div className="favorites-icon-container">
                <img
                  src="/icon/heart.png"
                  alt="Favorites"
                  className="favorites-icon"
                />
                {favoritesCount > 0 && (
                  <span className="favorites-count">{favoritesCount}</span>
                )}
              </div>
            </Link>
          </li>
          <li className="menu-button">
            <button className="search-button" onClick={handleSearch}>
              <img src="/icon/lupa.png" alt="find" className="find-image" />
            </button>
          </li>
        </ul>
        {chartSearch && (
          <div className="search-box">
            {/* Cuadro de búsqueda */}
            <form>
              <input type="text" placeholder="Buscar..." />
              <button type="submit">
                <img src="/icon/lupa.png" alt="find" className="find-image" />
              </button>
            </form>
          </div>
        )}
      </div>

      <style jsx>{`


        .mobile-menu {
          display: flex;
          align-items: center;
          font-family: 'roboto', sans-serif; 
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

        .cart-button,
        .search-button {
          background: none;
          border: none;
          cursor: pointer;
          color: #fff;
          margin: 0;
          padding: 0;
        }
        .cart-image {
          height: 20px;
        }
        .find-image {
          height: 20px;
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

        .favorites-icon-container {
          width: auto;
          height: auto;
        }

        .favorites-icon {
          width: 22px;
          height: auto;
          cursor: pointer;
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

          .cart-count {
            position: absolute;
            top: 0;
            right: 0;
            background-color: #ff0000;
            color: #ffffff;
            border-radius: 50%;
            padding: 0.2rem 0.5rem;
          }
          .favorites-count {
            position: absolute;
            top: 0;
            right: 0;
            background-color: #ff0000;
            color: #ffffff;
            border-radius: 50%;
            padding: 0.2rem 0.5rem;
          }
          .favorites-icon-container {
            width: 20px;
            height: auto;
            margin-right: 20px;
          }

          .favorites-icon {
            width: 100%;
            height: auto;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};

export default MobileMenu;
