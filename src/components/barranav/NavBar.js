import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbarcontent">
      <div className="navbar-content">
        <Link to='/' className='sub'><h3 className="brand">Crowner's clothing</h3></Link>
        <ul className="button-list">
          <Link className="cssbuttons-io" to='/productos/pantalones'><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"></path></svg> Pantalones</span>
          </Link>
          <Link className="cssbuttons-io" to='/productos/remeras'><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"></path></svg> Remeras</span>
          </Link>
          <Link className="cssbuttons-io" to='/productos/buzos'><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"></path></svg> Buzos</span>
          </Link>
          <li><CartWidget /></li>
          <li>0</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
