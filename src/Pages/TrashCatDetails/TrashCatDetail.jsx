import { useParams } from "react-router-dom"
import style from  "./TrashCatDetails.module.scss"
import { useFetch } from "../../Hooks/useFetch";



export const TrashCatDetail = () => {

  const { id } = useParams();

  const { data: details } = useFetch(`http://localhost:3000/section/${id}`);
  console.log("data", details);


  return (
    <section className={style.trashDetail}>
      <div className={style.detailWrapper}>
        <figure>
          <figcaption style={{ backgroundColor: `#${details?.color}`}}>
            <h3>{details?.title}</h3>
          </figcaption>
          <img src={details?.filepath} alt={details?.filename} />
        </figure>
        <div>
        </div>
      </div>
    </section>
  )
}
