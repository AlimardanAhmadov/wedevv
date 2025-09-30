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
                                <a href="#community" className={`${classes.navLink} uppercase py-2 text-white transition-colors duration-300 transform px-2`}>04 community</a>
                                <a href="#community" className={`${classes.navLinkSecond} border-b-2 border-[#fff] uppercase py-2 text-white transition-colors duration-300 transform px-2`}>04 community</a>
                            </div>
                            <div className={`${classes.navItem} flex flex-col relative`}>
                                <a href="#career" className={`${classes.navLink} uppercase py-2 text-white transition-colors duration-300 transform px-2`}>05 career</a>
                                <a href="#career" className={`${classes.navLinkSecond} border-b-2 border-[#fff] uppercase py-2 text-white transition-colors duration-300 transform px-2`}>05 career</a>
                            </div>
                            {/* <Link href="/sign-in" className={`${classes.navLink} uppercase py-2 text-white transition-colors duration-300 transform rounded-lg md:mx-2`}>train on peakfit</Link> */}
                        </div>
            
                        <div className="relative mt-4 md:mt-0">

                        </div>
                    </div>
                    <div className={`${classes.socialsList} flex items-center gap-4`}>
                        <svg className='h-4 w-4 duration-300 cursor-pointer' fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                        </svg>
                        <svg className='h-4 w-4 duration-300 cursor-pointer' fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                        </svg>
                        <svg className='h-4 w-4 duration-300 cursor-pointer' fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                        </svg>
                        <svg className='h-4 w-4 duration-300 cursor-pointer' fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                        </svg>
                    </div>
                </div>
            </nav>
        </>
    );
}
  