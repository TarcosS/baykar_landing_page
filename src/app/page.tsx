import Navbar from "@/components/Navbar";
import Attribute from "@/sections/Attribute";
import Bests from "@/sections/Bests";
import CarouselSection from "@/sections/CarouselSection";
import Footer from "@/sections/Footer";
import Grow from "@/sections/Grow";
import Intro from "@/sections/Intro";
import JoinUs from "@/sections/JoinUs";
import MapSection from "@/sections/MapSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-amber-50 to-white">
      <Navbar />
      <div className="relative">
        <Intro />
        <Attribute />
        <div
          className="absolute bottom-0 right-0 hidden aspect-[1428/806] w-[99%] bg-amber-100 lg:block 2xl:aspect-[2200/806]"
          style={{
            clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
          }}
        ></div>
      </div>
      <Bests />
      <JoinUs />
      <CarouselSection />
      <Grow />
      <MapSection />
      <Footer />
    </div>
  );
}
