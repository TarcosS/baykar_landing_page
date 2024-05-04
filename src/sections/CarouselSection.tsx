"use client";

import ContentBox from "@/components/ContentBox";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CarouselSection = () => {
  const contentRef = useRef<HTMLDivElement>();
  const sliderRef = useRef<any>();
  const [sliderCount, setSliderCount] = useState(0);

  function controlSlider(type?: "next" | "previous") {
    const slider: HTMLDivElement = sliderRef.current;
    const contentWidth = contentRef.current?.clientWidth;
    const sliderWidth = slider.scrollWidth;

    setSliderCount((prev) => {
      if (type === "next") {
        slider.style.transform =
          "translateX(" + contentWidth! * (prev + 1) + "px)";
        return prev + 1;
      } else if (type === "previous") {
        slider.style.transform =
          "translateX(" + contentWidth! * (prev - 1) + "px)";
        return prev - 1;
      } else {
        return prev;
      }
    });

  }

  return (
    <section className="flex flex-col gap-8 px-4 py-8 md:gap-20 md:p-20">
      <div className="flex w-full flex-row items-center justify-between text-slate-900">
        <h1 className="text-center text-[32px] font-bold md:text-left md:text-[56px] md:font-extrabold">
          Because they love us
        </h1>
        <div className="flex flex-row gap-6">
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
      <div className="relative">
        <div className="absolute left-1/2 top-[-40px] h-[421px] w-[calc(100dvw-80px)] -translate-x-1/2 bg-amber-200"></div>
        <div
          ref={sliderRef}
          className="relative z-10 flex flex-row gap-6 transition-transform duration-300 ease-in-out"
          style={{
            transform: "translate(-50%)",
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => {
            return (
              <ContentBox
                refContent={contentRef}
                key={index}
                className="border-1 w-[384px] flex-none gap-4 snap-center overflow-hidden rounded-[20px] border-solid border-slate-200  bg-white p-8 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_0_6px_rgba(0,0,0,0.07)] text-black"
                iconClassName="py-4"
                textClassName="!text-2xl !leading-10"
                iconPath="/icons/Logo-grey.svg"
                text="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
                author={{
                  name: "Hellen Jummy",
                  role: "Team Lead",
                  imagePath: "/images/Profile.png",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
