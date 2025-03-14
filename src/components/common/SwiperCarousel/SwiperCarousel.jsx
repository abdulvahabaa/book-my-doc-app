import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const SwiperCarousel = ({
  items,
  renderItem,
  slidesPerGroup = 3,
  slidesPerView = { base: 2, md: 3, lg: 5 },
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();

      const updateButtons = () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      };

      updateButtons();
      swiperInstance.on("slideChange", updateButtons);
      swiperInstance.on("reachBeginning", updateButtons);
      swiperInstance.on("reachEnd", updateButtons);

      return () => {
        swiperInstance.off("slideChange", updateButtons);
        swiperInstance.off("reachBeginning", updateButtons);
        swiperInstance.off("reachEnd", updateButtons);
      };
    }
  }, [swiperRef.current]);

  return (
    <div className="relative">
      {/* Custom Navigation Buttons */}
      <motion.button
        ref={prevRef}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isBeginning ? 0 : 1, x: isBeginning ? -20 : 0 }}
        transition={{ duration: 0.7 }}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 p-3 rounded-full text-white shadow-md hover:opacity-100 transition-all ${
          isBeginning ? "hidden" : "block"
        }`}
        id="prevBtn"
      >
        <FaChevronLeft />
      </motion.button>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        spaceBetween={20}
        speed={1200} // Further slows down the transition
        slidesPerGroup={slidesPerGroup}
        breakpoints={{
          640: { slidesPerView: slidesPerView.base },
          768: { slidesPerView: slidesPerView.md },
          1024: { slidesPerView: slidesPerView.lg },
        }}
        className="py-4"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              {renderItem(item)}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.button
        ref={nextRef}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isEnd ? 0 : 1, x: isEnd ? 20 : 0 }}
        transition={{ duration: 0.7 }}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 p-3 rounded-full text-white shadow-md hover:opacity-100 transition-all ${
          isEnd ? "hidden" : "block"
        }`}
        id="nextBtn"
      >
        <FaChevronRight />
      </motion.button>
    </div>
  );
};

export default SwiperCarousel;
