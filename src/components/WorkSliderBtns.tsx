"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

/**
 * WorkSliderBtns
 *
 * A component that returns a container with two buttons to navigate a Swiper carousel.
 *
 * @param {object} props The component props.
 * @prop {string} containerStyles The styles for the container.
 * @prop {string} btnStyles The styles for the buttons.
 * @prop {string} iconsStyles The styles for the icons inside the buttons.
 * @returns {JSX.Element} A JSX element representing the component.
 */
const WorkSliderBtns = ({
  containerStyles,
  btnStyles,
  iconsStyles,
}: {
  containerStyles: string;
  btnStyles: string;
  iconsStyles: string;
}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
