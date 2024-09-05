import React from "react";
import "./Work.css";
import openSourceLogo from "../assets/logo.png";
import projectImg1 from "../assets/data.png";
import projectImg2 from "../assets/linkedin.png";

import "./styles/styles.css";

const Project = ({ title, descrip1, descrip2, img, imgTitle }) => {
  return (
    <div className="work-item padLeft ">
      <img src={img} alt={imgTitle} className="work-logo" />
      <div className="flex-Col work-font">
        <div className="work-font">
          <div className="desc">{title}</div>
          <p className="work-section work-font">{descrip1}</p>
          <p className="projectDesc work-font" ><strong>{descrip2}</strong></p>
        </div>
        {/* Changed Router Link */}
        <button className="work-button work-font">Get {title}</button> 
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
    },
    
    3: {
      title: "EMPTY",
      descrip1: "EMPTY",
      descrip2: "EMPTY",
      img: "EMPTY",
      imgTitle: "EMPTY",
    },
    4: {
      title: "EMPTY",
      descrip1: "EMPTY",
      descrip2: "EMPTY",
      img: "EMPTY",
      imgTitle: "EMPTY",
    },
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
