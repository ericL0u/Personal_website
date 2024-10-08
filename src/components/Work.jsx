import React from "react";
import "./Work.css";
import openSourceLogo from "../assets/logo.png";
import projectImg1 from "../assets/data.png";
import projectImg2 from "../assets/linkedin.png";
import projectImg4 from "../assets/website.png";
import projectImg3 from "../assets/Loading_Screen.png";
import projectImg6 from "../assets/elevators.jpg";
import projectImg5 from "../assets/map.png";
import "./styles/styles.css";

const Project = ({ projectkey, title, descrip1, descrip2, img, imgTitle, link }) => {
   const imgStyle = projectkey === 5 ? {} : {};

  let invis = 0
  if (link === undefined){
    invis = 1;
  }
  return (
    <div className="work-item padLeft ">
      <img src={img} alt={imgTitle} className="work-logo" style={imgStyle}/>
      <div className="flex-Col work-font">
        <div className="work-font">
          <div className="desc">{title}</div>
          <div className= "FullDescription">
         <p className="work-section work-font">{descrip1}</p>
          <p className="projectDesc work-font" ><strong>{descrip2}</strong></p>
          </div>
        </div>

        <button className="work-button work-font" onClick={() => {
          window.open(link, '_blank' )}} style={{display: invis === 1 ? 'none': 'block'}} >
            Get {title}
        </button> 

      </div>
    </div>
  );
};

function Work() {
  const allProjects = {
    1: {
      title: "Automation display and fetching of KPIs",
      descrip1:
        `This is an project constructed for IKO North America in displaying KPIs that are involved within the work place. 
        All internal users are able to view current progress numerics and any live update that occurs. 
        Authenticated users are also able to update data. `,
      descrip2:
        "Skills involved: React, Flask, MongoDB, Python",
      img: projectImg1,
      imgTitle: "DataVisualization",
    },
    2: {
      title: "Backend API for article publication/forum",
      descrip1: `An backend project mimicing Linkedin learning's backend service that has article publication functionality, 
      user verification, authentication, course recommandation tracking, favorite counts.`,

      descrip2: "Skills involved: Docker, Docker compose, SQL, Express, Sequelize, Postman, RESTful",
      img: projectImg2,
      imgTitle: "linkedin learning",
      link: 'https://github.com/ericL0u/Linkedin-Learning-Backend-API'
    },
    
    3: {
      title: "Personal Website",
      descrip1: "Interactive personal website with animations.",
      descrip2: "Skills: React, html, css, javascript",
      img: projectImg4,
      imgTitle: "website",
      link: "https://github.com/ericL0u/Personal_website"
    },
    4: {
      title: "Interactive Virtual Roulette Game",
      descrip1: "This project presents an interactive simulation of a traditional roulette game, incorporating various betting systems and strategies. Users can place bets on different outcomes and update game displays based on the result, providing an intuitive understanding of roulette game mechanics, payout ratios, and betting strategies in a virtual environment.",
      descrip2: "Skills: C, image rendering with uint16_t",
      img: projectImg3,
      imgTitle: "Roulette",
      link: 'https://github.com/ericL0u/interactive-virtual-roulette-game'
    },
    5:{
      title: "Global Wonders: Tourist Navigation Map Application",
      descrip1: `
      Leveraged OpenStreetMap API to render detailed maps featuring roads, landmarks, and points of interest. 

    Ensured full responsiveness during loading and user interactions to the UI components. Effectively optimized algorithm such all interactions are responded within 0.5s for display.

    Implemented Dijkstra and A* algorithms, creating a hybrid solution using an iterative Greedy Algorithm combined with Simulated Annealing, featuring shifting and reversing perturbations to efficiently solve the TSP.

    Ranked Top 8 out of all teams on the University of Toronto's leaderboard, highlighting the efficiency and effectiveness of the solution.`,

      descrip2: "Skills: C++, EZGL, GIS, GTK, Git, OpenStreetMap API, OpenWetherMap API, Algorithm and Data Structure.",
      img: projectImg5,
      imgTitle: "Roulette",
    },
    6:{
      title: "Elevator System",
      descrip1: `
      Developed a algorithm for a 10-floor functional elevator system, implemented with Verilog. The system consists: the Elevator Control Unit (ECU) and the Car Control Unit (CCU), each responsible for distinct elevator operations. `,

      descrip2: "Skills: Verilog.",
      img: projectImg6,
      imgTitle: "Roulette",
      link: 'https://github.com/ericL0u/Elevator-Control-System'
    }
  };

  return (
    <section className="work-section work-font">
      <div className="flex-Row">
        <div className="padLeft">
          <h2 className="headingSize">
            Projects
            <span className="dot">.</span>
          </h2>
          <p className="descrip rightShift40">
            Here list some of my most interesting projects with different areas
            of technical skills involved.
          </p>
        </div>
        <div className="dots-background"></div>
      </div>

      {Object.keys(allProjects).map((key) => {
        const project = allProjects[key];

        return (
          <Project
            key={key}
            projectkey={parseInt(key)}
            title={project.title}
            descrip1={project.descrip1}
            descrip2={project.descrip2}
            img={project.img}
            imgTitle={project.imgTitle}
            link={project.link}
          />
        );
      })}
      <hr className="horizontal-line" />
    </section>
  );
}

export default Work;
