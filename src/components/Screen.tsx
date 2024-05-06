"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Screen = ({
  className,
  header = true,
  src,
}: {
  className?: string;
  header?: boolean;
  src?: string;
}) => {
  const [isSourceTypeVideo, setSourceType] = useState(true);
  const [isPlaying, setPlaying] = useState(false);
  const videoRef = useRef<any>();
  const controlPlaying = () => {
    setPlaying(!isPlaying);
  };

  useEffect(() => {
    if (src && src.includes("mp4")) {
      setSourceType(true);
    } else {
      setSourceType(false);
    }
  }, []);

  useEffect(() => {
    isPlaying ? videoRef.current?.play() : videoRef.current?.pause();
  }, [isPlaying]);

  return (
    <div
      className={
        "h-[350px] w-full overflow-hidden rounded-[20px] bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_15px_rgba(0,0,0,0.07)] " +
        className
      }
    >
      {header && (
        <div className="flex select-none flex-row gap-[5px] px-7 py-4">
          <Image
            src={"/icons/circle-f.svg"}
            width={10}
            height={10}
            alt="icon1"
          />
          <Image
            src={"/icons/circle-f-1.svg"}
            width={10}
            height={10}
            alt="icon2"
          />
          <Image
            src={"/icons/circle-f-2.svg"}
            width={10}
            height={10}
            alt="icon3"
          />
        </div>
      )}
      <div
        className="w-full border-[5px] border-white"
        style={{
          height: `calc(100% - ${header ? 42 : 0}px)`,
          borderTopWidth: header ? "0px" : "5px",
        }}
      >
        {isSourceTypeVideo ? (
          <div className="relative">
            <video
              className="h-full w-full rounded-b-[16px]"
              ref={videoRef}
              muted
              playsInline
            >
              <source src={src} type="video/mp4" />
            </video>
            <div
              className={
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-[#121619bf] py-6 pe-5 ps-6 transition-opacity" +
                (isPlaying ? " opacity-0 hover:opacity-100" : " opacity-100")
              }
              onClick={controlPlaying}
            >
              <Image
                src={isPlaying ? "/icons/round-pause.svg" : "/icons/play.svg"}
                width={40}
                height={40}
                alt="play"
              />
            </div>
          </div>
        ) : (
          <div
            className="h-full w-full rounded-b-[16px]  bg-amber-300"
            style={{
              borderTopLeftRadius: header ? "0px" : "16px",
              borderTopRightRadius: header ? "0px" : "16px",
              backgroundImage: `url(${src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Screen;
