import React from 'react';
import { Link } from 'react-router';

const NavBar = () => (
  <nav>
    <Link to="/">
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
  </nav>
);

export default NavBar;
