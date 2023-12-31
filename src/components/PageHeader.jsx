import React from "react";
// import teamImage from "@/assets/img/bg/team.jpg";

const PageHeader = ({ page, img, titleh2, titleh3 }) => {
  return (
    <div className={`${page}-header header`}>
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
  );
};

export default PageHeader;
