import React from 'react';
import './Work.css';
import openSourceLogo from '../assets/logo.jpg';


const Project = ({ title, descrip1, descrip2, img, imgTitle }) => {
  return (
    <div className='work-item'>
      <img src={img} alt={imgTitle} className='work-logo' />
      <div className='flex-Col'>
      <div className='work-details'>
        <h3>{title}</h3>
        <p>{descrip1}</p>
        <p>{descrip2}</p>
      </div>
      <button className='work-button'>Get {title}</button>
    </div>
    </div>
  );
}

function Work() {
  const allProjects = {
    1: {
      'title': 'SynthWave \'84',
      'descrip1': 'I\'m a big fan of Visual Studio Code, but when I couldn\'t find a colour scheme I liked, I decided to roll my own. SynthWave was the result.',
      'descrip2': 'Since I first tweeted about its development the theme has proven to be wildly popular, passing one million downloads in September 2022.',
      'img': openSourceLogo,
      'imgTitle': 'SynthWave \'84 Logo'
    }
  }

  return (
    <section className="work-section work-font">
      <h2>Open Source.</h2>
      <p>
        From time to time I like to release open source projects to help the wider web development community. Below are two of my most popular releases.
      </p>
      {Object.keys(allProjects).map(key => {
        const project = allProjects[key];
        return (
          <Project
            key={key}
            title={project.title}
            descrip1={project.descrip1}
            descrip2={project.descrip2}
            img={project.img}
            imgTitle={project.imgTitle}
          />
        );
      })}
    <hr className="horizontal-line" />
    </section>
  );
}

export default Work;
