import React from 'react';
import './Navbar.css'; // sau module CSS: import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>CityMap Issues</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Acasă</a></li>
        <li><a href="#map">Hartă</a></li>
        <li><a href="#about">Despre</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-cta">
        <a href="#report" className="report-button">Semnalează problemă</a>
      </div>
    </nav>
  );
};

export default Navbar;
