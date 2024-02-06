import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import Manager from '../Manager/Manager';

function Header() {
  return ( 
    <header className='menu'>
      <Logo />
      <Navigation />
      <Manager />
    </header>
  );
}

export default Header;