import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Nav = () => {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav className="nav">
      <h1>Math Magician</h1>
      <ul className="nav-ul">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/calculator">
          <li>Calculator</li>
        </Link>
        <Link style={navStyle} to="/quote">
          <li>Quotes</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
