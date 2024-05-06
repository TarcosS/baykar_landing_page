"use client";

import Marker from "@/components/Marker";
import Image from "next/image";
import CountUp from "react-countup";

const points = [
  {
    radius: 32,
    x: 165,
    y: 230,
  },
  {
    radius: 24,
    x: 310,
    y: 440,
  },
  {
    radius: 30,
    x: 760,
    y: 180,
  },
  {
    radius: 16,
    x: 840,
    y: 500,
  },
];

const MapSection = () => {
  return (
    <section className="relative flex items-center justify-start bg-amber-900 px-[21px] py-12 md:justify-center md:px-48 md:py-[42px]">
      <div className="relative h-[633px] w-[1049px] flex-none 2xl:flex-1">
        <Image
          src={"/icons/map.svg"}
          width={1049}
          height={633}
          alt="Map"
          className="h-[633px] w-[1049px] flex-none opacity-50"
        />
        {points.map((point, index) => {
          return (
            <Marker
              key={"marker_" + index}
              radius={point.radius}
              position={{ x: point.x, y: point.y }}
            />
          );
        })}
      </div>
      <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 select-none flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold text-white lg:text-8xl">
          <CountUp
            enableScrollSpy={true}
            scrollSpyOnce={true}
            start={4512354}
            end={11658467}
            duration={3}
            decimal=","
          />
        </h1>
        <h2 className="whitespace-nowrap text-[32px] font-extrabold text-white lg:text-[56px]">
          Shoes Collected
        </h2>
      </div>
    </section>
  );
};

export default MapSection;
