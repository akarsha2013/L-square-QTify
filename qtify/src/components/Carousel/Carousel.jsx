import React, { useEffect } from "react";

// Swiper
import { useSwiper, Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Components
import CarouselLeft from "./CarouselLeft/CarouselLeft";
import CarouselRight from "./CarouselRight/CarouselRight";

// Styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

// Controls component
const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(0, 0);
    }
  }, [data, swiper]); // ✅ proper dependency

  return null;
};

const Carousel = ({ data = [], renderCardComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        spaceBetween={40}
        slidesPerView={"auto"}
        modules={[Navigation]}
        allowTouchMove
      >
        <Controls data={data} />

        <CarouselLeft />
        <CarouselRight />

        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {renderCardComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;