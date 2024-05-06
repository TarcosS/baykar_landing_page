"use client";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import ContentBox from "@/components/ContentBox";

const Bests = () => {
  return (
    <section className="relative z-10 flex flex-col items-center gap-8 bg-slate-900 px-4 py-12 md:gap-20 md:p-20">
      <div className="relative z-10 flex w-full flex-col items-center justify-between gap-8 md:flex-row">
        <h1 className="text-[32px] font-bold text-white md:text-[56px] md:font-extrabold">
          The best of the best
        </h1>
        <Button
          size="xlarge"
          className="border-white transition-colors *:text-white hover:bg-white hover:bg-opacity-10"
        >
          Sign up now
        </Button>
      </div>
      <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 xl:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.8 }}
          className="flex flex-row gap-1"
        >
          <ContentBox
            className="border-1 w-full overflow-hidden rounded-[10px] border-solid border-slate-900 bg-slate-900 shadow-[0_25px_50px_-12px_rgba(255,255,255,0.25),0_0_15px_rgba(255,255,255,0.07)] *:text-white"
            imagePath="/images/Picture.png"
            title="Title"
            text="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            buttons={[
              { text: "Buy Now", iconPath: "/icons/shopping-cart.svg" },
            ]}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.8 }}
          className="flex flex-row gap-1"
        >
          <ContentBox
            className="border-1 w-full overflow-hidden rounded-[10px] border-solid border-slate-900 bg-slate-900 shadow-[0_25px_50px_-12px_rgba(255,255,255,0.25),0_0_15px_rgba(255,255,255,0.07)] *:text-white"
            imagePath="/images/Picture-1.png"
            title="Title"
            text="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            buttons={[
              { text: "Buy Now", iconPath: "/icons/shopping-cart.svg" },
            ]}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.8 }}
          className="flex flex-row gap-1"
        >
          <ContentBox
            className="border-1 w-full overflow-hidden rounded-[10px] border-solid border-slate-900 bg-slate-900 shadow-[0_25px_50px_-12px_rgba(255,255,255,0.25),0_0_15px_rgba(255,255,255,0.07)] *:text-white"
            imagePath="/images/Picture-2.png"
            title="Title"
            text="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            buttons={[
              { text: "Buy Now", iconPath: "/icons/shopping-cart.svg" },
            ]}
          />
        </motion.div>
      </div>
      <div className="absolute left-1/2 top-[60%] h-[70%] w-[95%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-full w-full">
          <div className="absolute left-[36px] top-[72px] h-[202px] w-[202px] rounded-[50px] bg-pink-700 md:bottom-[49px] md:left-0 md:h-[271px] md:w-[271px]"></div>
          <div className="absolute right-0 top-[340px] h-[120px] w-[120px] rounded-[50px] bg-[#0369A1] md:left-[457px] md:top-0 md:h-[161px] md:w-[161px]"></div>
          <div className="absolute bottom-[350px] left-[54px] h-[97px] w-[97px] rounded-[30px] bg-amber-700 md:right-[472px] md:top-[325px] md:h-[130px] md:w-[130px]"></div>
          <div className="absolute bottom-[104px] left-0 h-[151px] w-[151px] rounded-[30px] bg-fuchsia-700 md:!right-[139px] md:bottom-0 md:left-auto md:h-[202px] md:w-[202px]"></div>
          <div className="absolute bottom-0 right-[48px] h-[173px] w-[173px] rounded-[50px] bg-green-700 md:right-0 md:top-[64px] md:h-[232px] md:w-[232px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Bests;
