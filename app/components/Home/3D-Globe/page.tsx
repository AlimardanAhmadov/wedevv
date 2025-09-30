'use client'

import React, { useState, useEffect, useRef } from 'react';
import SmoothScroll from './smooth-scroll';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import AnimationSVG from '../../SvgAnimation/SvgAnimation';
import Chart from 'chart.js/auto';


const Earth = dynamic(() => import('../3D-Globe/earth/earth'), {
    ssr: false,
    loading: () => (
        <div className="h-16 bg-[#0f0f0f] my-auto relative flex items-center justify-center w-[50%] h-[50%]">
            <div className="h-16 w-16 rounded-full border-2 border-[#fff] border-dashed animate-spin"></div>
        </div>
    ),
});

export default function Globe3D() {
    // const [animations, setAnimations] = useState({
    //     dollarBills: false,
    //     fireworks: false,
    // });
    
    // const handleMouseEvents = (animation, show) => {
    //     setAnimations((prevState) => ({
    //       ...prevState,
    //       [animation]: show,
    //     }));
    // };

    const chartRef = useRef(null);
    const [data, setData] = useState([
        20, 25, 22, 27, 4, 26, 30, 6, 3, 3,
        3, 5, 19, 24, 6, 20, 22, 21, 19, 23
    ]);
    const [animatedValue, setAnimatedValue] = useState(8343.98);

    useEffect(() => {
        const createGroupChart = () => {
            const canvas = document.getElementById('bar-chart-grouped');

            if (chartRef.current) {
                chartRef.current.destroy();
            }

            if (canvas) {
                chartRef.current = new Chart(canvas, {
                    type: 'bar',
                    data: {
                        labels: [
                            '1700', '1710', '1720', '1730', '1740',
                            '1800', '1810', '1820', '1830', '1840',
                            '1900', '1910', '1920', '1930', '1940',
                            '2050', '2060', '2070', '2080', '2090',
                        ],
                        datasets: [
                            {
                                label: '',
                                backgroundColor: 'rgb(143, 184, 208)',
                                data: data,
                                barPercentage: 0.5,
                                categoryPercentage: 0.5,
                                barThickness: 17,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                left: -10,
                                right: 0,
                                top: 0,
                                bottom: 0,
                            },
                        },
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                        elements: {
                            point: {
                                radius: 0,
                            },
                        },
                        scales: {
                            y: {
                                grid: {
                                    display: false,
                                },
                                border: {
                                    display: false,
                                },
                                ticks: {
                                    display: false,
                                },
                            },
                            x: {
                                grid: {
                                    display: false,
                                },
                                border: {
                                    display: false,
                                },
                                ticks: {
                                    display: false,
                                },
                            },
                        },
                    },
                });
            }
        };
        createGroupChart();

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className='relative top-[49rem] overflow-hidden'>
            <div id='stars' className='max-h-[1rem] absolute top-0 bottom-0 left-0 right-0'></div>
            <div className='absolute top-0 left-0 bottom-0 right-0 z-[-20]' style={{ background: 'linear-gradient(to bottom, transparent 0%, #1b242e 50%, transparent 100%)' }}></div>
            <SmoothScroll>
                <main className={`globe-3d h-[60vw] relative flex items-center justify-start my-20`}>
                    <Earth />
                    {/* {animations.dollarBills && (
                        <div className='absolute top-[6.5rem] left-[16.5rem] z-[-99999]'>
                            <AnimationSVG path={`/icons/dollar-bills.json`} containerId={'dollar-bills'} />
                        </div>
                    )} */}
                    <div
                        className='w-[190px] rounded-2xl absolute left-[16rem] top-[16rem] flex flex-col gap-1 z-20 p-[18px] bg-[#0c1b29b3]'
                        style={{ 
                            animation: 'bounce1 3s infinite',
                            boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.5)',
                        }}
                        // onMouseEnter={() => handleMouseEvents('dollarBills', true)}
                        // onMouseLeave={() => handleMouseEvents('dollarBills', false)}
                    >
                        <div className="gradient-border"></div>
                        <span className='text-[11px] font-medium'>Today's income</span>
                        <div
                            className="text-[15px] font-semibold tracking-tight text-white flex flex-row items-center justify-between"
                            style={{ letterSpacing: '.2px' }}
                        >
                            $3,856USD
                            <div className='flex flex-row gap-1 items-center'>
                                <Image alt="" src={'/icons/stats.svg'} width={'15'} height={'15'} />
                                <span className='text-green-400 text-[10.5px] font-medium'>123%</span>
                            </div>
                        </div>
                        <span className='text-gray-400 text-[10px]'>241 customers</span>
                    </div>
                    {/* {animations.fireworks && (
                        <div className='absolute top-[-3rem] right-[14.5rem]'>
                            <AnimationSVG path={`/icons/fireworks.json`} containerId={'fireworks'} />
                        </div>
                    )} */}
                    <div
                        className='duration-200 ease-in-out transition shadow-2xl w-[160px] rounded-full bg-[#0c1b29b3] absolute right-[20rem] top-[16rem] flex flex-col gap-1 z-40 px-[10px] py-[6px]'
                        style={{ 
                            animation: 'bounce2 3s infinite',
                            boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.5)',
                        }}
                        // onMouseEnter={() => handleMouseEvents('fireworks', true)}
                        // onMouseLeave={() => handleMouseEvents('fireworks', false)}
                    >
                        <div className='flex flex-row items-center gap-3'>
                            <Image alt="" src={'/images/logo-icon.png'} width={'22'} height={'22'} />
                            <div className='flex flex-col items-start'>
                                <span className='text-[10px] font-semibold text-gray-300'>Fitness category</span>
                                <h2 className='text-[12px] font-semibold tracking-tight text-white'>MMA</h2>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ 
                            boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.5)',
                            animation: 'bounce2 3s infinite'
                        }}
                        className={`pt-3 rounded-3xl bg-[#0c1b29b3] transition ease-in-out min-w-[280px] w-[240px] bottom-[5rem] left-[10rem] absolute z-20`}
                    >
                        <div className={`flex flex-col items-center justify-between h-full`}>
                            <div className='absolute left-0 right-0 bottom-0 z-20'>
                                <div
                                    className="bg-[#1F2937] shadow-3xl flex items-center gap-2 justify-between w-full block p-3 rounded-b-3xl transition duration-200 ease-in-out"
                                >
                                    <div className='flex items-center gap-2'>
                                        <div className='rounded-full w-9 h-9 bg-[#0c1b29] flex flex-col items-center justify-center'>
                                            <img src={'https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6INqkCNfNL5al8RfzygwaA%2F9fc0f657ba97ba0416d1c7d87da77d3f%2Frafael_aghayev_var1.png%3Ffm%3Dwebp&w=640&q=75'} width={'25'} height={'25'} />
                                        </div>
                                        <div className='flex flex-col items-start'>
                                            <h2 className='text-[12px] font-semibold tracking-tight text-white'>Rafael Aghayev</h2>
                                            <span className='text-[10px] font-semibold text-gray-300'>MMA Fighter</span>
                                        </div>
                                    </div>

                                    <div 
                                        className={`rounded-full w-[2rem] min-h-[2rem] h-[2rem] flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] bg-white/10`}
                                    >
                                        <Image alt src={`/icons/flags/france.avif`} width={'20'} height={'20'} />
                                    </div>
                                </div>
                            </div>
                            <div className={`z-10 h-[300px] max-h-[300px] pb-[2rem]`}>
                                <img className='h-[90%]' src={'https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6INqkCNfNL5al8RfzygwaA%2F9fc0f657ba97ba0416d1c7d87da77d3f%2Frafael_aghayev_var1.png%3Ffm%3Dwebp&w=640&q=75'} alt="" />
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ 
                            boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.5)',
                            animation: 'bounce1 3s infinite'
                        }}
                        className={`bg-[#0c1b29b3] transition ease-in-out min-w-[480px] w-[240px] top-[37rem] right-[4rem] absolute z-20 rounded-3xl`}
                    >
                        <div
                            className="w-full px-5 pt-5 pb-6 min-h-[270px] h-full z-20" data-stat-box="">
                            <iframe className="chartjs-hidden-iframe block overflow-hidden border-0 m-0 inset-0 h-full w-full absolute z-[-1]" tabIndex={'-1'}>
                            </iframe>
                            <span className="text-gray-300 font-medium text-xs">REVENUE IN LAST 20 DAYS</span>
                            <span className="text-green-500 text-sm flex items-center gap-1 font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" height=".75em" viewBox="0 0 384 512" fill="currentColor">
                                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
                                </svg>
                                12%
                            </span>
                            <div className="my-1 flex items-end">
                                <p className="text-2xl font-semibold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">$8343.98</p>
                            </div>
                            <div className="chart-container mt-1">
                                <canvas id="bar-chart-grouped" style={{ height: '68px', maxHeight: '68px' }}></canvas>
                            </div>

                            <div className="flex justify-between items-center mt-4 pb-2">
                                <span className="text-gray-400 font-medium text-xs uppercase">sales</span>
                                <span className="text-gray-400 font-medium text-xs uppercase">amount</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center mt-1">
                                        <span className="text-gray-300 font-semibold text-[11px]">Shopify Sales</span>
                                        <span className="text-gray-300 font-medium text-xs">3</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-0.5 dark:bg-gray-700 mt-1">
                                        <div className="bg-gray-200/50 h-0.5 rounded-full w-[35%]"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center mt-1">
                                        <span className="text-gray-300 font-semibold text-[11px]">Training Sales</span>
                                        <span className="text-gray-300 font-medium text-xs">3</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-0.5 dark:bg-gray-700 mt-1">
                                    <div className="bg-gray-200/50 h-0.5 rounded-full w-[35%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className='cursor-pointer duration-200 ease-in-out transition shadow-2xl w-[160px] rounded-full bg-[#0c1b29b3] absolute left-0 right-0 mx-auto bottom-0 flex flex-col gap-1 z-40 px-[10px] py-[6px]'
                        style={{ 
                            animation: 'bounce2 3s infinite',
                            boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.5)',
                        }}
                        
                    >
                        <div className='flex flex-row items-center gap-2 py-[2px]'>
                            <Image alt="" src={'/icons/fire.png'} width={'20'} height={'20'} />
                            <div className='flex flex-col items-start'>
                                <h2 className='text-[12px] font-semibold tracking-tight text-white'>TopRated Trainer</h2>
                            </div>
                        </div>
                    </div>

                    <div className='absolute top-0 left-0 right-0 flex flex-col gap-1 items-start mt-8 max-w-[35rem] mx-auto'>
                        <h4 className='text-[42px] font-bold text-gray-100'>Steadfast and Swift</h4>
                        <p className='richtext text-[18px] text-gray-400'>PeakFit connects trainers with clients in an instant, empowering you to showcase your skills and passion while fostering relationships that inspire lasting transformations.</p>
                    </div>
                </main>
            </SmoothScroll>
        </div>
    )
}