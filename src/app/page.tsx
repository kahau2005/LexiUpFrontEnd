import Footer from "@/app/components/landing-page/Footer";
import GoToTop from "@/app/components/landing-page/GotoTop";
import Header from "@/app/components/landing-page/Header";
import MainFutures from "@/app/components/landing-page/main-features/MainFutures";
import Slogan from "@/app/components/landing-page/Slogan";
import WhyChooseUs from "@/app/components/landing-page/why-choose-us/WhyChooseUs";

import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full h-full text-white bg-gradient-to-b from-grad-start via-grad-mid to-grad-end">
      <Header/>
      <div id="scroller" className="w-full h-full  overflow-y-scroll scroll-smooth">
        <div className="h-full flex flex-col items-center justify-center">
          <Slogan/>
          <Image
            src={'/images/edu.png'}
            width={300}
            height={300}
            alt="img"
          />
          <Link
              href={'/login'} 
              className="mt-[60px] transition-all duration-100 px-6 py-3 rounded-[30px] text-[15px] font-bold bg-[#aeb3fa3f] hover:scale-[1.2] border-[1px] text-[#ffffffe3] border-solid">Explore Now
          </Link>
        </div>
        <MainFutures/>
        <WhyChooseUs/>
        <Footer/>
        <GoToTop containerId="scroller"/>
      </div>
      
    </div>
  );
}
