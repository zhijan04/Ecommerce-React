import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbarcontent">
      <div className="navbar-content">
        <Link to='/' className='sub'><h3 className="brand">Crowner's clothing</h3></Link>
        <ul className="button-list">
          <li><Link className="nav-button" to='/productos/pantalones'>Pantalones</Link></li>
          <li><Link className="nav-button" to='/productos/remeras'>Remeras</Link></li>
          <li><Link className="nav-button" to='/productos/buzos'>Buzos</Link></li>
          <li><CartWidget /></li>
          <li>0</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
