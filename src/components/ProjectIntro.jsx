import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import './ProjectIntro.css';
import './styles/styles.css'

function ProjectIntro() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [colorChanged, setColorChanged] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const header = document.querySelector('.title');
    const paragraph = document.querySelector('.description')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show'); 
            setTimeout(() => {
              paragraph.classList.add('show');
            }, 1500);  
          }, 1000);
        }
      });
    });
    observer.observe(header);
  }, [])


  return (
    <div className='container bitter-home'>
      <div className='title'>
        Title 
      </div>
      <div className='description'>
        this is a brief summary of the project 
      </div>
    </div>
  );
}

export default ProjectIntro;