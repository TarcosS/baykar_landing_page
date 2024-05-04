import Button from "@/components/Button";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="relative z-10 flex flex-col items-center gap-8 px-4 py-12 md:gap-20 md:p-20 lg:flex-row">
      <div className="relative z-10 flex flex-col gap-8">
        <h1 className="text-center text-[56px] font-extrabold text-slate-900 lg:text-left lg:text-7xl">
          Collectible Sneakers
        </h1>
        <p className="text-center text-lg leading-9 text-slate-900 lg:text-left">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </p>
        <div className="flex flex-row items-center justify-center space-x-4 text-amber-900 md:justify-start">
          <Button size="large">Sign up now</Button>
          <Button prefixIconPath="/icons/play-circle.svg">Watch Demo</Button>
        </div>
      </div>
      <div className="relative z-10 min-w-full pb-[35px] sm:min-w-[486px]">
        <div className="absolute left-[38px] top-[38px] z-10 aspect-[367/372] w-4/5 rounded-[50px] bg-amber-400 sm:left-[51px] sm:top-[51px] sm:h-[372px] sm:w-[367px]"></div>
        <Image
          className="relative z-10 min-w-full sm:min-w-[486px]"
          src={"/images/sneaker.png"}
          width={486}
          height={388}
          alt="Sneaker"
        />
      </div>
      <div
        className="absolute bottom-0 right-0 block aspect-[393/324] w-[99%] bg-amber-100 lg:hidden"
        style={{
          clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
        }}
      ></div>
    </section>
  );
};

export default Intro;
