import React, { useEffect, useState } from "react";
// import teamImage from "@/assets/img/bg/team.jpg";
import { RandomColorProvider } from "../data/RandomColorProvider";

const PageHeader = ({ page, img, titleh2, titleh3 }) => {
  const [colorString, setColorString] = useState("");
  useEffect(() => {
    setColorString(RandomColorProvider());
  }, []);
  return (
    <div className={`${page}-header header`}>
      <div className="header-wrapper">
        <div
          className="header-container"
          style={{
            backgroundImage: `url(./img/page-header/${img})`,
          }}
        >
          <h2>{titleh2}</h2>
          <h3>{titleh3}</h3>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
