"use client";

import ContentBox from "@/components/ContentBox";
import carouselData from "@/data/carousel";
import Image from "next/image";
import { useRef, useState } from "react";
import Slider, { Settings } from "react-slick";

const settings: Settings = {
  centerPadding: "0px",
  className: 'cursor-grab',
  centerMode: true,
  infinite: true,
  slidesToShow: 1,
  speed: 500,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  ]
}

const CarouselSection = () => {
  const contentRef = useRef<HTMLDivElement>();
  const sliderRef = useRef<any>();
  const [sliderCount, setSliderCount] = useState(0);

  function controlSlider(type?: "next" | "previous") {
    const slider: Slider | undefined = sliderRef.current;

    if(slider) {
      if (type === "next") {
        slider.slickNext();
      } else if (type === "previous") {
        slider.slickPrev();
      }
    }
  }

  return (
    <section className="flex flex-col gap-14 px-4 py-12 md:gap-20 md:p-20">
      <div className="flex w-full flex-row items-center justify-center text-slate-900 md:justify-between">
        <h1 className="text-center text-[32px] font-bold md:text-left md:text-[56px] md:font-extrabold">
          Because they love us
        </h1>
        <div className="hidden flex-row gap-6 md:flex">
          <Image
            onClick={() => {
              controlSlider("previous");
            }}
            src={"/icons/Button.svg"}
            width={48}
            height={48}
            alt="Button"
            className="cursor-pointer"
          />
          <Image
            onClick={() => {
              controlSlider("next");
            }}
            src={"/icons/Button-1.svg"}
            width={48}
            height={48}
            alt="Button"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="absolute left-1/2 top-[-16px] md:top-[-40px] h-[300px] md:h-[421px] w-[100dvh] -translate-x-1/2 bg-amber-200 md:w-[calc(100dvw-80px)]"></div>
        <div className="!w-[335px] md:!w-[400px] lg:!w-[408px]">
          <Slider {...settings} ref={sliderRef}>
            {carouselData.map((data, index) => {
              return (
                <ContentBox
                  refContent={contentRef}
                  key={index}
                  className="border-1 w-[319px] !items-start flex-none snap-center gap-4 overflow-hidden rounded-[20px] border-solid border-slate-200 bg-white p-6 md:p-8 text-black shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_0_6px_rgba(0,0,0,0.07)] md:w-[384px]"
                  iconClassName="py-4"
                  textClassName="!text-base md:!text-2xl md:!leading-10"
                  iconPath={data.iconPath}
                  text={data.text}
                  author={data.author}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
