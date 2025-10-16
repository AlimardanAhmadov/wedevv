'use client';

import { useEffect, useState } from 'react';
import classes from './Navbar.module.css';
import Link from '@/node_modules/next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
            setIsScrolled(true);
            } else {
            setIsScrolled(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`fixed z-[21] max-w-full w-full h-16 flex flex-col justify-center items-center px-[5rem] transition-colors duration-300 ${
                isScrolled ? 'transparent-bg' : 'bg-none'
                }`}>
                <div className="py-3 flex item-center justify-between w-full">
                    <div className="flex items-center justify-between">
                        <Link href={'/'} className={`${classes.logoBox} h-auto flex gap-[.5rem] items-center justify-center`}>
                            <img className='w-[40px]' src="/images/logo-main.png" alt="Alimardan Ahmadov Logo" />
                            <span className='font-[400] uppercase text-[30px]'>We<span className='text-[#36F4A4] font-[400]'>Dev</span></span>
                        </Link>
                    </div>
            
                    <div  className="nav-links-list block inset-x-0 z-20 px-6 py-4 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between">
                        <div className={`flex flex-col px-2 -mx-1 md:flex-row md:py-0 items-center`}>
                            <div className={`${classes.navItem} flex flex-col relative`}>
                                <a href="#about" className={`${classes.navLink} uppercase py-2 text-white transition-colors duration-300 transform px-2`}>01 about</a>
                                <a href="#about" className={`${classes.navLinkSecond} border-b-2 border-[#fff] uppercase py-2 text-white transition-colors duration-300 transform px-2`}>01 about</a>
                            </div>
                            <div className={`${classes.navItem} flex flex-col relative`}>
                                <a href="#clients" className={`${classes.navLink} uppercase py-2 text-white transition-colors duration-300 transform px-2`}>02 clients</a>
                                <a href="#clients" className={`${classes.navLinkSecond} border-b-2 border-[#fff] uppercase py-2 text-white transition-colors duration-300 transform md:mx-2`}>02 clients</a>
                            </div>
                            <div className={`${classes.navItem} flex flex-col relative`}>
                                <a href="#services" className={`${classes.navLink} uppercase py-2 text-white transition-colors duration-300 transform px-2`}>03 services</a>
                                <a href="#services" className={`${classes.navLinkSecond} border-b-2 border-[#fff] uppercase py-2 text-white transition-colors duration-300 transform px-2`}>03 services</a>
                            </div>
                            <div className={`${classes.navItem} flex flex-col relative`}>
                                <a href="#works" className={`${classes.navLink} uppercase py-2 text-white transition-colors duration-300 transform px-2`}>04 works</a>
                                <a href="#works" className={`${classes.navLinkSecond} border-b-2 border-[#fff] uppercase py-2 text-white transition-colors duration-300 transform px-2`}>04 works</a>
                            </div>
                            <div className={`${classes.navItem} flex flex-col relative`}>
                                <a href="#community" className={`${classes.navLink} uppercase py-2 text-white transition-colors duration-300 transform px-2`}>05 community</a>
                                <a href="#community" className={`${classes.navLinkSecond} border-b-2 border-[#fff] uppercase py-2 text-white transition-colors duration-300 transform px-2`}>05 community</a>
                            </div>
                            <div className={`${classes.navItem} flex flex-col relative`}>
                                <a href="#career" className={`${classes.navLink} uppercase py-2 text-white transition-colors duration-300 transform px-2`}>06 career</a>
                                <a href="#career" className={`${classes.navLinkSecond} border-b-2 border-[#fff] uppercase py-2 text-white transition-colors duration-300 transform px-2`}>06 career</a>
                            </div>
                            {/* <Link href="/sign-in" className={`${classes.navLink} uppercase py-2 text-white transition-colors duration-300 transform rounded-lg md:mx-2`}>train on peakfit</Link> */}
                        </div>
            
                        <div className="relative mt-4 md:mt-0">

                        </div>
                    </div>
                    <div className={`${classes.socialsList} flex items-center gap-4`}>
                        <Link href={'https://www.instagram.com/wedevv/'} target='_blank' rel='noopener noreferrer'>
                            <svg className='h-4 w-4 duration-300 cursor-pointer' fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                            </svg>
                        </Link>

                        <Link href='https://discord.gg/XtHa2AbW' target='_blank' rel='noopener noreferrer'>
                            <svg className='h-5 w-5 duration-300 cursor-pointer' fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/>
                            </svg>
                        </Link>

                        <Link href='https://www.linkedin.com/company/109239291/admin/dashboard/' target='_blank' rel='noopener noreferrer'>
                            <svg className='h-5 w-5 duration-300 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill='#fff'  viewBox="0 0 640 640">
                                <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
  