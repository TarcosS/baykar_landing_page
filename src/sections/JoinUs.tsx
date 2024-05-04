import Button from "@/components/Button";
import Screen from "@/components/Screen";
import Image from "next/image";

const JoinUs = () => {
  return (
    <section className="p-4 md:px-20 md:py-40">
      <div className="grid grid-cols-1 gap-8 rounded-[30px] bg-white px-4 py-8 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_0_10px_rgba(0,0,0,0.07)] md:gap-20 md:p-20 xl:grid-cols-2">
        <div className="align flex flex-col items-center gap-6 text-slate-900 md:items-start">
          <h1 className="text-center text-[32px] font-bold md:text-left md:text-[56px] md:font-extrabold">
            Why join us
          </h1>
          <div className="text-base leading-9 text-slate-900 md:text-xl">
            <div className="flex flex-row gap-1">
              <Image
                src={"/icons/check.svg"}
                width={24}
                height={24}
                alt="check"
              />
              <span>Est et in pharetra magna adipiscing ornare aliquam.</span>
            </div>
            <div className="flex flex-row gap-1">
              <Image
                src={"/icons/check.svg"}
                width={24}
                height={24}
                alt="check"
              />
              <span>Tellus arcu sed consequat ac velit ut eu blandit.</span>
            </div>
            <div className="flex flex-row gap-1">
              <Image
                src={"/icons/check.svg"}
                width={24}
                height={24}
                alt="check"
              />
              <span>Ullamcorper ornare in et egestas dolor orci.</span>
            </div>
          </div>
          <Button size="large" className="w-fit text-amber-900">
            Sign up now
          </Button>
        </div>
        <Screen />
      </div>
    </section>
  );
};

export default JoinUs;
