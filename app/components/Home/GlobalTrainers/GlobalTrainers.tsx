'use client'

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import AnimationSVG from '../../SvgAnimation/SvgAnimation';
import classes from '../GlobalTrainers/GlobalTrainers.module.css'

export default function GlobalTrainers() { 
    const [activeIndex, setActiveIndex] = useState(1);
    const globeEl = useRef(null);

    const cards = [
        {
            'image': 'https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6INqkCNfNL5al8RfzygwaA%2F9fc0f657ba97ba0416d1c7d87da77d3f%2Frafael_aghayev_var1.png%3Ffm%3Dwebp&w=640&q=75',
            'flag': '/icons/flags/uk-flag.png'
        },
        {
            'image': 'https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F5Jyp53aJG24I5dF3E5iLZS%2Ff454d5f1d600364bc9c41bc41adbfb52%2FKC_43_Var1_1000x1200_FaceOff_Melinda_Fabian.png%3Ffm%3Dwebp&w=640&q=75',
            'flag': '/icons/flags/mexico.avif'
        },
        {
            'image': 'https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F79ILkJhTV5p6tFlxL4hdks%2F16ce937cd88b8eeae19dbfd79e57e99e%2FQmT6WdPxcvzSjCzaDqKKQNwjF6F3xMyZoxiAz6aDnfVSMV%3Ffm%3Dwebp&w=640&q=75',
            'flag': '/icons/flags/us-flag.avif'
        },
        {
            'image': 'https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4Wbg1gCdBzPngrwBLXR3PC%2Fae3133ce380ac58682e603b535c80742%2FJesus_Lopez_HS.png%3Ffm%3Dwebp&w=640&q=75',
            'flag': '/icons/flags/brazil-flag.avif'
        },
        {
            'image': 'https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6qO1sPv9uMOYnF72JLPnVj%2F367f3c427b6c10bb328e292fba77143d%2Fkaye-asesor-head-image.png%3Ffm%3Dwebp&w=640&q=75',
            'flag': '/icons/flags/japan.png'
        },
        {
            'image': 'https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F79ILkJhTV5p6tFlxL4hdks%2F16ce937cd88b8eeae19dbfd79e57e99e%2FQmT6WdPxcvzSjCzaDqKKQNwjF6F3xMyZoxiAz6aDnfVSMV%3Ffm%3Dwebp&w=640&q=75',
            'flag': '/icons/flags/austria.avif'
        },
        {
            'image': 'https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4Wbg1gCdBzPngrwBLXR3PC%2Fae3133ce380ac58682e603b535c80742%2FJesus_Lopez_HS.png%3Ffm%3Dwebp&w=640&q=75',
            'flag': '/icons/flags/france.avif'
        }
    ];

    const loopedCards = [...cards, ...cards, ...cards, ...cards, ...cards];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % loopedCards.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [loopedCards.length]);

    return (
        <div id='clients'>
            <div className='px-[5rem] mx-auto relative top-[22rem] flex flex-col gap-[3rem]'>
                {/* <div className='text-[2.25rem] font-[700] flex flex-col items-start'>
                    <h1 className='uppercase text-white'>Clients all around the world</h1>
                    <span className='text-[16px] font-medium text-gray-300'>
                        Local and global
                    </span>
                </div> */}
                <section style={{ paddingTop: 'clamp(3rem,calc(4.9524vw + 1.7929rem),2.25rem)' }}>
                    <h2 className='flex flex-col products-title font-[300] text-[#fff] text-left mx-auto gap-2' style={{ lineHeight: '1.04', letterSpacing: '-.04em', fontSize: 'clamp(2.5rem,calc(3.8095vw + 1.5714rem),5rem)', textWrap: 'balance' }}>
                        <div className='uppercase text-[#36F4A4]' style={{ fontWeight: 'calc(300 + 200)', fontSize: 'clamp(.875rem,calc(.1905vw + .8286rem),1rem)', lineHeight: '1.08', letterSpacing: '.04em' }}>Local and global</div>
                        <div>
                            <span>
                                Clients all around the world
                            </span>
                        </div>
                    </h2>
                </section>
                <div className={`clients rounded-2xl bg-[#07121f] flex flex-col items-start p-12 relative overflow-hidden`}>
                    <div className="dot-item absolute flex gap-2 items-center z-10 will-change-[opacity] transition-opacity duration-300 user-select-none pointer-events-none opacity-100 left-[59%] top-[32%]">
                        <div className="aspect-square w-6 flex justify-center items-center">
                            <div className="rounded-full bg-[#418acd]/[.4] opacity-30 aspect-square transition-all duration-300 w-3.5 lg:w-5 xl:w-6"></div>
                            <div className="aspect-square w-1 md:w-2 shadow rounded-full bg-[#8FB8D0] absolute z-10 will-change-[opacity] transition-opacity duration-300 opacity-100"></div>
                        </div>
                        <span className="absolute ml-8 text-[11px] font-semibold">USA</span>
                    </div>
                    <div className="dot-item absolute flex gap-2 items-center z-10 will-change-[opacity] transition-opacity duration-300 user-select-none pointer-events-none opacity-100 left-[64%] top-[57%]">
                        <div className="aspect-square w-6 flex justify-center items-center">
                            <div className="rounded-full bg-[#418acd]/[.4] opacity-30 aspect-square transition-all duration-300 w-3.5 lg:w-5 xl:w-6"></div>
                            <div className="aspect-square w-1 md:w-2 shadow rounded-full bg-[#8FB8D0] absolute z-10 will-change-[opacity] transition-opacity duration-300 opacity-100"></div>
                        </div>
                        <span className="absolute ml-8 text-[11px] font-semibold">Brazil</span>
                    </div>
                    <div className="dot-item absolute flex gap-2 items-center z-10 will-change-[opacity] transition-opacity duration-300 user-select-none pointer-events-none opacity-100 left-[76%] top-[43%]">
                        <div className="aspect-square w-6 flex justify-center items-center">
                            <div className="rounded-full bg-[#418acd]/[.4] opacity-30 aspect-square transition-all duration-300 w-3.5 lg:w-5 xl:w-6"></div>
                            <div className="aspect-square w-1 md:w-2 shadow rounded-full bg-[#8FB8D0] absolute z-10 will-change-[opacity] transition-opacity duration-300 opacity-100"></div>
                        </div>
                        <span className="absolute ml-8 text-[11px] font-semibold">Africa</span>
                    </div>
                    <div className="dot-item absolute flex gap-2 items-center z-10 will-change-[opacity] transition-opacity duration-300 user-select-none pointer-events-none opacity-100 left-[74%] top-[27%]">
                        <div className="aspect-square w-6 flex justify-center items-center">
                            <div className="rounded-full bg-[#418acd]/[.4] opacity-30 aspect-square transition-all duration-300 w-3.5 lg:w-5 xl:w-6"></div>
                            <div className="aspect-square w-1 md:w-2 shadow rounded-full bg-[#8FB8D0] absolute z-10 will-change-[opacity] transition-opacity duration-300 opacity-100"></div>
                        </div>
                        <span className="absolute ml-8 text-[11px] font-semibold">Europe</span>
                    </div>
                    <div className="dot-item absolute flex gap-2 items-center z-10 will-change-[opacity] transition-opacity duration-300 user-select-none pointer-events-none opacity-100 left-[86%] top-[35%]">
                        <div className="aspect-square w-6 flex justify-center items-center">
                            <div className="rounded-full bg-[#418acd]/[.4] opacity-30 aspect-square transition-all duration-300 w-3.5 lg:w-5 xl:w-6"></div>
                            <div className="aspect-square w-1 md:w-2 shadow rounded-full bg-[#8FB8D0] absolute z-10 will-change-[opacity] transition-opacity duration-300 opacity-100"></div>
                        </div>
                        <span className="absolute ml-8 text-[11px] font-semibold">Asia</span>
                    </div>
                    <div className="orb1 absolute z-0 glow-2 top-[12cqw] left-[39cqw] w-[13rem] h-[13rem] rounded-full opacity-30 transform scale-200 -rotate-[30deg] bg-[radial-gradient(ellipse_at_center,rgb(54,113,162,0.21),#06101c_75%,#06101c)]"></div>
                    <div className="orb2 absolute z-0 glow-2 top-[13cqw] left-[17cqw] w-[13rem] h-[13rem] rounded-full opacity-30 transform scale-200 -rotate-[30deg] bg-[radial-gradient(ellipse_at_center,rgb(54,113,162,0.4),#06101c_75%,#06101c)]"></div>
                    <div className='flex flex-row gap-[4rem] w-full'>
                        <div className='h-[374px]' style={{ maskImage: 'linear-gradient(transparent, #000, transparent)' }}>
                            <div 
                                className="flex flex-col gap-3 relative transition-transform duration-1000 ease-[cubic-bezier(0.4, 0.0, 0.2, 1)]" 
                            >
                                {loopedCards.map((card, index) => {
                                    const actualIndex = index % cards.length;
                                    const isActive = activeIndex % cards.length === actualIndex;
                                    
                                    return (
                                        <div 
                                            key={index} 
                                            className={`rounded-xl w-[4rem] min-h-[4rem] h-[4rem] flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] 
                                            ${isActive ? 'bg-white/20' : 'bg-white/10'}`}
                                            style={{ transform: `translateY(-${(((activeIndex) * 4))}rem` }}
                                        >
                                            <Image alt="" className='rounded-lg' src={card.flag} width={'40'} height={'40'} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className='absolute right-[-2rem] top-[3.4rem] z-0' style={{ maskImage: 'linear-gradient(to right, transparent, rgb(0, 0, 0), transparent)' }}>
                            <AnimationSVG path={`/images/dots-map.json`} containerId={`dots-map`} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 items-start mt-8 max-w-[35rem]'>
                        <h4 className='text-[19px] font-semibold text-gray-100'>Trusted by Clients Worldwide</h4>
                        <p className='richtext text-body-sm text-gray-400'>From startups to established enterprises, businesses across different countries rely on WeDev to deliver scalable, modern, and high-performing digital solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
