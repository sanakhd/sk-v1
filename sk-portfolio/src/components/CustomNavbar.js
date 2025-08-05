import React, { useState, useEffect } from "react";
import "../styles/CustomNavbar.css";
import { Link } from "react-scroll";

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      {/* Desktop Navigation */}
      <div className="nav-links desktop-nav">
        <Link to="landing" smooth={true} duration={500} offset={-80}>
          home
        </Link>
        <Link to="about" smooth={true} duration={500} offset={-80}>
          about
        </Link>
        <Link to="work" smooth={true} duration={500} offset={-80}>
          work
        </Link>
        <Link to="projects" smooth={true} duration={500} offset={-80}>
          projects
        </Link>
        <Link to="contact" smooth={true} duration={500} offset={-80}>
          contact
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-nav-links">
          <Link 
            to="landing" 
            smooth={true} 
            duration={500} 
            offset={-80}
            onClick={handleLinkClick}
          >
            home
          </Link>
          <Link 
            to="work" 
            smooth={true} 
            duration={500} 
            offset={-80}
            onClick={handleLinkClick}
          >
            work
          </Link>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            offset={-80}
            onClick={handleLinkClick}
          >
            about
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            offset={-80}
            onClick={handleLinkClick}
          >
            projects
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            offset={-80}
            onClick={handleLinkClick}
          >
            contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="menu-backdrop" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default CustomNavbar;