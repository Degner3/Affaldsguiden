import style from "./SlideShow.module.scss"
import affaldSkov from "../../assets/Images/Slideshow/affald-skov-1.jpg"
import affaldStrand from "../../assets/Images/Slideshow/affald-strand-2.jpg"
import malerSpande from "../../assets/Images/Slideshow/malerspande.jpg"
import Carousel from 'react-material-ui-carousel'

export const SlideShow = () => {
  return (
    <Carousel className={style.carouselStyle}
      animation="fade"
      duration={1000}
      interval={4000}
      indicators={false}
      navButtonsAlwaysInvisible={false}
      navButtonsAlwaysVisible={true}
      height={620}
      swipe={true}
    >
      <img src={affaldSkov} alt="Affald skov" />
      <img src={affaldStrand} alt="Affald strand" />
      <img src={malerSpande} alt="Malerspande" />
    </Carousel>
  )
}
