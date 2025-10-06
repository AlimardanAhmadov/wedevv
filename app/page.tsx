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

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function Home() {
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setLoader(true);
      setTimeout(() => setLoader(false), 500);
    };

    router.prefetch(router.pathname);
    handleRouteChange();

    return () => {
      setLoader(false);
    };
  }, [router.pathname]);


  return (
    <>
      {loader && <LoadingSpinner />}
      <Navbar />
      <Banner />
      <MassIconsAnimation />
      {/* <Categories /> */}
      {/* <Pricing /> */}
      {/* <CTA /> */}
      {/* <Integrations /> */}
      <GlobalTrainers />
      <Services />
      {/* <ProfitCard /> */}
      {/* <Globe3D /> */}
      {/* <Coaches /> */}
      <InfoSection title={'THE GREATEST PART? NOTHING TO LOSE.'} />
      <DiscordSection />
      <div className="relative top-[-40rem]">
        <Footer />
      </div>
    </>
  );
}
