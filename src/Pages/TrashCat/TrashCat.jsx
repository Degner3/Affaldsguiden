import style from "./TrashCat.module.scss"
import BG from "../../assets/Images/Layout/bg-waves-1.svg"
import { useFetch } from "../../Hooks/useFetch";
import { SectionCard } from "../../Components/SectionCard/SectionCard";
import { Link } from "react-router-dom";

export const TrashCat = () => {

  const data = useFetch("http://localhost:3000/section");
  const sorting = data.data;
  console.log("data", sorting);



  const test = useFetch("http://localhost:3000/categories/1")
  console.log(test);


  return (
    <section className={style.trashStyle}>
      <div className={style.contentWrapper}>
        <h3>
          Din guide
          <br />
          <span>til en sund affaldssortering</span>
        </h3>
        <input type="text" />
        <div className={style.cardGrid}>
          {sorting?.map((item) => {
            return (
                <SectionCard
                  id={item.id}
                  key={item.id}
                  imgSrc={item.filepath}
                  filename={item.filename}
                  title={item.title}
                  color={`#${item.color}`}
                />
            );
          })}
        </div>
      </div>
      <img src={BG} alt="bg waves" />
    </section>
  );
}
