import ContentBox from "@/components/ContentBox";

const Attribute = () => {
  return (
    <section className="flex flex-col items-center gap-8 px-4 py-12 md:gap-20 md:p-20 lg:flex-row relative z-10 bg-amber-100 lg:bg-transparent">
      <ContentBox
        title="Nibh vivierra"
        text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
        iconPath="/icons/trophy.svg"
      />
      <ContentBox
        title="Nibh vivierra"
        text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
        iconPath="/icons/tunnel.svg"
      />
      <ContentBox
        title="Nibh vivierra"
        text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
        iconPath="/icons/tv.svg"
      />
    </section>
  );
};

export default Attribute;
