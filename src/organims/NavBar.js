

import { useState } from 'react';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import './Navbar.css';


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="navbar">
    <Logo />
    <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
  </nav>
);
}

export default NavBar


