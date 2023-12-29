import React, { useRef, useEffect } from "react";
import { teamActionCallList } from "./Data/TeamActionCall";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Make sure to import useInView from react-intersection-observer

const TeamActionCall = () => {
  const controls = useAnimation();

  const [teamActionDiv] = useInView({
    triggerOnce: true,
    threshold: 0.001,
    onChange: (inView) => {
      if (inView) {
        controls.start("visible");
      }
    },
  });

  const container = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.7,
      },
    },
  };

  const itemAnim = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div ref={teamActionDiv} className="action-call-container" variants={container} initial="hidden" animate={controls}>
      {teamActionCallList.map((item, index) => (
        <motion.div className="action-call-item" style={{ color: item.color }} key={index} variants={itemAnim}>
          <div className="action-call-item-img">
            <span className="material-symbols-outlined">{item.icon}</span>
          </div>
          <div className="action-call-item-text">
            <h3>{item.id}</h3>
            <p>{item.content}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TeamActionCall;
