"use client";

import Button from "@/components/Button";
import Screen from "@/components/Screen";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const buttons = [
  {
    icon: "/icons/search.svg",
    text: "Bibendum tellus",
  },
  {
    icon: "/icons/shield-check.svg",
    text: "Cras eget",
  },
  {
    icon: "/icons/rocket.svg",
    text: "Dolor pharetra",
  },
  {
    icon: "/icons/screen.svg",
    text: "Amet, fringilla",
  },
  {
    icon: "/icons/podcast.svg",
    text: "Amet nibh",
  },
  {
    icon: "/icons/settings-alt.svg",
    text: "Sed velit",
  },
];

const Grow = () => {
  const [selectedTabIndex, setSelectedTab] = useState(0);

  return (
    <section className="relative flex flex-col gap-8 px-4 py-8 !pb-24 text-slate-900 md:gap-20 md:p-20 md:!pb-32">
      <div className="relative z-10 flex flex-col gap-8">
        <h1 className="text-center text-[32px] font-bold md:text-left md:text-[56px] md:font-extrabold">
          Grow your collection
        </h1>
        <p className="text-center text-lg md:text-left">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>
      <div className="relative z-10 flex flex-col gap-8 md:gap-20 lg:flex-row">
        <div className="no-scrollbar flex w-full flex-none flex-row gap-4 overflow-x-auto overflow-y-visible px-1 py-2 lg:w-[256px] lg:flex-col">
          {buttons.map((button, index) => (
            <Button
              onClick={() => setSelectedTab(index)}
              className={
                "!justify-start border-none " +
                (selectedTabIndex === index
                  ? "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.10),0_0_4px_rgba(0,0,0,0.07)]"
                  : "")
              }
              prefixIconPath={button.icon}
              suffixIconPath={
                selectedTabIndex === index
                  ? "/icons/arrow-right.svg"
                  : undefined
              }
              suffixIconClass="ms-auto"
              size="large"
            >
              {button.text}
            </Button>
          ))}
        </div>
        <div className="relative h-[356px] md:h-[556px] w-full 2xl:w-[944px] 2xl:ms-auto">
          {
            selectedTabIndex !== null && (
              <div key={selectedTabIndex}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{duration: 0.6 }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <Screen 
                    className="!h-[201px] !w-[80%] sm:!h-[320px] md:!h-[451px] md:!w-[759px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_15px_rgba(0,0,0,0.07)]"
                    src="/images/grow-1.png"
                   />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{delay: .1, duration: 0.6 }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="absolute left-[57px] top-[36px] md:left-[94px] md:top-[105px] w-full"
                >
                  <Screen 
                    className="!h-[201px] !w-[80%] sm:!h-[320px] md:!h-[451px] md:!w-[759px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_15px_rgba(0,0,0,0.07)]"
                    src="/images/grow-2.png"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{delay: .2, duration: 0.6 }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="absolute right-0 top-[110px] md:top-[202px]"
                >
                  <Screen
                    className="!h-[105px] !w-[94px] sm:!h-[220px] sm:!w-[200px] md:!h-[286px] md:!w-[256px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_15px_rgba(0,0,0,0.07)]"
                    src="/images/grow-3.png"
                    header={false}
                  />
                </motion.div>
              </div>
            )
          }
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <div className="relative h-[684px] w-[1440px] md:w-[100dvw]">
          <Image
            src={"/images/vector-1.png"}
            width={2880}
            height={1368}
            alt="Vector 1"
            className="absolute bottom-0 left-0 w-full"
          />
          <Image
            src={"/images/vector-2.png"}
            width={2880}
            height={1368}
            alt="Vector 2"
            className="absolute bottom-0 left-0 w-full"
          />
          <Image
            src={"/images/vector-3.png"}
            width={2880}
            height={1368}
            alt="Vector 3"
            className="absolute bottom-0 left-0 w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Grow;
