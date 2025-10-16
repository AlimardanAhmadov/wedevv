'use client'

import Footer from "./components/Footer/Footer";
import Banner from "./components/Home/Banner/Banner";
import DiscordSection from "./components/Home/DiscordSection/DiscordSection";
import InfoSection from "./components/Home/InfoSection/InfoSection";
import Navbar from "./components/Home/Navbar/Navbar";
import GlobalTrainers from "./components/Home/GlobalTrainers/GlobalTrainers";
import MassIconsAnimation from "./components/Home/MassIconsAnimation/page";
import Services from "./components/Home/Services/Services";
import Works from "./components/Home/Works/Works";
import Process from "./components/Home/Process/Process";

export default function Home() {
  return (
    <>
      <svg aria-hidden="true" style={{ fill: 'rgb(32 31 31)' }} className="w-full h-full fixed top-0 bottom-0 left-0 right-0 -z-10">
          <defs>
              <pattern id="«R1cdb»" width="10" height="10" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" x="0" y="0">
              <circle id="pattern-circle" cx="1" cy="1" r="1"></circle>
              </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#«R1cdb»)"></rect>
      </svg>
      <Navbar />
      <Banner />
      <MassIconsAnimation />
      <Process />
      <GlobalTrainers />
      <Services />
      <Works />
      <InfoSection title={'THE GREATEST PART? NOTHING TO LOSE.'} />
      <DiscordSection />
      <div className="relative top-[-40rem]">
        <Footer />
      </div>
    </>
  );
}
