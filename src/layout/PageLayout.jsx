import PageTransition from "./PageTransition";
import PageHeader from "../components/PageHeader";
import MovingDiv from "../components/common/MovingDiv";
import PageTitle from "../components/common/PageTitle";

const PageLayout = ({ page, titleh2, titleh3, titleContent, children }) => {
  return (
    <PageTransition>
      <div className={`${page}-page-content`}>
        <div className="page-wrapper">
          <PageHeader page={page} img={`${page}.jpg`} />
          <PageTitle page={page} titleh2={titleh2} titleh3={titleh3} titleContent={titleContent} />
          {children}
          <MovingDiv position={`footer`} />
          <MovingDiv position={`header`} />
        </div>
      </div>
    </PageTransition>
  );
};

export default PageLayout;
