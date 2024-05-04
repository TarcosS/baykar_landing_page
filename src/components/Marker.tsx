"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const Marker = ({
  radius,
  position,
}: {
  radius: number;
  position: { x: number; y: number };
}) => {
  const textRef = useRef<any>();
  const [textAreaHeight, setTextAreaHeight] = useState(0);

  return (
    <div
      className="group absolute left-0 top-0 z-50"
      onMouseEnter={() => {
        setTextAreaHeight(
          (textRef.current as HTMLDivElement)?.offsetHeight - 9 ?? 0,
        );
      }}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div className="relative hidden group-hover:block">
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ "--tw-translate-y": `${(radius - 6) / 2}px` } as React.CSSProperties}
        >
          <div
            className={`absolute left-1/2 z-10 !h-[200px] !w-[256px] -translate-x-1/2 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_0_10px_rgba(0,0,0,0.07)]`}
            style={
              {
                "--tw-translate-y": `calc(-100% - ${textAreaHeight}px)`,
                transform:
                  "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
              } as React.CSSProperties
            }
          >
            <Image
              src={"/images/shoes-pic.png"}
              width={256}
              height={200}
              alt="Shoes Pic"
              className="rounded-[10px] border-[5px] border-white"
            />
          </div>
          <div
            ref={textRef}
            className="triangle left-1/2 top-[100%] w-[250px] -translate-x-1/2 -translate-y-full rounded-[5px] bg-slate-200 px-4 pb-2 pt-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_15px_rgba(0,0,0,0.07)]"
          >
            <p className="text-sm text-slate-900">
              Emma Simpson collected one pair of{" "}
              <span className="font-medium">Cool Shoes</span>.
            </p>
          </div>
        </div>
      </div>
      <div
        className="z-10 cursor-pointer rounded-full border-[3px] border-solid border-lime-400 transition-colors group-hover:bg-lime-200"
        style={{
          width: `${radius}px`,
          aspectRatio: 1,
        }}
      ></div>
    </div>
  );
};

export default Marker;
