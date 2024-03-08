import style from "./RecyclingStations.module.scss";
import { StationsCard } from "../../Components/StationsCard/StationsCard";
import { useFetch } from "../../Hooks/useFetch";
import BG from "../../assets/Images/Layout/bg-wave-1.svg";
import TechCollege from "../../assets/Images/øster-uttrupvej-1a.png";
import KrastrupGenbrugsplads from "../../assets/Images/mølholmvej-20b.png";
import GenbrugspladseniSørup from "../../assets/Images/hjedsbækvej-107.png";
import GenbrugspladsenOverKæret from "../../assets/Images/over-bækken-2.png";
import GenbrugspladsenStorvorde from "../../assets/Images/engvej-26.png";
import GenbrugspladsogGenbrugscenterHou from "../../assets/Images/skovsgårdsvej-145.png";
import Loader from "../../Components/Loader/Loader";

// komponent kaldet RecyclingStations, som repræsenterer siden med genbrugsstationer
export const RecyclingStations = () => {

  // Array med billedstier til genbrugsstationerne
  const mapsArr = [
    TechCollege,
    KrastrupGenbrugsplads,
    GenbrugspladseniSørup,
    GenbrugspladsenOverKæret,
    GenbrugspladsenStorvorde,
    GenbrugspladsogGenbrugscenterHou,
  ];

  // Til at hente data om organisationer
  const { data: organistions, loading, error } = useFetch("http://localhost:3000/orgs?attributes=id,name,address,zipcode,city");
  // console.log("data", organistions);

  // indlæsningsstatus og fejl
  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className={style.recyclingStyle}>
      <div className={style.recyclingWrapper}>
        <div className={style.cardGrid}>
          {organistions?.map((item, i) => {
            return (
              <StationsCard
                key={item.id}
                id={item.id}
                imgSrc={mapsArr[i]}
                name={item.name}
                address={item.address}
                zipcode={item.zipcode}
                city={item.city}
              />
            );
          })}
        </div>
      </div>
      <img className={style.bg} src={BG} alt="bg wave" />
    </section>
  );
};
