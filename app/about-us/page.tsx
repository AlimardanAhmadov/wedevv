'use client'

import Navbar from "../components/Home/Navbar/Navbar";
import InfoSection from "../components/Home/InfoSection/InfoSection";
import classes from "./AboutUs.module.css";
import AboutUsVideo from "./components/AboutUsVideo";
import Footer from "../components/Footer/Footer";
import LoadingSpinner from "../components/Loader/LoadingSpinner";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function AboutUs() { 
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
            <div className={`${classes.aboutUs}`}>
                <InfoSection title={'ABOUT PEAKFIT'} />
            </div>
            <div className={`${classes.contactGrid} mx-auto relative flex gap-2 items-center justify-center`}>
                <a className="flex items-center gap-4 px-7 font-bold rounded-md trasition duration-300 ease-in-out cursor-pointer">
                    <img src="/icons/tiktok.png" alt="TikTok" />
                    TikTok
                </a>
                <a className="flex items-center gap-4 px-7 font-bold rounded-md trasition duration-300 ease-in-out cursor-pointer">
                    <img src="/icons/facebook.svg" alt="Facebook" />
                    Facebook
                </a>
                <a className="flex items-center gap-4 px-7 font-bold rounded-md trasition duration-300 ease-in-out cursor-pointer">
                    <img src="/icons/youtube.svg" alt="YouTube" />
                    YouTube
                </a>
                <a className="flex items-center gap-4 px-7 font-bold rounded-md trasition duration-300 ease-in-out cursor-pointer">
                    <img src="/icons/twitter-x.webp" alt="Twitter" />
                    Twitter
                </a>
                <a className="flex items-center gap-4 px-7 font-bold rounded-md trasition duration-300 ease-in-out cursor-pointer">
                    <img src="/icons/discord.png" alt="Discord" />
                    Discord
                </a>
                <a className="flex items-center gap-4 px-7 font-bold rounded-md trasition duration-300 ease-in-out cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#FF6154" d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"></path>
                            <path fill="#FFF" d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"></path>
                        </g>
                    </svg>
                    Product Hunt
                </a>
            </div>
            <AboutUsVideo />
            <div className={`${classes.goToDashboard} flex items-center rounded-xl mx-auto relative`}>
                <div>
                    <img src="/images/yoga-girl.jpeg" alt="Yoga Girl" />
                </div>
                <div className={`${classes.goToDashboardInfo} relative flex flex-col justify-start h-full`}>
                    <h1 className='uppercase'>COACH DASHBOARD</h1>
                    <h3 className='mt-4'>View voting statistics for every PeakFit coaching session and fitness proposal.</h3>
                    <div>
                        <a type='button' className="rounded-full text-center w-40 py-4 mt-6 bg-white hover:bg-gray-300 text-black font-bold uppercase transition duration-300 ease-in-out">
                            go to dashboard
                        </a>
                    </div>
                </div>
            </div>
            <div className={`${classes.learnMore} flex items-center gap-4 relative mx-auto`}>
                <div className={`${classes.learnMoreInfo} flex flex-col justify-start p-10`}>
                    <h1>Learn more about PeakFit and Up Only Fitness.</h1>
                    <a type='button' className="w-full rounded-full text-center w-40 py-4 mt-4 text-white font-bold uppercase transition duration-300 ease-in-out">
                        go to dashboard
                    </a>
                </div>
                <div className={`${classes.learnMoreDiscord} flex flex-col justify-start p-10`}>
                    <svg className="mb-3" height={'55'} width={'55'} fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/>
                    </svg>
                    <h1>Got questions? Join the PeakFit community and share your journey.</h1>
                    <a type='button' className="w-full bg-white rounded-full text-center w-40 py-4 mt-4 hover:bg-gray-200 text-black font-bold uppercase transition duration-300 ease-in-out">
                        join our discord
                    </a>
                </div>
            </div>

            <div className={`${classes.proposalForum} relative mx-auto`}>
                <div className="flex items-center gap-4 relative mx-auto mt-4">
                    <div className={`${classes.proposalForumInfo} flex flex-col justify-start p-10`}>
                        <h1>Got an idea to improve PeakFit? Put it to a vote on our community forum!</h1>
                        <a type='button' className="w-80 rounded-full text-center py-4 mt-4 hover:bg-gray-300 text-white font-bold uppercase transition duration-300 ease-in-out">
                            send your proposal
                        </a>
                    </div>
                    <img className="w-40" src="https://karate.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgovernance-forum.59f64506.png&w=640&q=75" alt="Mockups" />
                </div>
            </div>
            
            <div className={`${classes.aboutUsFooter}`}>
                <Footer />
            </div>
        </>
    )
}