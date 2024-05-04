import Image from "next/image";

const Screen = () => {
    return (
        <div className="rounded-[20px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_15px_rgba(0,0,0,0.07)] bg-white w-full h-[350px]">
            <div className="flex flex-row gap-[5px] px-7 py-4">
                <Image 
                    src={"/icons/circle-f.svg"}
                    width={10}
                    height={10}
                    alt="icon1"
                />
                <Image 
                    src={"/icons/circle-f-1.svg"}
                    width={10}
                    height={10}
                    alt="icon2"
                />
                <Image 
                    src={"/icons/circle-f-2.svg"}
                    width={10}
                    height={10}
                    alt="icon3"
                />
            </div>
        </div>
    )
};

export default Screen;