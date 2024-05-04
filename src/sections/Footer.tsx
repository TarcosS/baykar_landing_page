import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 px-4 md:px-20">
      <div className="flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-12 border-y-[1px] border-slate-700">
            <div className="flex flex-col items-center sm:items-start">
                <div className="text-base font-medium text-white py-3">Product</div>
                <Link href={'#pricing'} className="text-base text-slate-100 cursor-pointer py-3">Pricing</Link>
                <Link href={'#overview'} className="text-base text-slate-100 cursor-pointer py-3">Overview</Link>
                <Link href={'#browse'} className="text-base text-slate-100 cursor-pointer py-3">Browse</Link>
                <Link href={'#accessibility'} className="text-base text-slate-100 cursor-pointer py-3">Accessibility</Link>
                <Link href={'#five'} className="text-base text-slate-100 cursor-pointer py-3">Five</Link>
            </div>
            <div className="flex flex-col items-center sm:items-start">
                <div className="text-base font-medium text-white py-3">Solutions</div>
                <Link href={'#breainstorming'} className="text-base text-slate-100 cursor-pointer py-3">Brainstorming</Link>
                <Link href={'#ideation'} className="text-base text-slate-100 cursor-pointer py-3">Ideation</Link>
                <Link href={'#wireframing'} className="text-base text-slate-100 cursor-pointer py-3">Wireframing</Link>
                <Link href={'#research'} className="text-base text-slate-100 cursor-pointer py-3">Research</Link>
                <Link href={'#design'} className="text-base text-slate-100 cursor-pointer py-3">Design</Link>
            </div>
            <div className="flex flex-col items-center sm:items-start">
                <div className="text-base font-medium text-white py-3">Support</div>
                <Link href={'#contact_us'} className="text-base text-slate-100 cursor-pointer py-3">Contact Us</Link>
                <Link href={'#developers'} className="text-base text-slate-100 cursor-pointer py-3">Developers</Link>
                <Link href={'#documentation'} className="text-base text-slate-100 cursor-pointer py-3">Documentation</Link>
                <Link href={'#integrations'} className="text-base text-slate-100 cursor-pointer py-3">Integrations</Link>
                <Link href={'#reports'} className="text-base text-slate-100 cursor-pointer py-3">Reports</Link>
            </div>
            <div className="flex flex-col justify-between items-center sm:items-start gap-[56px]">
                <div className="flex flex-col items-center sm:items-start">
                    <div className="text-base font-medium text-white py-3">Get the App</div>
                    <div className="flex flex-col gap-2 items-center sm:items-start">
                        <Link target="_blank" href={'https://www.apple.com/tr/app-store/'}>
                            <Image 
                                src={'/images/App Store.png'}
                                width={240}
                                height={80}
                                alt="app-store-icon"
                                className="w-[120px] my-[3px]"
                            />
                        </Link>
                        <Link target="_blank" href={'https://play.google.com/'}>
                            <Image 
                                src={'/images/Google Play.png'}
                                width={270}
                                height={80}
                                alt="google-play-icon"
                                className="w-[135px] my-[3px]"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-center sm:items-start">
                    <div>Follow Us</div>
                    <div className="flex flex-row gap-4 items-center sm:items-start">
                        <Link target="_blank" href={'https://youtube.com'}>
                            <Image 
                                src={'/icons/youtube.svg'}
                                width={24}
                                height={24}
                                alt="social-media-icon"
                            />
                        </Link>
                        <Link target="_blank" href={'https://facebook.com'}>
                            <Image 
                                src={'/icons/facebook.svg'}
                                width={24}
                                height={24}
                                alt="social-media-icon"
                            />
                        </Link>
                        <Link target="_blank" href={'https://x.com'}>
                            <Image 
                                src={'/icons/twitter.svg'}
                                width={24}
                                height={24}
                                alt="social-media-icon"
                            />
                        </Link>
                        <Link target="_blank" href={'https://instagram.com'}>
                            <Image 
                                src={'/icons/instagram.svg'}
                                width={24}
                                height={24}
                                alt="social-media-icon"
                            />
                        </Link>
                        <Link target="_blank" href={'https://linkedin.com'}>
                            <Image 
                                src={'/icons/linkedin.svg'}
                                width={24}
                                height={24}
                                alt="social-media-icon"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between py-12 sm:py-6 items-center sm:items-start gap-6">
          <div className="text-base text-slate-100">Collers @ {new Date().getFullYear()}. All rights reserved.</div>
          <div className="flex flex-row gap-8">
            <Link href={"terms"} className="py-3 cursor-pointer">Terms</Link>
            <Link href={"privacy"} className="py-3 cursor-pointer">Privacy</Link>
            <Link href={"contact"} className="py-3 cursor-pointer">Contact</Link>
            <div className="py-3 cursor-pointer">EN</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
