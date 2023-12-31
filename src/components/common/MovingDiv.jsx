import { useEffect, useState } from "react";
import { RandomColorProvider } from "../../data/RandomColorProvider";

const MovingDiv = ({ position }) => {
  const [colorString, setColorString] = useState("");
  useEffect(() => {
    setColorString(RandomColorProvider());
  }, []);

  return (
    <div>
      <div className={`${position}-span-container`}>
        <div className={`${position}-span`} style={{ backgroundColor: colorString }}></div>
      </div>
    </div>
  );
};

export default MovingDiv;
