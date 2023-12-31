import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Make sure to import useInView from react-intersection-observer

const TextContent = (props) => {
  const [randomColor, setRandomColor] = useState(Array(3).fill(200));
  const [browserWidth, setBrowserWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
  const variants = {
    hidden: { opacity: 0, x: props.reverseImg ? 200 : -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const controls = useAnimation();

  const [contentContainer] = useInView({
    triggerOnce: true,
    threshold: browserWidth < 700 ? 0 : 0.5,
    onChange: (inView) => {
      if (inView) {
        controls.start("visible");
      }
    },
  });

  useEffect(() => {
    setRandomColor((previousColor) => previousColor.map(() => Math.floor(Math.random() * 255)));
  }, []);

  useEffect(() => {
    const handleResize = () => setBrowserWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(browserWidth);
  }, [browserWidth]);

  const colorString = `rgba(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}, 0.7)`;

  return (
    <motion.div ref={contentContainer} className="content-container" variants={variants} initial="hidden" animate={controls}>
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
  );
};

export default TextContent;
