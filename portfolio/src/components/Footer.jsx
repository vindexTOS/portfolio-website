import React from "react";

import { FaGithub } from "react-icons/fa";
import "./styles/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/vindexTOS">
        <FaGithub className="git-icon" />
      </a>
    </footer>
  );
}
