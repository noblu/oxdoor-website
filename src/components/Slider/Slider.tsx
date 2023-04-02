import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/imgslide/farmhouse-front-door-ideas-featured-homebnc-v2.jpg";
import img2 from "../../assets/imgslide/open-entry-door.jpg";
import img4 from "../../assets/imgslide/Teak-wood.jpg";
import img5 from "../../assets/imgslide/Untitled-1-Recovered-Recovered-kjnjk-scaled.jpg";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  RxDotFilled,
} from "react-icons/all";

const Slider = () => {
  const slideDelay = 3000;
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef: any = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      slideDelay
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  const slides = [
    {
      url: img1,
    },
    {
      url: img2,
    },
    {
      url: img4,
    },
    {
      url: img5,
    },
  ];

  return (
    <>
      <div className="max-w-[1900px] h-[780px] w-full m-auto py-2 px-1 relative group z-0 ">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${
                currentIndex === slideIndex ? "text-pink" : ""
              } `}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
