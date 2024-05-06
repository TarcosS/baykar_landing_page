"use client";

import Button from "@/components/Button";
import Screen from "@/components/Screen";
import Image from "next/image";
import { motion } from "framer-motion";

const JoinUs = () => {
  return (
    <section className="p-4 md:px-20 md:py-40">
      <div className="relative grid grid-cols-1 gap-8 rounded-[30px] bg-white px-4 py-8 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_0_10px_rgba(0,0,0,0.07)] md:gap-20 md:p-20 xl:grid-cols-2">
        <div className="align relative z-20 flex flex-col items-center gap-6 text-slate-900 md:items-start">
          <h1 className="text-center text-[32px] font-bold md:text-left md:text-[56px] md:font-extrabold">
            Why join us
          </h1>
          <div className="text-base text-slate-900 md:text-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.8 }}
              className="flex flex-row gap-1"
            >
              <Image
                src={"/icons/check.svg"}
                width={24}
                height={24}
                alt="check"
              />
              <span className="leading-10">
                Est et in pharetra magna adipiscing ornare aliquam.
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.8 }}
              className="flex flex-row gap-1"
            >
              <Image
                src={"/icons/check.svg"}
                width={24}
                height={24}
                alt="check"
              />
              <span className="leading-10">
                Tellus arcu sed consequat ac velit ut eu blandit.
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.8 }}
              className="flex flex-row gap-1"
            >
              <Image
                src={"/icons/check.svg"}
                width={24}
                height={24}
                alt="check"
              />
              <span className="leading-10">
                Ullamcorper ornare in et egestas dolor orci.
              </span>
            </motion.div>
          </div>
          <Button
            size="large"
            className="w-fit text-amber-900 transition-colors hover:bg-amber-900 hover:bg-opacity-80 hover:text-white"
          >
            Sign up now
          </Button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.8 }}
          className="relative z-20 !aspect-[16/11] !w-full md:!h-[350px]"
        >
          <Screen
            className="!aspect-[16/11] !h-auto !w-full md:!h-[350px] 2xl:absolute 2xl:right-0 2xl:!aspect-[520/350] 2xl:!w-auto"
            src="/videos/video.mp4"
          />
        </motion.div>
        <div className="absolute -bottom-[75px] -right-[38px] h-[386px] w-[440px] md:h-[625px] md:w-[713px]">
          <div className="relative h-full w-full">
            <div className="absolute left-[55px] top-0 h-[56px] w-[56px] rounded-[30px] bg-amber-700 opacity-75 md:top-[158px] md:h-[90px] md:w-[90px]"></div>
            <div className="absolute bottom-[171px] left-0 md:bottom-[204px] md:left-[-20px]">
              <div className="relative h-[135px] w-[411px] -rotate-45 bg-amber-200 md:h-[218px] md:w-[667px]">
                <div className="absolute -right-[18.5px] top-1/2 h-[37px] w-[37px] -translate-y-1/2 rounded-[30px] bg-[#0369A1] opacity-75 md:-right-[30px] md:h-[60px] md:w-[60px]"></div>
              </div>
            </div>
            <div className="absolute bottom-[33px] right-0">
              <div className="relative h-[135px] w-[135px] rounded-[50px] bg-pink-700 opacity-75 md:h-[218px] md:w-[218px]">
                <div className="absolute -left-[23px] top-1/2 h-[46px] w-[46px] -translate-y-1/2 rounded-[30px] bg-fuchsia-700 opacity-75 md:-left-[37px] md:h-[74px] md:w-[74px]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-[14px] right-[75%] z-40 h-[50px] w-[49px] -translate-y-1/2 rounded-[50px] bg-green-700 opacity-75 md:bottom-0 md:right-[35%] md:h-[86px] md:w-[85px]"></div>
      </div>
    </section>
  );
};

export default JoinUs;
