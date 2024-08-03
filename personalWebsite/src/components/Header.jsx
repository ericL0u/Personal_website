import React from 'react';
import './Header.css';
import logo from '../assets/logo.jpg';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="menu">MENU</span>
      </div>
      <div className="header-right">
        <span className="talk">Implementing chat ⊂(▀¯▀⊂ )</span>
      </div>
    </header>
  );
}

export default Header;
