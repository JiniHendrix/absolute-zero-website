import React from 'react';
import { Link } from 'react-router';

const NavBar = () => (
  <nav className="navbar">
    <Link className="logo" to="/">
      <img src="#" alt="logo" />
    </Link>
    <ul className="nav-links-wrapper">
      <li className="nav-link">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-link">
        <Link to="/about">About</Link>
      </li>
      <li className="nav-link">
        <Link to="/products">Products</Link>
      </li>
    </ul>
    <button className="nav-btn">
      <hr />
      <hr />
      <hr />
    </button>
  </nav>
);

export default NavBar;
