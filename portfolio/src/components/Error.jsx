import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";

export default function Error() {
  const container = useRef(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./styles/animations/Error.json"),
    });
    return () => instance.destroy();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <h1 style={{ color: "orange", fontSize: "4rem" }}>
        Page was not found...
        <Link style={{ textDecoration: "none", color: "yellowgreen" }} to="/">
          Go Back To Home Page{" "}
        </Link>
      </h1>
      <div ref={container} style={{ width: "70rem", height: "40rem" }}></div>{" "}
    </div>
  );
}
