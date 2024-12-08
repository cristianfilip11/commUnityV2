import React from 'react';
import './Navbar.css';

const Navbar = ({ onLogoClick, onReportClick }) => {
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
        <button className="report-button" onClick={onReportClick}>
          Semnalează problemă
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
