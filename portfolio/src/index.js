import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./components/styles/App.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="body-div">
      <App />
    </div>
  </React.StrictMode>
);
