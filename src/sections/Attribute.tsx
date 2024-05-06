import ContentBox from "@/components/ContentBox";
import Image from "next/image";

const Attribute = () => {
  return (
    <section className="relative z-10 flex flex-col items-center gap-8 bg-amber-100 px-4 py-12 md:gap-20 md:p-20 lg:flex-row lg:bg-transparent">
      <div className="relative">
        <Image
          src={"/images/rectangle-1.png"}
          width={57}
          height={39}
          alt="Rectangle 1"
          className="absolute left-[50%] sm:left-8"
        />
        <ContentBox
          title="Nibh vivierra"
          text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
          iconPath="/icons/trophy.svg"
        />
      </div>
      <div className="relative">
        <Image
          src={"/images/rectangle-2.png"}
          width={39}
          height={39}
          alt="Rectangle 1"
          className="absolute left-[49%] sm:left-6"
        />
        <ContentBox
          title="Nibh vivierra"
          text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
          iconPath="/icons/tunnel.svg"
        />
      </div>
      <div className="relative">
        <Image
          src={"/images/rectangle-3.png"}
          width={45}
          height={45}
          alt="Rectangle 1"
          className="absolute left-[53%] sm:left-[41px]"
        />
        <ContentBox
          title="Nibh vivierra"
          text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
          iconPath="/icons/tv.svg"
        />
      </div>
    </section>
  );
};

export default Attribute;
