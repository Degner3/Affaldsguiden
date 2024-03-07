import { useParams } from "react-router-dom";
import style from "./RecyclingStationsDetails.module.scss";
import { useFetch } from "../../Hooks/useFetch";

export const RecyclingStationsDetails = () => {

    const { id } = useParams();

    const { data: details } = useFetch(`http://localhost:3000/orgs/${id}`);
    console.log("data", details);

  return (
    <section className={style.stationsDetails}>
        <div className={style.detailsWrapper}>
        </div>
    </section>
  );
};
