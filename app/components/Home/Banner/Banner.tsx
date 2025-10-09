'use client'

import React, { useState, useEffect, useRef } from 'react';
import Link from '@/node_modules/next/link';
import classes from './Banner.module.css';
import Image from 'next/image';


const words = ['Innovative Solutions', 'Modern Designs', 'Smooth Web-Apps', 'Cutting-Edge Tech'];

export default function Banner() { 
    const [index, setIndex] = useState(0);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        const wordInterval = setInterval(() => {
            setShouldAnimate(true);
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
            
            setTimeout(() => setShouldAnimate(false), 270);
        }, 4000);

        return () => clearInterval(wordInterval);
    }, []);

    return (
        <>
            <section className={`${classes.bannerCover} absolute top-0 left-0 right-0`}>
                {/* <img style={{ filter: "blur(220px)" }} className='w-full h-full blur-4xl' src={'/images/banner-bg.webp'} alt="Banner Background" /> */}
                <div
                    className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-white dark:to-black"
                    style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.5) 80%, #040e19 100%)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    }}
                >
                </div>
            </section>
            <div className={`${classes.banner} mx-auto flex flex-row items-center justify-center text-center w-full`}>
                <div className="orb orb1">
                    <div className='absolute z-0 glow-0 top-[2cqw] -left-[4cqw] w-[20cqw] h-[20cqw] rounded-[340px] opacity-20 transform scale-200 rotate-45 bg-[radial-gradient(#157076,transparent_65%,transparent)]'></div>
                </div>
                <div className="orb orb2">
                    <div className='absolute z-0 glow-0 top-[5cqw] -left-[8cqw] w-[20cqw] h-[20cqw] rounded-[340px] opacity-20 transform scale-200 rotate-45 bg-[radial-gradient(#157076,transparent_65%,transparent)]'></div>
                </div>
                <div className="orb orb3">
                    <div className='absolute z-0 glow-0 top-[1cqw] -left-[4cqw] w-[20cqw] h-[20cqw] rounded-[340px] opacity-20 transform scale-200 rotate-45 bg-[radial-gradient(#157076,transparent_65%,transparent)]'></div>
                </div>

                <div className="orb orb4">
                    <div className='absolute z-0 glow-0 top-[6cqw] -left-[4cqw] w-[20cqw] h-[20cqw] rounded-[340px] opacity-20 transform scale-200 rotate-45 bg-[radial-gradient(#157076,transparent_65%,transparent)]'></div>
                </div>

                <div className="orb orb5">
                    <div className='absolute z-0 glow-0 top-[8cqw] -left-[4cqw] w-[20cqw] h-[20cqw] rounded-[340px] opacity-20 transform scale-200 rotate-45 bg-[radial-gradient(#157076,transparent_65%,transparent)]'></div>
                </div>
                <div>
                    <div className={`${classes.bannerTitle} text-[3rem] font-[800] max-w-[520px]`}>
                        <span>Empowering Your Business With</span>
                        <span
                            key={index}
                            className={`textSlide ${shouldAnimate ? 'animate' : ''}`}
                        >
                            {words[index]}
                        </span>
                    </div>
                    <div className={`${classes.bannerSubtitle} text-gray-300 max-w-[520px] mt-4`}>
                        At WeDev, we craft modern websites, custom web applications, and e-commerce platforms designed to elevate your business. We combine creative design with robust development to deliver solutions that drive results.
                    </div>
                    <div className={`${classes.ratings} flex items-center justify-center gap-2 mt-6`}>
                        <div className='w-16 h-16'>
                            <img className='rounded-md' src="/icons/google-customer-reviews.webp" alt="google-customer-reviews" />
                        </div>
                        <div className='w-16 h-16'>
                            <img className='rounded-md' src="/icons/trustpilot.webp" alt="trustpilot" />
                        </div>
                        <div className='w-16 h-16'>
                            <img className='rounded-md' src="/icons/g2.png" alt="g2" />
                        </div>
                    </div>
                    <div className={`${classes.ctaButtons} flex items-center justify-center gap-4`}>
                        <Link href={'https://forms.gle/KVq3ceB2wJibgmpB6'} target='_blank' className="text-center rounded-full w-40 py-4 bg-white hover:bg-gray-300 text-black text-xs font-bold uppercase transition duration-200 ease-in-out">
                            Join Us
                        </Link>
                        <Link href={'https://forms.gle/t6MPdQcKurSAVDbs7'} target='_blank' className="text-center relative rounded-full w-40 px-6 py-4 text-white text-xs font-bold uppercase bg-green-600 hover:bg-green-700 transition duration-200 ease-in-out overflow-hidden">
                            Let's talk
                        </Link>
                    </div>
                    <p className='richtext text-[13px] text-gray-400 max-w-[36rem] mt-5'>Subscribe now and enjoy 15% off all orders.</p>
                </div>
            </div>
        </>
    )
}