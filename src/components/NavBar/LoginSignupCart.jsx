import React from 'react';
import { Link } from 'react-router';

const LoginSignupCart = () => (
  <div className="login-navbar">
    <ul className="login-nav">
      <li>
        <Link to="login">Login/Signup</Link>
      </li>
      <li>
        <Link to="cart"><i className="fa fa-shopping-cart" /></Link>
      </li>
    </ul>
  </div>
);

export default LoginSignupCart;
