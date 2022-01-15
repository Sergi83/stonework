import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { linksNavbar } from "../content/links";

export default function Navbar() {
  // add hook for open/close mobile menu and show/hide menu button
  const [mobileMenu, setMobileMenu] = useState(false);

  // add/delete the class name (has some styles) to the button, menu, li
  const toggleMobileMenu = (e) => {
    e.preventDefault();
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav id="header">
      {/* logo + mobile menu opener */}
      <div id="logo">
        <h1>
          <Link to="/" className="a">
            StoneWork
          </Link>
        </h1>
        <button className={mobileMenu ? 'hamburger active_menu' : 'hamburger'} onClick={toggleMobileMenu}>☰</button>
      </div>

      {/* Memu */}
      <div id="menu" className={mobileMenu ? 'active_menu' : ''}>
        <ul>
          {/* show navbar links */}
          {linksNavbar.map((link) => {
            const { id, url, text } = link;

            if (id === 1) {
              return (
                <li key={id} onClick={toggleMobileMenu} className={mobileMenu ? 'active active_menu' : 'active'}>
                  <NavLink to={url} className="a">
                    {text}
                  </NavLink>
                </li>
              );
            } else
              return (
                <li key={id} onClick={toggleMobileMenu} className={mobileMenu ? 'active_menu' : ''}>
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
}
