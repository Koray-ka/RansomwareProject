import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // imports styles from navbar.css

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">CyberCare Quiz</h2>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/info">Info</Link></li>
        <li><Link to="/glossary">Glossary</Link></li>
      </ul>
    </nav>
  );
}// code above shows home page info page and glossary page onto the nav bar with a title as well

export default Navbar;
