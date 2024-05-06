"use client";

import Button from "@/components/Button";
import Screen from "@/components/Screen";
import Image from "next/image";
import { motion } from "framer-motion";

const JoinUs = () => {
  return (
    <section className="p-4 md:px-20 md:py-40">
      <div className="grid grid-cols-1 relative gap-8 rounded-[30px] bg-white px-4 py-8 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_0_10px_rgba(0,0,0,0.07)] md:gap-20 md:p-20 xl:grid-cols-2">
        <div className="align flex flex-col items-center gap-6 text-slate-900 md:items-start relative z-20">
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
              transition={{ duration: 0.6, delay: .2 }}
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
              transition={{ duration: 0.6, delay: .4 }}
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
            className="w-fit text-amber-900 hover:bg-amber-900 hover:bg-opacity-80 hover:text-white transition-colors"
          >
            Sign up now
          </Button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.8 }}
          className="md:!h-[350px] !aspect-[16/11] !w-full relative z-20"
        >
          <Screen 
            className="!h-auto md:!h-[350px] !w-full 2xl:!w-auto !aspect-[16/11] 2xl:!aspect-[520/350] 2xl:absolute 2xl:right-0" 
            src="/videos/video.mp4"  
          />
        </motion.div>
        <div className="absolute w-[440px] h-[386px] md:w-[713px] md:h-[625px] -right-[38px] -bottom-[75px]">
          <div className="relative w-full h-full">
            <div className="w-[56px] h-[56px] md:w-[90px] md:h-[90px] bg-amber-700 rounded-[30px] opacity-75 absolute left-[55px] top-0 md:top-[158px]"></div>
            <div className="absolute bottom-[171px] md:bottom-[204px] md:left-[-20px] left-0">
              <div className="w-[411px] h-[135px] md:w-[667px] md:h-[218px] bg-amber-200 relative -rotate-45">
                <div className="w-[37px] h-[37px] md:w-[60px] md:h-[60px] bg-[#0369A1] opacity-75 rounded-[30px] absolute -right-[18.5px] md:-right-[30px] top-1/2 -translate-y-1/2"></div>
              </div>
            </div>
            <div className="absolute right-0 bottom-[33px]">
              <div className="w-[135px] h-[135px] md:w-[218px] md:h-[218px] bg-pink-700 opacity-75 rounded-[50px] relative">
                <div className="w-[46px] h-[46px] md:w-[74px] md:h-[74px] bg-fuchsia-700 opacity-75 rounded-[30px] absolute top-1/2 -left-[23px] md:-left-[37px] -translate-y-1/2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[49px] h-[50px] md:w-[85px] md:h-[86px] bg-green-700 opacity-75 rounded-[50px] absolute -bottom-[14px] md:bottom-0 right-[75%] md:right-[35%] -translate-y-1/2 z-40"></div>
      </div>
    </section>
  );
};

export default JoinUs;
