import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav id="header">

      {/* logo + mobile menu opener */}
      <div id="logo">
        <h1>
          <Link to="/contact" >StoneWork</Link>
        </h1>
        <button className="hamburger">☰</button>
      </div>

      {/* Memu */}
      <div id="menu">
        <ul>
          <li className="active" >
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clients">Our Clients</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">Career</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

    </nav>
  );
};