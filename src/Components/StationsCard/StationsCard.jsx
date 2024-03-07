import { Link } from "react-router-dom";
import style from "./StationsCard.module.scss"

export const StationsCard = ({ id, name, address, zipcode, city, imgSrc }) => {
    
    return (
      <Link to={`/genbrugsstationer/${id}`}>
        <figure className={style.stationsCard}>
          <img src={imgSrc} alt={address} />
          <figcaption className={style.caption}>
            <h4>{name}</h4>
            <p>
              {address} {zipcode}
            </p>
            <p>{city}</p>
          </figcaption>
        </figure>
      </Link>
    );
};
