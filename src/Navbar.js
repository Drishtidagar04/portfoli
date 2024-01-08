// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import'./Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Your Logo</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/portfolio">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
