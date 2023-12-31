import React from "react";
import PageTransition from "../components/layout/PageTransition";
import PageHeader from "../components/PageHeader";

const PageLayout = ({ page, titleh2, titleh3, children }) => {
  // Dont forget to put the image in public/img/page-header with the name of the page . jpg
  return (
    <PageTransition>
      <div className={`${page}-page-content`}>
        <PageHeader page={page} img={`${page}.jpg`} titleh2={titleh2} titleh3={titleh3} />
        {children}
      </div>
    </PageTransition>
  );
};

export default PageLayout;
