import React, { useState, useEffect } from "react";
import "../Design/Navbar.css";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <Link to="/">RRC</Link>
      </div>
      
      {menuOpen ? (
        <RiCloseFill className="menu-icon" onClick={toggleMenu} />
      ) : (
        <RiMenuFill className="menu-icon" onClick={toggleMenu} />
      )}
      
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/splashscreen" onClick={() => setMenuOpen(false)}>Client-Login</Link>
        <Link to="/support-services" onClick={() => setMenuOpen(false)}>Support Services</Link>
        <Link to="/atoz-research" onClick={() => setMenuOpen(false)}>A to Z Research</Link>
        <Link to="/journal" onClick={() => setMenuOpen(false)}>Journal Publications</Link>
        <Link to="/achiever-services" onClick={() => setMenuOpen(false)}>Achiever Services</Link>
        
        <div 
          className="contact-dropdown" 
          onMouseEnter={() => setDropdownOpen(true)} 
          onMouseLeave={() => setDropdownOpen(false)}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <Link to="/contactUs" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <div className={`dropdown-menu ${dropdownOpen ? "active" : ""}`}>
            <Link to="/enquiry" onClick={() => setMenuOpen(false)}>Enquiry</Link>
            <Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/journal-portal" onClick={() => setMenuOpen(false)}>Employee Login</Link>
            <Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
            <Link to="/internship-program" onClick={() => setMenuOpen(false)}>Internship</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;