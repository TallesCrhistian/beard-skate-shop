'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowCircle from '/public/images/ArrowCircleRight.png';

const FloatingLink: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  let timeoutId: ReturnType<typeof setTimeout>;

  const handleScroll = () => {
    setIsVisible(true);

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 1500);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Link
      href=""
      className={`md:hidden fixed bottom-0 left-0 bg-primary-green flex md:w-80 w-full md-ml-12 h-12 text-center justify-center items-center cursor-pointer transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <p className="text-2xl font-black font-inter mr-3">COMPRAR</p>
      <Image src={ArrowCircle} alt="arrow circle" className="w-10 h-10" />
    </Link>
  );
};

export default FloatingLink;