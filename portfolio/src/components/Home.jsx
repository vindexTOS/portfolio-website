import React from "react";

import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import "./styles/home.scss";
import Project from "./Projects";
import Animation from "./styles/animations/Home.animation";
function Home() {
  return (
    <section className="home-section">
      <div className="welcome">
        <div className="hello">
          <h1 className="welcome-header">
            Hello,My name is Giorgi and I am A <span>React</span> Developer
          </h1>
          <Animation />
        </div>
        <div className="skills">
          <div className="list-div">
            <h1>My skills so far</h1>

            <ul>
              <li>
                JS/React <FaReact style={{ color: "#61DBFB" }} />
              </li>
              <li>
                Html/Css <FaHtml5 style={{ color: "#e34c26" }} />{" "}
                <FaCss3Alt style={{ color: "#264de4" }} />
              </li>

              <li>
                Photoshop{" "}
                <DiPhotoshop
                  style={{
                    color: "#8BC3FC",
                    backgroundColor: "#3C327B",
                    border: "none",
                  }}
                />
              </li>
            </ul>
          </div>
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
