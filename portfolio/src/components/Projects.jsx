import React, { useState } from "react";
import data from "./data/projtects-data";
import "./styles/home.scss";
export default function Project() {
  const [projects, setProjects] = useState(data);

  return (
    <>
      {projects.map((item) => {
        const { title, img, dec, url } = item;
        return (
          <div className="single-project" key={title}>
            <h1>{title}</h1>
            <img src={img} alt={title} />
            <p>{dec}</p>
            <a href={url}>Check project here</a>
          </div>
        );
      })}
    </>
  );
}
