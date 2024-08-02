import React from 'react';
import './Work.css';
import openSourceLogo from '../assets/logo.jpg'
function Work() {
  return (
    <section className="work-section">
      <h2>Open Source.</h2>
      <p>
        From time to time I like to release open source projects to help the wider web development community. Below are two of my most popular releases.
      </p>
      <div className="work-item">
        <img src={openSourceLogo} alt="Open Source Project" className="work-logo" />
        <div className="work-details">
          <h3>SynthWave '84.</h3>
          <p>
            I'm a big fan of Visual Studio Code, but when I couldn't find a colour scheme I liked, I decided to roll my own. SynthWave '84 was the result.
          </p>
          <p>
            Since I first tweeted about its development the theme has proven to be wildly popular, passing one million downloads in September 2022.
          </p>
          <button className="work-button">Get SynthWave '84</button>
        </div>
      </div>
    </section>
  );
}

export default Work;
