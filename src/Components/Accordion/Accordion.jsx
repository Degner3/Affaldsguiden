import { useState } from "react";
import style from "./Accordion.module.scss"


export const Accordion = ({ imgSrc, imgAlt, title }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }


  return (
    <div className={style.accStyle}>
        <div className={style.accHeader} onClick={toggle}>
            <div>
                <img src={imgSrc} alt={imgAlt} />
                {/* <h2>{title}</h2> */}
                <h2>TEST</h2>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
        </div>
        {isOpen && 
        <article className={`${style.accContent} ${style.open}`}>
            {/* {children} */}
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse adipisci quos praesentium architecto modi dolore dignissimos quibusdam sint perferendis ullam!</p>
        </article>}
    </div>
  )
}