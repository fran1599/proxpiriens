


const MobileMenu = ({ isMenuOpen, toggleMenu }) => (
    <>
    <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="menu-toggle" onClick={toggleMenu}>
        ☰
        </button>
        <ul className="menu-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>

    <style jsx>{`
        .mobile-menu {
            display: flex;
            align-items: center;
        },
        .menu-toggle {
            font-size: 24px;
            cursor: pointer;
            display: none; /* Ocultamos el icono en pantallas más grandes */
        },
        .menu-items {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
        },
        .menu-items li {
            margin-right: 20px;
        }
        

    `}</style>
    </>
);

export default MobileMenu;

