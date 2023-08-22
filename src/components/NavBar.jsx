import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h3 className="brand">Tienda Zhijan</h3>
        <ul className="button-list">
          <li><button className="nav-button">Celulares</button></li>
          <li><button className="nav-button">Tablets</button></li>
          <li><button className="nav-button">Notebooks</button></li>
          <li><CartWidget /></li>
          <li>0</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
