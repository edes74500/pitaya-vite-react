import PageTransition from "../components/layout/PageTransition";
import PageHeader from "../components/PageHeader";
import MovingDiv from "../components/common/MovingDiv";

const PageLayout = ({ page, titleh2, titleh3, children }) => {
  return (
    <PageTransition>
      <div className={`${page}-page-content`}>
        <div className="page-wrapper">
          <PageHeader page={page} img={`${page}.jpg`} titleh2={titleh2} titleh3={titleh3} />
          {children}
          <MovingDiv position={`footer`} />
          <MovingDiv position={`header`} />
        </div>
      </div>
    </PageTransition>
  );
};

export default PageLayout;
