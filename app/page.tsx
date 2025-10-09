'use client'

import Footer from "./components/Footer/Footer";
import Banner from "./components/Home/Banner/Banner";
import DiscordSection from "./components/Home/DiscordSection/DiscordSection";
import InfoSection from "./components/Home/InfoSection/InfoSection";
import Navbar from "./components/Home/Navbar/Navbar";
import GlobalTrainers from "./components/Home/GlobalTrainers/GlobalTrainers";
import MassIconsAnimation from "./components/Home/MassIconsAnimation/page";
import LoadingSpinner from "./components/Loader/LoadingSpinner";
import Services from "./components/Home/Services/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <MassIconsAnimation />
      <GlobalTrainers />
      <Services />
      <InfoSection title={'THE GREATEST PART? NOTHING TO LOSE.'} />
      <DiscordSection />
      <div className="relative top-[-40rem]">
        <Footer />
      </div>
      <div className="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="68e7a8ddec0c576936e962c6" data-style-height="52px" data-style-width="100%" data-token="24118130-f150-4354-b42b-a4252b667774">
        <a href="https://www.trustpilot.com/review/codedev.cloud" target="_blank" rel="noopener">Trustpilot</a>
      </div>
    </>
  );
}
