import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/home.scss";

function Home() {
  const [projects, setProjects] = useState();
  return (
    <section className="home-section">
      <div className="welcome">
        <h1>
          Hello,My name is Giorgi and I am A <span>React</span> Developer
        </h1>
      </div>

      <main className="main">
        <h1>Some of my projects:</h1>
        <div className="projects-div">{}</div>
      </main>
    </section>
  );
}

export default Home;
