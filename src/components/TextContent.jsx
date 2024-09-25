import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Make sure to import useInView from react-intersection-observer
import { RandomColorProvider } from "../data/RandomColorProvider";

const TextContent = (props) => {
  // const [randomColor, setRandomColor] = useState(Array(3).fill(200));
  // const colorString = `rgba(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}, 0.7)`;
  const [colorString, setColorString] = useState("");
  const [browserWidth, setBrowserWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
  const variants = {
    hidden: { opacity: 0, x: props.reverseImg ? (browserWidth > 900 ? 200 : 50) : browserWidth > 900 ? -200 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const controls = useAnimation();

  useEffect(() => {
    setColorString(RandomColorProvider());
    // setRandomColor((previousColor) => previousColor.map(() => Math.floor(Math.random() * 255)));
  }, []);

  const [contentContainer] = useInView({
    triggerOnce: true,
    threshold: browserWidth < 800 ? 0 : browserWidth < 1200 ? 0.3 : 0.5,
    onChange: (inView) => {
      if (inView) {
        controls.start("visible");
      }
    },
  });

  useEffect(() => {
    const handleResize = () => setBrowserWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="content-wrapper" style={{ backgroundColor: "rgba(227, 224, 204, 0.75)" }}>
      <motion.div className="content-container" ref={contentContainer} variants={variants} initial="hidden" animate={controls}>
        <div className="introduction-container">
          <h2>{props.title}</h2>
          <p>{props.p}</p>
          <span style={{ color: colorString }} className="title-span-2">
            ● ● ● ●
          </span>
          <span style={{ color: colorString }} className="title-span-1">
            ●
          </span>
          <span style={{ color: colorString }} className="div-span-1">
            ● ● ● ● ● ●
          </span>
        </div>
        {props.img && (
          <div className="text-content-image-container" style={{ order: props.reverseImg ? -1 : 1 }}>
            <img src={props.img} alt={props.title} />
            <span style={{ color: colorString }} className="img-span-1">
              ●
            </span>
            <span style={{ color: colorString }} className="img-span-2">
              ●
            </span>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TextContent;
