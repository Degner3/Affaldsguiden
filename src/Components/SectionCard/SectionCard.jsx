import { Link } from "react-router-dom";
import style from "./SectionCard.module.scss";

export const SectionCard = ({ id, imgSrc, filename, title, color }) => {
  return (
    <Link to={`/sortering/${id}`}>
      <figure className={style.sectionCardStyle}>
        <img src={imgSrc} alt={filename} />
        <figcaption
          className={style.caption}
          style={{ backgroundColor: color }}
        >
          <p>{title}</p>
        </figcaption>
      </figure>
    </Link>
  );
};
