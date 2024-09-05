import React from 'react';
import './About.css';
import profilePic from '../assets/logo.png'; // Adjust the path according to your project structure
import './styles/styles.css'


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

        <img src={profilePic} alt="Profile" className="profile-pic" />

    </section>
  );
}

export default About;
