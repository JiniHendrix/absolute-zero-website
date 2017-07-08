import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  const navs = {
    home: {
      text: 'Home',
      to: '/',
    },
    about: {
      text: 'About',
      to: '/about',
    },
    products: {
      text: 'Products',
      to: '/products',
    },
  };

  const mainNavLinks = [];
  const hiddenNavLinks = [];

  const keys = Object.keys(navs);

  for (let i = 0; i < keys.length; i += 1) {
    mainNavLinks.push(
      <li className="nav-link">
        <Link to={navs[keys[i]].to}>{navs[keys[i]].text}</Link>
      </li>,
    );
    hiddenNavLinks.push(
      <li className="hidden-nav-link">
        <Link to={navs[keys[i]].to}>{navs[keys[i]].text}</Link>
      </li>,
    );
  }

  const handleMenuClick = () => {
    const hrs = document.querySelectorAll('.nav-btn .menu-bar');
    const hiddenMenu = document.querySelector('.hidden-menu');
    const container = document.querySelector('.container');

    container.classList.toggle('move-down');
    hiddenMenu.classList.toggle('turn-on');

    hrs.forEach((node, i) => {
      if (i === 0) {
        node.classList.toggle('rotate-top');
      } else if (i === 1) {
        node.classList.toggle('turn-off');
      } else {
        node.classList.toggle('rotate-bot');
      }
    });
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <Link className="logo" to="/">
          <img src="#" alt="logo" />
        </Link>
        <ul className="nav-links-wrapper">
          {mainNavLinks}
        </ul>
        <button onClick={handleMenuClick} className="nav-btn">
          <div className="menu-bar" />
          <div className="menu-bar" />
          <div className="menu-bar" />
        </button>
      </nav>
      <div className="pos">
        <ul className="hidden-menu">
          {hiddenNavLinks}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
