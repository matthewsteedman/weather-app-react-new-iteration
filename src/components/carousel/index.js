import styles from "./styles.module.scss";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Carousel = ({ children }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      itemsToScroll={1}
      autoplay={true}
      autoplayDelay={3000}
      responsiveProps={[
        {
          itemsToShow: 7,
          itemsToScroll: 1,
          minWidth: 800,
        },
      ]}
      forwardBtnProps={{
        //here you can also pass className, or any other button element attributes
        className: `${styles.forwardButton}`,
        children: <MdKeyboardArrowRight />,
      }}
      backwardBtnProps={{
        //here you can also pass className, or any other button element attributes
        className: `${styles.backwardBtnProps}`,
        children: <MdKeyboardArrowLeft />,
      }}
      speed={400}
      easing="linear"
    >
      {children}
    </ReactSimplyCarousel>
  );
};

export default Carousel;
