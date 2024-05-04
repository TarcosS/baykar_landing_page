import Navbar from "@/components/Navbar";
import Attribute from "@/sections/Attribute";
import Bests from "@/sections/Bests";
import CarouselSection from "@/sections/CarouselSection";
import Footer from "@/sections/Footer";
import Grow from "@/sections/Grow";
import Intro from "@/sections/Intro";
import JoinUs from "@/sections/JoinUs";
import MapSection from "@/sections/MapSection";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="bg-gradient-to-b from-amber-50 to-white min-h-screen overflow-x-hidden"
    >
      <Navbar />
      <div className="relative">
        <Intro />
        <Attribute />
        <div
          className="absolute bottom-0 aspect-[1428/806] w-[99%] bg-amber-100 right-0 hidden lg:block"
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
