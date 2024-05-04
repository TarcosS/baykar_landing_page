import Button from "@/components/Button";
import ContentBox from "@/components/ContentBox";

const Bests = () => {
  return (
    <section className="relative z-10 flex flex-col items-center gap-8 bg-slate-900 px-4 py-12 md:gap-20 md:p-20">
      <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row">
        <h1 className="text-[32px] font-bold md:text-[56px] md:font-extrabold">
          The best of the best
        </h1>
        <Button size="xlarge" className="border-white">
          Sign up now
        </Button>
      </div>
      <div className="grid items-center gap-12 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <ContentBox
          className="border-1 overflow-hidden rounded-[10px] border-solid border-slate-900 bg-slate-900 shadow-[0_25px_50px_-12px_rgba(255,255,255,0.25),0_0_15px_rgba(255,255,255,0.07)] *:text-white"
          imagePath="/images/Picture.png"
          title="Title"
          text="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          buttons={[
            { text: "Buy Now", iconPath: "/icons/shopping-cart.svg" },
          ]}
        />
        <ContentBox
          className="border-1 overflow-hidden rounded-[10px] border-solid border-slate-900 bg-slate-900 shadow-[0_25px_50px_-12px_rgba(255,255,255,0.25),0_0_15px_rgba(255,255,255,0.07)] *:text-white"
          imagePath="/images/Picture-1.png"
          title="Title"
          text="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          buttons={[
            { text: "Buy Now", iconPath: "/icons/shopping-cart.svg" },
          ]}
        />
        <ContentBox
          className="border-1 overflow-hidden rounded-[10px] border-solid border-slate-900 bg-slate-900 shadow-[0_25px_50px_-12px_rgba(255,255,255,0.25),0_0_15px_rgba(255,255,255,0.07)] *:text-white"
          imagePath="/images/Picture-2.png"
          title="Title"
          text="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
          buttons={[
            { text: "Buy Now", iconPath: "/icons/shopping-cart.svg" },
          ]}
        />
      </div>
    </section>
  );
};

export default Bests;
