import React from "react";
// import teamImage from "@/assets/img/bg/team.jpg";

const PageHeader = ({ img, titleh2, titleh3 }) => {
  return (
    <div className="header-container" style={{ backgroundImage: `url(./img/bg/${img})` }}>
      <h2>{titleh2}</h2>
      <h3>{titleh3}</h3>
    </div>
  );
};

export default PageHeader;
