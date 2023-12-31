import React from "react";
// import { teamList } from "./data/teamList";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Make sure to import useInView from react-intersection-observer

const TeamPolaroid = ({ list }) => {
  const controls = useAnimation();

  const [clickedState, setClickedState] = React.useState(Array(list.length).fill(false));

  const [polaroidDivContainer] = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
        delayChildren: 0,
        staggerChildren: 0.3,
      },
    },
  };

  const getItemAnim = (index) => {
    const rotate = Math.random() * 4 + 7;
    const rotateValue = index % 2 === 0 ? -rotate : rotate;

    return {
      hidden: { rotate: rotateValue, y: 100, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    };
  };

  const handleClick = (index) => {
    setClickedState((prevArray) => prevArray.map((boolean, idx) => (index === idx ? !boolean : boolean)));
  };

  return (
    <>
      <motion.div ref={polaroidDivContainer} className="polaroid-container" variants={container} initial="hidden" animate={controls}>
        {list.map((item, index) => (
          <motion.div className={"polaroid-box-hover"} key={item.id} variants={getItemAnim(index)}>
            <figure className="polaroid-frame" onClick={() => handleClick(index)}>
              <div className="effect-shine">
                <span className={clickedState[index] ? "infos-container is-selected" : "infos-container"}>
                  <h2>{item.formation}</h2>
                  <p>{item.description}</p>
                  {/* <div className="background-image" style={{ backgroundImage: `url(${item.image})` }}></div> */}
                </span>
                <img src={item.image} alt={`pic of ${item.name}`} />
              </div>
              <figcaption>{item.name}</figcaption>
            </figure>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default TeamPolaroid;
