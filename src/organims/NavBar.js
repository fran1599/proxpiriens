


import { useState } from 'react';
import Logo from '../atoms/Logo';
import MobileMenu from '../atoms/MobileMenu';




const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#333', color: '#fff' }}>
    <Logo size={40}/>
    <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
    </nav>)


};

export default NavBar


