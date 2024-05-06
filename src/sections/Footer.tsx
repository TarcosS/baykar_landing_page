import SelectLanguage from "@/components/SelectLanguage";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 px-4 md:px-20">
      <div className="flex flex-col">
        <div className="grid grid-cols-1 gap-12 border-y-[1px] border-slate-700 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center sm:items-start">
            <div className="px-2 py-3 text-base font-medium text-white">
              Product
            </div>
            <Link
              href={"#pricing"}
              className="w-full cursor-pointer rounded px-2 py-3 text-base text-slate-100 hover:bg-slate-800"
            >
              Pricing
            </Link>
            <Link
              href={"#overview"}
              className="w-full cursor-pointer rounded px-2 py-3 text-base text-slate-100 hover:bg-slate-800"
            >
              Overview
            </Link>
            <Link
              href={"#browse"}
              className="w-full cursor-pointer rounded px-2 py-3 text-base text-slate-100 hover:bg-slate-800"
            >
              Browse
            </Link>
            <Link
              href={"#accessibility"}
              className="w-full cursor-pointer rounded px-2 py-3 text-base text-slate-100 hover:bg-slate-800"
            >
              Accessibility
            </Link>
            <Link
              href={"#five"}
              className="w-full cursor-pointer rounded px-2 py-3 text-base text-slate-100 hover:bg-slate-800"
            >
              Five
            </Link>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="px-2 py-3 text-base font-medium text-white">
              Solutions
            </div>
            <Link
              href={"#breainstorming"}
              className="w-full cursor-pointer rounded px-2 py-3 text-base text-slate-100 hover:bg-slate-800"
            >
              Brainstorming
            </Link>
            <Link
              href={"#ideation"}
              className="w-full cursor-pointer rounded px-2 py-3 text-base text-slate-100 hover:bg-slate-800"
            >
              Ideation
            </Link>
            <Link
              href={"#wireframing"}
              className="w-full cursor-pointer rounded px-2 py-3 text-base text-slate-100 hover:bg-slate-800"
            >
              Wireframing
            </Link>
            <Link
              href={"#research"}
              className="w-full cursor-pointer rounded px-2 py-3 text-base text-slate-100 hover:bg-slate-800"
            >
              Research
            </Link>
            <Link
              href={"#design"}
              className="w-full cursor-pointer rounded px-2 py-3 text-base text-slate-100 hover:bg-slate-800"
            >
              Design
            </Link>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="px-2 py-3 text-base font-medium text-white">
              Support
            </div>
            <Link
              href={"#contact_us"}
              className="w-full cursor-pointer rounded px-2 py-3 text-base text-slate-100 hover:bg-slate-800"
            >
              Contact Us
            </Link>
            <Link
              href={"#developers"}
              className="w-full cursor-pointer rounded px-2 py-3 text-base text-slate-100 hover:bg-slate-800"
            >
              Developers
            </Link>
            <Link
              href={"#documentation"}
              className="w-full cursor-pointer rounded px-2 py-3 text-base text-slate-100 hover:bg-slate-800"
            >
              Documentation
            </Link>
            <Link
              href={"#integrations"}
              className="w-full cursor-pointer rounded px-2 py-3 text-base text-slate-100 hover:bg-slate-800"
            >
              Integrations
            </Link>
            <Link
              href={"#reports"}
              className="w-full cursor-pointer rounded px-2 py-3 text-base text-slate-100 hover:bg-slate-800"
            >
              Reports
            </Link>
          </div>
          <div className="flex flex-col items-center justify-between gap-[56px] sm:items-start">
            <div className="flex flex-col items-center sm:items-start">
              <div className="py-3 text-base font-medium text-white">
                Get the App
              </div>
              <div className="flex flex-col items-center gap-2 sm:items-start">
                <Link
                  target="_blank"
                  href={"https://www.apple.com/tr/app-store/"}
                >
                  <Image
                    src={"/images/App Store.png"}
                    width={240}
                    height={80}
                    alt="app-store-icon"
                    className="my-[3px] w-[120px]"
                  />
                </Link>
                <Link target="_blank" href={"https://play.google.com/"}>
                  <Image
                    src={"/images/Google Play.png"}
                    width={270}
                    height={80}
                    alt="google-play-icon"
                    className="my-[3px] w-[135px]"
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 sm:items-start">
              <div className="text-white">Follow Us</div>
              <div className="flex flex-row items-center gap-4 sm:items-start">
                <Link target="_blank" href={"https://youtube.com"}>
                  <Image
                    src={"/icons/youtube.svg"}
                    width={24}
                    height={24}
                    alt="social-media-icon"
                  />
                </Link>
                <Link target="_blank" href={"https://facebook.com"}>
                  <Image
                    src={"/icons/facebook.svg"}
                    width={24}
                    height={24}
                    alt="social-media-icon"
                  />
                </Link>
                <Link target="_blank" href={"https://x.com"}>
                  <Image
                    src={"/icons/twitter.svg"}
                    width={24}
                    height={24}
                    alt="social-media-icon"
                  />
                </Link>
                <Link target="_blank" href={"https://instagram.com"}>
                  <Image
                    src={"/icons/instagram.svg"}
                    width={24}
                    height={24}
                    alt="social-media-icon"
                  />
                </Link>
                <Link target="_blank" href={"https://linkedin.com"}>
                  <Image
                    src={"/icons/linkedin.svg"}
                    width={24}
                    height={24}
                    alt="social-media-icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 py-12 sm:flex-row sm:items-start sm:py-6">
          <div className="text-base text-slate-100">
            Collers @ {new Date().getFullYear()}. All rights reserved.
          </div>
          <div className="flex flex-row gap-8">
            <Link href={"terms"} className="cursor-pointer py-3 text-white">
              Terms
            </Link>
            <Link href={"privacy"} className="cursor-pointer py-3 text-white">
              Privacy
            </Link>
            <Link href={"contact"} className="cursor-pointer py-3 text-white">
              Contact
            </Link>
            <SelectLanguage />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
