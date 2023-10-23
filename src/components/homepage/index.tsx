'use client';

import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import ButtonCustom from '../common/button';
import './style.scss';

/* eslint-disable @next/next/no-img-element */
export default function HomePage() {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const slides = [
    {
      src: 'https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp',
      season: 'Women Collection 2018',
      title: 'New Season',
      button: 'Shop now',
    },
    {
      src: 'https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp',
      season: 'Men New-Season',
      title: 'Jackets & Coats',
      button: 'Shop now',
    },
    {
      src: 'https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp',
      season: 'Men Collection 2018',
      title: 'New Arrivals',
      button: 'Shop now',
    },
  ];

  useEffect(() => {
    const intervalSlide = setInterval(() => {
      setSlideIndex((prev) => (slideIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(intervalSlide);
  }, [slides]);

  const previousSlide = () => {
    setSlideIndex((slideIndex + slides.length - 1) % slides.length);
  };

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % slides.length);
  };
  return (
    <div className="my-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute h-full w-full text-black-text ${
            slideIndex === index ? 'block' : 'hidden'
          } e-commerce-slider`}
        >
          <img
            src={slide.src}
            alt="bg-home"
            className="object-cover h-full w-full"
          />
          <div className=" flex flex-col items-start gap-5 absolute top-1/4 left-[15%]">
            <span className=" font-sf-pro-expanded text-2xl font-semibold">
              {slide.season}
            </span>
            <h1 className=" font-playfair font-bold text-6xl uppercase">
              {slide.title}
            </h1>
            <ButtonCustom
              size="sm"
              types="primary"
              className="px-8 py-2 rounded-full"
            >
              {slide.button}
            </ButtonCustom>
          </div>
        </div>
      ))}
      <button
        onClick={previousSlide}
        className="btn-slider absolute top-1/2 left-0 transform -translate-y-1/2 hidden text-gray-2"
      >
        <CaretLeftOutlined style={{ fontSize: '40px' }} />
      </button>
      <button
        onClick={nextSlide}
        className="btn-slider absolute top-1/2 right-0 transform -translate-y-1/2 hidden text-gray-2"
      >
        <CaretRightOutlined style={{ fontSize: '40px' }} />
      </button>
    </div>
  );
}
