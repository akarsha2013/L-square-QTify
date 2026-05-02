import React, { useEffect, useState } from "react";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeft.module.css";

const CarouselLeft = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);

  useEffect(() => {
    if (!swiper) return;

    // Set initial state
    setIsBeginning(swiper.isBeginning);

    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
    };

    swiper.on("slideChange", handleSlideChange);

    // Cleanup
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && (
        <LeftArrow onClick={() => swiper.slidePrev()} />
      )}
    </div>
  );
};

export default CarouselLeft;