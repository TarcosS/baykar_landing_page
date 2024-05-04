import Marker from "@/components/Marker";
import Image from "next/image";

const points = [
    {
        radius: 32,
        x: 165,
        y: 230,
    },
    {
        radius: 24,
        x: 310,
        y: 440,
    },
    {
        radius: 30,
        x: 760,
        y: 180,
    },
    {
        radius: 16,
        x: 840,
        y: 500,
    },
]

const MapSection = () => {
    return (
        <section className="px-[21px] py-12 md:px-48 md:py-[42px] bg-amber-900 relative">
            <div className="w-[1049px] h-[633px] relative">
                <Image 
                    src={"/icons/map.svg"}
                    width={1049}
                    height={633}
                    alt="Map"
                    className="opacity-50 w-[1049px] h-[633px] flex-none"
                />
                {
                    points.map((point, index) => {
                        return (
                            <Marker
                                key={'marker_' + index}
                                radius={point.radius}
                                position={{ x: point.x, y: point.y }}
                            />
                        )
                    })
                }
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 flex flex-col justify-center items-center select-none">
                <h1 className="lg:text-8xl text-5xl font-extrabold">11,658,467</h1>
                <h2 className="lg:text-[56px] text-[32px] font-extrabold">Shoes Collected</h2>
            </div>
        </section>
    )
}

export default MapSection;