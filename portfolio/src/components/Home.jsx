import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/home.scss";
import Project from "./Projects";
import Animation from "./styles/animations/Home.animation";
import Skill from "./styles/animations/Skills.animation.component";
function Home() {
  return (
    <section className="home-section">
      <div className="welcome">
        <h1 className="welcome-header">
          Hello,My name is Giorgi and I am A <span>React</span> Developer
        </h1>
        <Animation />
      </div>
      <div className="skills">
        <Skill />
        <div className="list-div">
          <h1>Skills</h1>
          <ul>
            <li>skill</li>
            <li>skill</li>
            <li>skill</li>
            <li>skill</li>
          </ul>
        </div>
      </div>
      <main className="main">
        <h1>Some of my projects:</h1>
        <div className="projects-div">
          <Project />
        </div>
      </main>
    </section>
  );
}

export default Home;
