import React,{useEffect, useState} from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import './styles/styles.css'
import { Navigate, useNavigate } from 'react-router-dom';

function Header({bgColor}) {
  const [isTransitioning, setIsTransitioning] = useState(false); 
  const [finalMove, setFinalMove] = useState(false);

  const navigate = useNavigate();

  const LogoButtonHandler = () => {
    setIsTransitioning(true);
    console.log(isTransitioning)
    setTimeout(() => {
      setFinalMove(true);
    }, 1000);

    setTimeout(() => {
      navigate('/Personal_website/');
    }, 1200); 
  }


  return (
    <header className="header" style={{backgroundColor: bgColor}}>

      <div
        className={`animatedScreen ${isTransitioning ? 'active' : ''} ${finalMove ? 'colorChange' : ''}` }
        // style={{backgroundColor: bgColor}} DIFFERENT CALCULATION NEEDED
      ></div>

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
