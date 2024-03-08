import { useParams } from "react-router-dom";
import style from "./RecyclingStationsDetails.module.scss";
import { useFetch } from "../../Hooks/useFetch";

// RecyclingStationsDetails, som repræsenterer detaljesiden for en genbrugsstation
export const RecyclingStationsDetails = () => {

    // Henter id-parametret fra URL'en ved hjælp af useParams
    const { id } = useParams();

    // hente detaljerne for den specifikke genbrugsstation baseret på id'et
    const { data: details } = useFetch(`http://localhost:3000/orgs/${id}`);
    // console.log("data", details);

  return (
    <section className={style.stationsDetails}>
        <div className={style.detailsWrapper}>

        </div>
    </section>
  );
};
