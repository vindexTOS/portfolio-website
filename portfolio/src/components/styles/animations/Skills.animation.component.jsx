import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function Skills() {
  const container = useRef(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./skills.animation.json"),
    });
    return () => instance.destroy();
  }, []);
  return (
    <div
      style={{ width: "20rem", border: "2px solid red" }}
      ref={container}
    ></div>
  );
}
