import React from 'react';
import './Navbar.css'; // sau module CSS: import styles from './Navbar.module.css';

const Navbar = ({ onLogoClick }) => {

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={onLogoClick}>
        <span>CityMap Issues</span>
      </div>

      <ul className="navbar-links">
        <li><a href="#forum">Forum</a></li>
        <li><a href="#feed">Feed</a></li>
      </ul>
      <div className="navbar-cta">
        <a href="#report" className="report-button">Semnalează problemă</a>
      </div>
    </nav>
  );
};

export default Navbar;
