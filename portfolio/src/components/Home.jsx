import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/home.scss";
import Project from "./Projects";
import Animation from "./styles/animations/Home.animation";
function Home() {
  return (
    <section className="home-section">
      <div className="welcome">
        <h1>
          Hello,My name is Giorgi and I am A <span>React</span> Developer
        </h1>
        <Animation />
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
