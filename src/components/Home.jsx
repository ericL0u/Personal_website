import React from 'react';
import './Home.css';
import './styles/styles.css'

function Home() {
  return (
    <section className="home-section">
      <div className="home-details">
        <h2>Let's work together
        <span className='dot'>!</span>
        </h2>
        <p>
          I'm a <strong>creative, analytical, communication-oriented</strong> 3rd year student at the University of Toronto studying computer engineering. I have worked on several web service applciations that achieve excellence in both usibility and accessbility. In my free time, I love to explore on new technologies and automation related projects! 
          I am also someone who takes initiative and able to come up with 
          <strong> unique and creative</strong> solutions to solve problems.
        </p>
        <button className="home-button">About my approach</button>
      </div>
    </section>
  );
}

export default Home;
