import React from "react";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      {" "}
      <h1 style={{ color: "orange", fontSize: "4rem" }}>
        Page was not found...
        <Link style={{ textDecoration: "none", color: "yellowgreen" }} to="/">
          Go Back To Home Page{" "}
        </Link>
      </h1>
    </div>
  );
}
