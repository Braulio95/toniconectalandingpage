import React, { useState, ReactNode, useRef } from "react";
import "./Carousel.css";

interface CarruselProps {
  children: ReactNode[];
  isMobile: boolean;
}

const Carousel = ({ children, isMobile }: CarruselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //Mobile variables
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === children.length - 1;

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    console.log(children);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + children.length) % children.length
    );
  };

  //Mobile functions
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    setOffset(deltaX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    if (offset > 50) {
      // Deslizamiento hacia la izquierda, retrocede una slide
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + children.length) % children.length
      );
    } else if (offset < -50) {
      // Deslizamiento hacia la derecha, avanza una slide
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    }

    setOffset(0);
  };

  if (isMobile) {
    return (
      <div className="carousel-container-mobile" ref={containerRef}>
        <div
          className="carousel-slider-mobile"
          style={{
            transform: `translateX(calc(-${currentIndex * 50}% + ${offset}px))`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {children.map((child, index) => {
            return (
              <div key={index} className="carousel-slide-mobile">
                {child}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="carousel-container">
      <button
        className={`slider-button ${
          isFirstSlide ? "" : "slider-button-visible"
        }`}
        onClick={goToPrevSlide}
        disabled={isFirstSlide}
      >
        Anterior
      </button>
      <div className="carousel-slider">
        <div
          className="carousel-slides"
          style={{ transform: `translateX(-${currentIndex * 360}px)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="carousel-slide">
              {child}
            </div>
          ))}
        </div>
      </div>
      <button
        className={`slider-button ${
          isLastSlide ? "" : "slider-button-visible"
        }`}
        onClick={goToNextSlide}
        disabled={isLastSlide}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Carousel;
