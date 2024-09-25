import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import teamImage from "@/assets/img/bg/team.jpg";
// import { RandomColorProvider } from "../data/RandomColorProvider";

const PageHeader = ({ page, img }) => {
  // const [colorString, setColorString] = useState("");
  // useEffect(() => {
  //   setColorString(RandomColorProvider());
  // }, []);

  const headerColorRGBA = useSelector((state) => state.headerColorRGBA);
  return (
    <div className={`${page}-header header`}>
      <div className="header-wrapper">
        <div
          className="header-container"
          style={{
            backgroundImage: `url(./img/page-header/${img})`,
            // backgroundImage: `url(./img/page-header/team8.png)`,
            filter: `saturate(100%) brightness(100%)`,
            border: `${headerColorRGBA} 1px solid`,
          }}
        >
          {/* <h2>{titleh2}</h2>
          <h3>{titleh3}</h3> */}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
