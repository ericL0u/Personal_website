import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home-section">
      <div className="home-details">
        <h2>Let's work together.</h2>
        <p>
          I'm an <strong>independent creative developer</strong> from Abergavenny, South Wales. From interaction design to scalable design systems, single-page apps to something more experimental with WebGL. I help awesome people to build ambitious yet accessible web projects - <strong>the wilder, the better.</strong>
        </p>
        <button className="home-button">About my approach</button>
      </div>
    </section>
  );
}

export default Home;
