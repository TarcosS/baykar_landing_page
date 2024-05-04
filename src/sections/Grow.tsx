import Button from "@/components/Button";
import Image from "next/image";

const Grow = () => {
  return (
    <section className="relative flex flex-col gap-8 px-4 py-8 !pb-24 text-slate-900 md:gap-20 md:p-20 md:!pb-32">
      <div className="relative z-10 flex flex-col gap-8">
        <h1 className="text-center text-[32px] font-bold md:text-left md:text-[56px] md:font-extrabold">
          Grow your collection
        </h1>
        <p className="text-lg text-center md:text-left">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row gap-8 md:gap-20">
        <div className="flex lg:w-[256px] flex-row lg:flex-col gap-4 flex-none overflow-x-auto overflow-y-visible w-full py-2 px-1 no-scrollbar">
          <Button
            className="!justify-start border-none shadow-[0_4px_6px_-1px_rgba(0,0,0,0.10),0_0_4px_rgba(0,0,0,0.07)]"
            prefixIconPath="/icons/search.svg"
            suffixIconPath="/icons/arrow-right.svg"
            size="large"
          >
            Bibendum tellus
          </Button>
          <Button
            className="!justify-start border-none"
            prefixIconPath="/icons/shield-check.svg"
            size="large"
          >
            Cras eget
          </Button>
          <Button
            className="!justify-start border-none"
            prefixIconPath="/icons/rocket.svg"
            size="large"
          >
            Dolor pharetra
          </Button>
          <Button
            className="!justify-start border-none"
            prefixIconPath="/icons/screen.svg"
            size="large"
          >
            Amet, fringilla
          </Button>
          <Button
            className="!justify-start border-none"
            prefixIconPath="/icons/podcast.svg"
            size="large"
          >
            Amet nibh
          </Button>
          <Button
            className="!justify-start border-none"
            prefixIconPath="/icons/settings-alt.svg"
            size="large"
          >
            Sed velit
          </Button>
        </div>
        <div className="h-[556px] w-full bg-amber-300"></div>
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
