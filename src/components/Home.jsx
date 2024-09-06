import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import './styles/styles.css'

function Home() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [colorChanged, setColorChanged] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const header = document.querySelector('.home-details h2');
    const paragraph = document.querySelector('.home-details p')
    const button = document.querySelector('.home-button')

    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show'); 
          setTimeout(() => {
            paragraph.classList.add('show');
            button.classList.add('show')
          }, 1000);
        }
      });
    });
    observer.observe(header);
  }, [])

  const handleTransition = () => {

    setIsTransitioning(true);
    console.log(isTransitioning)
    setTimeout(() => {
      setColorChanged(true);
    }, 500); 

    setTimeout(() => {
      navigate('/Personal_website/work/1'); 
    }, 1050); 
  };

  return (
    <section className="home-section">
      <div className='screen-cover'></div>
      <div className="home-details bitter-home">
        <h2>Let's work together
        <span className='dot'>!</span>
        </h2>
        <p>
          I'm a <strong>creative, analytical, communication-oriented</strong> 3rd year student at the University of Toronto studying computer engineering. I have worked on several web service applciations that achieve excellence in both usibility and accessbility. In my free time, I love to explore on new technologies and automation related projects! 
          I am also someone who takes initiative and able to come up with 
          <strong> unique and creative</strong> solutions to solve problems.
        </p>
        <button className="home-button bitter-home"  onClick={handleTransition}>More about me</button>
      </div>
      
      <div className={`screen-cover ${isTransitioning ? 'active' : ''} ${colorChanged ? 'color-changed' : ''}`}></div>
    </section>
  );
}

export default Home;
