import PageTransition from "./PageTransition";
import PageHeader from "../components/PageHeader";
import MovingDiv from "../components/common/MovingDiv";
import PageTitle from "../components/common/PageTitle";

const PageLayout = ({ page, titleh2, titleh3, titleContent, children, img }) => {
  return (
    <div className={`${page}-page-content`}>
      <div className="page-wrapper">
        {/* <PageHeader page={page} img={`${page}.jpg`} /> */}
        {/* <PageHeader page={page} img={`team6.png`} /> */}
        <PageTransition>
          <PageTitle page={page} titleh2={titleh2} titleh3={titleh3} titleContent={titleContent} img={img} />
          {children}
        </PageTransition>
        <MovingDiv position={`footer`} />
        <MovingDiv position={`header`} />
      </div>
    </div>
  );
};

export default PageLayout;
