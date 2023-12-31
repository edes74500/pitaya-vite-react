import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  const variants = {
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 10,
      },
    },
    out: {
      opacity: 0.9,
      y: 20,
      transition: {
        duration: 10,
      },
    },
    transition: {
      duration: 0.5,
    },
  };

  return (
    <motion.div initial="out" animate="in" exit="out" variants={variants}>
      {children}
    </motion.div>
  );
};

export default PageTransition;
