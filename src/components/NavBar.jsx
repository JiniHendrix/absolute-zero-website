import React from 'react';
import { Link } from 'react-router';

const NavBar = () => (
  <nav>
    <Link to="/">
      <img src="#" alt="logo" />
    </Link>
    <ul className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
