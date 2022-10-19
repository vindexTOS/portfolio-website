import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function HomeAnimation() {
  const container = useRef(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./web-developer-animation.json"),
    });
    return () => instance.destroy();
  }, []);
  return <div style={{ width: "40rem" }} ref={container}></div>;
}
