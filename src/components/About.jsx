import React from 'react';
import './About.css';
import profilePic from '../assets/logo.png'; // Adjust the path according to your project structure
import './styles/styles.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function About() {
  return (
    <section className="about-section">

      <div className="about-content">
        
        <h1 className='intro bitter-title'>Hi, 
          <br />
          my name is   
            <strong> Eric</strong>
            <span className='dot'>.</span>
        </h1>

        <h2 className='description bitter-title'> 
          I am <strong>3rd year Computer Engineering student  </strong>from the University of Toronto.
        </h2>
        <p className="scroll-text bitter-title">
          <span>S</span>
          <span>C</span>
          <span>R</span>
          <span>O</span>
          <span>L</span>
          <span>L</span>
        </p>
        <div className="scroll-line"></div>
      </div>
        <div className='imgIcon'>
        <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className='iconOutline'> 
          <a href="https://github.com/ericL0u" target="_blank" rel="noopener noreferrer">
          <button className='Icons'><FaGithub /></button>
          </a>
          <a href="https://www.linkedin.com/in/eric-lou-00000k0l/" target="_blank" rel="noopener noreferrer">
          <button className='Icons'><FaLinkedin /></button>
          </a>
          </div>
        </div>
    </section>
  );
}

export default About;
