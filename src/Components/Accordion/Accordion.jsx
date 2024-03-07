import { useState } from "react";
import style from "./Accordion.module.scss";

export const Accordion = ({ imgSrc, imgAlt, title, isFirstAccordion }) => {
    
  const [isOpen, setIsOpen] = useState(isFirstAccordion);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.accStyle}>
      <div className={style.accHeader} onClick={toggle}>
        <img src={imgSrc} alt={imgAlt} />
        <h3>{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <article className={`${style.accContent} ${style.open}`}>
          {/* {children} */}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            adipisci quos praesentium architecto modi dolore dignissimos
            quibusdam sint perferendis ullam!
          </p>
        </article>
      )}
    </div>
  );
};
