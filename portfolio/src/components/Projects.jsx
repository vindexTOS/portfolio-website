import React, { useState, useEffect } from "react";
import data from "./data/projtects-data";
import "./styles/projects.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export default function Project() {
  const [index, setIndex] = useState(0);
  const { title, img, dec, url } = data[index];
  const checkPage = (num) => {
    if (num > data.length - 1) {
      return 0;
    } else if (num < 0) {
      return data.length - 1;
    }
    return num;
  };
  const nextProject = () => {
    setIndex((index) => {
      let newItem = index + 1;

      return checkPage(newItem);
    });
  };

  const prevProject = () => {
    setIndex((index) => {
      let newItem = index - 1;

      return checkPage(newItem);
    });
  };

  return (
    <>
      {" "}
      <FaArrowLeft className="arrow-btn" onClick={() => prevProject()} />
      <div className="single-project" key={title}>
        <h1>{title}</h1>
        <img src={img} alt={title} />
        <p>{dec}</p>
        <a href={url}>Check project here</a>
      </div>
      <FaArrowRight className="arrow-btn" onClick={() => nextProject()} />
    </>
  );
}
