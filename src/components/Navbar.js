import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services'className='nav-links'onClick={closeMobileMenu}>
                Services
              </Link>
            </li>

            <li className='nav-links-logo'>
              <Link to='/'className='navbar-logo'onClick={closeMobileMenu}>
              <img alt="Error" src="images/logo.png" width="250" />
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/products' className='nav-links'onClick={closeMobileMenu}>
                Gallery 
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products'className='nav-links'onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>            
          </ul>      
        </div>
      </nav>
    </>
  );
}

export default Navbar;