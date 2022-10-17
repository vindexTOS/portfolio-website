import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.scss";
import { useState } from "react";

export default function Navbar() {
  const [clicked, setClicked] = useState({
    active: null,
    obj: [
      { title: "Home", to: "/" },
      { title: "About", to: "/about" },
      { title: "Contact", to: "/contact" },
    ],
  });

  const toggleActive = (i) => {
    setClicked({ ...clicked, active: clicked.obj[i] });
  };

  const toggleClassActive = (i) => {
    if (clicked.obj[i] === clicked.active) {
      return "active-line";
    } else {
      return "line";
    }
  };

  return (
    <nav className="nav-bar">
      <ul className="link-wrapper">
        {clicked.obj.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.to} onClick={() => toggleActive(index)}>
                {item.title}
              </Link>
              <div className={toggleClassActive(index)} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
