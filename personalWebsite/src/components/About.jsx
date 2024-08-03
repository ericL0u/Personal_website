import React from 'react';
import './About.css';
import profilePic from '../assets/logo.jpg'; // Adjust the path according to your project structure

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Hi, my name is <strong>Eric.</strong></h1>
        <p className="scroll-text">SCROLL</p>
      </div>
      <div className="scroll-line"></div>
    </section>
  );
}

export default About;
