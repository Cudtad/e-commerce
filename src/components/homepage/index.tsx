'use client';

import {
  CaretLeftOutlined,
  CaretRightOutlined,
  FilterOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import ButtonCustom from '../common/button';
import './style.scss';
import Thumbnail from '../common/thumbnail/Thumbnail';
import ProductOverview from './ProductOverview';

type Props = {
  lang: string;
};

/* eslint-disable @next/next/no-img-element */
export default function HomePage({ lang }: Props) {
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

  const previews = [
    {
      title: 'Women',
      description: 'Spring 2018',
      src: 'https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp',
    },
    {
      title: 'Men',
      description: 'Spring 2018',
      src: 'https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp',
    },
    {
      title: 'Accessories',
      description: 'New Trend',
      src: 'https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg.webp',
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
    <>
      <div className="w-full h-screen relative">
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
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center gap-8 pt-20 pb-12 ">
          {previews.map((preview) => (
            <div
              key={preview.src}
              className="relative border cursor-pointer preview"
            >
              <img className="object-cover " src={preview.src || ''} />
              {/* <Image
                src={preview.src || ''}
                alt="Banner Image"
                className="object-cover "
              /> */}
              <div className="absolute z-5 top-[15%] left-[7%]">
                <h1 className="font-sf-pro-expanded font-bold text-2xl">
                  {preview.title}
                </h1>
                <span className="font-sf-pro-expanded font-medium text-xs">
                  {preview.description}
                </span>
              </div>
              <div className="absolute z-10 w-full h-full top-0 left-0 bg-primary/80 preview-overlay">
                <span className="absolute bottom-[12%] left-[7%] uppercase font-sf-pro font-semibold text-sm text-white">
                  Shop now
                </span>
                <div className="absolute bottom-[10%] left-[7%] border-b-2 border-white w-20"></div>
              </div>
            </div>
          ))}
        </div>
        <ProductOverview lang={lang} />
      </div>
    </>
  );
}
