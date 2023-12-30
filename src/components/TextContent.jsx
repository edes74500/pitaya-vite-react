import React, { useEffect } from "react";
// /** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Make sure to import useInView from react-intersection-observer

const TextContent = (props) => {
  const [randomColor, setRandomColor] = React.useState(Array(3).fill(200));

  useEffect(() => {
    setRandomColor((previousColor) => previousColor.map(() => Math.floor(Math.random() * 255)));
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--random-color", `rgba(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}, 0.7)`);
  }, [randomColor]);

  const containerCSS = css`
    &::after {
      content: "● ● ● ● ● ●";
      left: 50%;
      bottom: 0;
      opacity: 0.8;
      color: rgba(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}, 0.7);
      text-align: center;
      transform: translate(-50%, 100%);
      font-size: 2rem;
      // margin: 0 auto;
      position: absolute;
      z-index: 1;
      @media screen and (max-width: 800px) {
        ${props.img ? `content: ""` : `content: "● ● ● ●"`}
      }
    }
  `;

  const h2CSS = css`
    &::before {
      content: "●";
      left: 0;
      opacity: 0.6;
      color: rgba(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}, 0.7);
      transform: translate(-50%, -50%);
      font-size: 10rem;
      margin: 0 auto;
      position: absolute;
      z-index: -1;
    }
    &::after {
      content: "● ● ● ●";
      opacity: 0.8;
      right: 0;
      top: -20px;
      color: rgba(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}, 0.7);
      text-align: center;
      margin: 0 auto;
      position: absolute;
      z-index: -1;
     
  `;

  const imgCSS = css`
    &::before {
      content: "●";
      left: 0;
      opacity: 0.6;
      color: rgba(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}, 0.7);
      transform: translate(-30%, -50%);
      font-size: 10rem;
      margin: 0 auto;
      position: absolute;
      z-index: 1;
         @media screen and (max-width: 800px) {
        font-size: 7rem;
   
       }
    }
    &::after {
      content: "●";
      display: block;
      opacity: 0.8;
      right: 0;
      color: rgba(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}, 0.7);
      text-align: center;
      margin: 0 auto;
      position: absolute;
      bottom: -150px;
      right 0;
      font-size: 15rem;
      z-index: 1;
       @media screen and (max-width: 800px) {
        font-size: 6rem;
        bottom: -100px;
       }
    }
  `;

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
    threshold: 0.4,
    onChange: (inView) => {
      if (inView) {
        controls.start("visible");
      }
    },
  });

  return (
    <motion.div ref={contentContainer} className="content-container" variants={variants} initial="hidden" animate={controls}>
      <div className="introduction-container" css={containerCSS}>
        <h2 css={h2CSS}>{props.title}</h2>
        <p>{props.p}</p>
      </div>
      {props.img && (
        <div className="text-content-image-container" css={imgCSS} style={{ order: props.reverseImg ? -1 : 1 }}>
          <img src={props.img} alt={props.title} />
        </div>
      )}
    </motion.div>
  );
};

export default TextContent;
