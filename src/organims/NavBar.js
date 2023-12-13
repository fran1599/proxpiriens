import { useState } from "react";
import Logo from "../atoms/Logo";
import MobileMenu from "../atoms/MobileMenu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="NavBar">
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: "#333",
            color: "#fff",
            position: "fixed",
            top: "0",
            width: "100%",
            zIndex: "999",
            
          }}
        >
          <Logo size={40} />
          <MobileMenu
            isMenuOpen={isMenuOpen}
            toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          />
        </nav>
      </div>
      <style jsx>{`
        .navbar {
        }
      `}</style>
    </>
  );
};

export default NavBar;
