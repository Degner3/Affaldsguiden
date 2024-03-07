import { useParams } from "react-router-dom";
import style from "./TrashCatDetails.module.scss";
import { useFetch } from "../../Hooks/useFetch";
import { Accordion } from "../../Components/Accordion/Accordion";
import BG from "../../assets/Images/Layout/bg-wave-1.svg";

export const TrashCatDetail = () => {
  const { section_id } = useParams();

  const { data: details } = useFetch(
    `http://localhost:3000/section/${section_id}`
  );
  console.log("data", details);

  const { data: catogory } = useFetch(
    `http://localhost:3000/category/details/${section_id}`
  );
  // console.log("Category", catogory);

  return (
    <section className={style.trashDetail}>
      <div className={style.box}>
        <div className={style.detailWrapper}>
          <figure>
            <figcaption style={{ backgroundColor: `#${details?.color}` }}>
              <h3>{details?.title}</h3>
            </figcaption>
            <img src={details?.filepath} alt={details?.filename} />
          </figure>
          <div className={style.accWrapper}>
            {details?.categories?.map((item, i) => {
              return (
                <Accordion
                  key={item.id}
                  imgSrc={item.icon_filepath}
                  imgAlt={item.icon_filename}
                  title={item.title}
                  isFirstAccordion={i === 0}
                  >
                  </Accordion>
              );
            })}
          </div>
        </div>
      </div>
      <img className={style.bg} src={BG} alt="bg wave" />
    </section>
  );
};
