import { useSelector } from "react-redux";

const PageTitle = ({ titleh2, titleh3, titleContent, page }) => {
  const headerColorRGBA = useSelector((state) => state.headerColorRGBA);

  return (
    <div className={`page-title page-title-${page}`}>
      <h2 style={{ color: headerColorRGBA }}>{titleh2}</h2>
      <h3>{titleh3}</h3>
      <p>
        {titleContent}
        <span style={{ color: headerColorRGBA }} className="title-span-2">
          ● ● ● ●
        </span>
        <span style={{ color: headerColorRGBA }} className="title-span-1">
          ●
        </span>
        <span style={{ color: headerColorRGBA }} className="div-span-1">
          ● ● ● ● ● ●
        </span>
      </p>
    </div>
  );
};

export default PageTitle;
