'use client'

import { useEffect } from 'react';
import Image from 'next/image';
import classes from '../Integrations/Integrations.module.css'

export default function Integrations() { 
    useEffect(() => {
        const targets = document.querySelectorAll('.scale-target');
        const movingLine = document.querySelector('.Integrations_movingLine__FHGR8');

        const checkIntersection = () => {
            const movingLineRect = movingLine.getBoundingClientRect();
            
            targets.forEach(target => {
                const targetRect = target.getBoundingClientRect();
                
                if (
                    movingLineRect.left < targetRect.right &&
                    movingLineRect.right > targetRect.left &&
                    movingLineRect.top < targetRect.bottom &&
                    movingLineRect.bottom > targetRect.top
                ) {
                    target.classList.add('scale-up');
                } else {
                    target.classList.remove('scale-up');
                }
            });
        };

        const intervalId = setInterval(checkIntersection, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='relative'>
            <div className='max-w-[79rem] mx-auto relative top-[22rem]'>
                <div className='text-[2.25rem] font-[700] flex flex-col items-start'>
                    <h1 className='uppercase text-white'>How We Work</h1>
                    <span className='text-[14px] font-medium text-gray-300'>
                        Step-by-step approach to delivering quality websites and applications.
                    </span>
                </div>
            </div>
            <div className='relative top-[28rem]'>
                <div style={{
                    background: 'linear-gradient(180deg, #040e19, rgb(85 78 126 / 12%) 50%, #040e19 100%)',
                    position: 'absolute',
                    height: '23rem',
                    left: '0',
                    right: '0',
                    bottom: '-7rem',
                    zIndex: '-1'
                }}></div>
                <div className='max-w-[79rem] mx-auto flex flex-row items-center justify-between relative'>
                    <div className={`${classes.lines} flex flex-row items-center`}>
                        <div className={`${classes.line}`}>
                            <div className={`${classes.movingLine}`}></div>
                        </div>
                    </div>
                    <div className={`scale-target cursor-pointer w-[8rem] h-[8rem] rounded-3xl shadow-2xl flex flex-col items-center justify-center`}>
                        <Image alt='dev' src={'/images/customer.png'} width={'30'} height={'30'} />
                    </div>
                    <div className={`scale-target cursor-pointer w-[8rem] h-[8rem] rounded-3xl shadow-2xl flex flex-col items-center justify-center`}>
                        {/* <img width="60" height="60" src="https://img.icons8.com/color/60/shopify.png" alt="shopify"/> */}
                        <Image alt='dev' src={'/images/dev.png'} width={'60'} height={'60'} />
                    </div>
                    <div className={`scale-target cursor-pointer w-[8rem] h-[8rem] rounded-3xl shadow-2xl flex flex-col items-center justify-center`}>
                        <Image alt='logo' src={'/images/logo-icon.png'} width={'50'} height={'50'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
