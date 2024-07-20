'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { CarouselType } from './CarouselType';
import ArrowRight from '/public/images/ArrowRight.png';
import ArrowLeft from '/public/images/ArrowLeft.png';

const Carousel: React.FC<CarouselType> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const threshold = 50;

    if (distance > threshold) {     
      nextItem();
    } else if (distance < -threshold) {     
      prevItem();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ul className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <li key={index} className="w-full flex-shrink-0">{item}</li>
        ))}
      </ul>
      <Image src={ArrowLeft} alt="Arrow Left Icon" onClick={prevItem} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 cursor-pointer" />
      <Image src={ArrowRight} alt="Arrow Right Icon" onClick={nextItem} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 cursor-pointer" />
    </section>
  );
};

export default Carousel;