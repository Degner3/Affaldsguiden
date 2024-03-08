import { useState } from "react";
import style from "./Accordion.module.scss";
import { useFetch } from "../../Hooks/useFetch";

export const Accordion = ({ id, imgSrc, imgAlt, title, isFirstAccordion }) => {

   // Holder styr på om accordion er åben eller lukket
  const [isOpen, setIsOpen] = useState(isFirstAccordion);

  // Funktion til at toggle åbning og lukning af accordion
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Custom hook til at hente data fra serveren baseret på ID
  const { data: catogory } = useFetch(
    `http://localhost:3000/category/details/${id}`
  );
  // console.log("Category", catogory);

  return (
    <div className={style.accStyle}>
      <div className={style.accHeader} onClick={toggle}>
        <img src={imgSrc} alt={imgAlt} />
        <h3>{title}</h3>
        <div className={style.arrowContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={`${style.arrow} ${
              isOpen ? style.arrowDown : style.arrowUp
            }`}
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}>
            <path d="M7 14l5-5 5 5z" />
          </svg>
        </div>
      </div>
      {isOpen && (
        <article className={`${style.accContent} ${style.open}`}>
          <div>
            <h5>Hvad modtager vi?</h5>
            <hr />
            <div className={style.types}>
              {catogory?.types.map((item, i) => (
                <div className={style.allowed} key={i}>
                  {item.rules.is_allowed && (
                    <>
                      <p>{item.title}</p>
                      <p className={style.jaTak}>Ja tak</p>
                      <p>|</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h5>Hvad modtager vi ikke?</h5>
            <hr />
            <div className={style.types}>
              {catogory?.types.map((item, i) => (
                <div className={style.allowed} key={i}>
                  {!item.rules.is_allowed && (
                    <>
                      <p>{item.title}</p>
                      <p className={style.nejTak}>Nej tak</p>
                      <p>|</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </article>
      )}
    </div>
  );
};
