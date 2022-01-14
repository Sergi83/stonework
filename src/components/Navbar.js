import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { linksNavbar } from '../content/links';


export default function Navbar() {
  return (
    <nav id="header">

      {/* logo + mobile menu opener */}
      <div id="logo">
        <h1>
          <Link to="/contact" className="a">StoneWork</Link>
        </h1>
        <button className="hamburger">☰</button>
      </div>

      {/* Memu */}
      <div id="menu">
        <ul>
          {/* <li className="active" >
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clients">Our Clients</Link>
          </li>
          <li>
            <Link to="/#/about">About Us</Link>
          </li>
          <li>
            <Link to="/#/general-inf">Career</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li> */}

          {/* show navbar links */}
            {linksNavbar.map((link) => {
              const { id, url, text } = link;

              if(id === 0) {
                return (
                  <li key={id} className="active">
                  <NavLink to={url} className="a">
                    {text}
                  </NavLink>
                </li>
                )
              } else return (
                <li key={id}>
                  <NavLink to={url} className="a">
                    {text}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </div>

    </nav>
  );
};