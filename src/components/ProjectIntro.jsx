import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './ProjectIntro.css';
import './styles/styles.css'
import { TbTextSize } from 'react-icons/tb';

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
    <>
    <div className='container bitter-home'>
      <div className='title'>
        Experience Timeline 
      </div>
      <div className='description'>
        This is an overview of my development journey!
      </div>
    </div>
    <div className='TimeLineContainer normalFont'>
    <VerticalTimeline>

    <VerticalTimelineElement
      className="vertical-timeline-element--work bitter-home"
      date="2022-present"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentStyle={{width: '350px', marginLeft:'150px'}}
      dateClassName='date-left date-font'
    >
      <h3 className="vertical-timeline-element-title">Computer Engineering Student - University of Toronto</h3>
      <h4 className="vertical-timeline-element-subtitle">Toronto, CA</h4>
      <p style={{ fontSize: '1.6rem'}}>
        Enrolled in ECE program of UofT.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work bitter-home"
      date="2023 May - 2023 Sept"
      dateClassName='date-right date-font'
      contentStyle={{width: '350px', marginRight:'150px'}}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    >
      <h3 className="vertical-timeline-element-title">Finance Intern - Shenwan Hongyuan Securities </h3>
      <h4 className="vertical-timeline-element-subtitle">Shanghai, CN</h4>
      <p style={{ fontSize: '1.6rem'}}>
        Intern focused on sector rotation, quatitative analysis.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--work bitter-home"
      date="2023 - present"
      contentStyle={{width: '350px', marginLeft:'150px'}}
      dateClassName='date-left date-font'

      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    >
      <h3 className="vertical-timeline-element-title">Lead in simulation propulsion - University of Toronto Aerospace Team</h3>
      <h4 className="vertical-timeline-element-subtitle">Toronto, CA</h4>
      <p style={{ fontSize: '1.6rem'}}>
        Take on the role in designing & programming 6DOF simulator for rocket trajectory.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education bitter-home"
      date="2024 May - 2024 Sept"
      dateClassName='date-right date-font'
      contentStyle={{width: '350px', marginRight:'150px'}}
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      // icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Full stack developer/Automation Technician - IKO North America</h3>
      <h4 className="vertical-timeline-element-subtitle">Brampton, CA</h4>
      <p style={{ fontSize: '1.6rem'}}>
        Software intern at IKO, designed automation systems, full stack KPI webpages and widget display, automation on 5S audits.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education bitter-home"
      date="2025 May - ???"
      contentStyle={{width: '350px', marginLeft:'150px'}}
      dateClassName='date-left date-font'

      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      // icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Incoming!</h3>
      <h4 className="vertical-timeline-element-subtitle">places</h4>
      <p style={{ fontSize: '1.6rem'}}>
      Incoming!
      </p>
    </VerticalTimelineElement>

  </VerticalTimeline>

  
  </div>
  </>
    
  );
}

export default ProjectIntro;