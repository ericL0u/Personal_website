import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import './styles/styles.css'
import { Navigate, useNavigate } from 'react-router-dom';

function Header({bgColor}) {

  const navigate = useNavigate();
  const LogoButtonHandler = () => {
    navigate('/Personal_website/')
  }
  return (
    <header className="header" style={{backgroundColor: bgColor}}>
      <div className="header-left">

        <button className='LogoButton' onClick={LogoButtonHandler} >
        <img src={logo} alt="Logo" className="profile_pic" />
        </button>

        <button className="menu" >        
        MENU
        </button>

      </div>
      <div className="header-right">
        
        <span className="talk">Implementing chat ⊂(▀¯▀⊂ )</span>
      </div>
    </header>
  );
}

export default Header;
