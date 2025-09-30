'use client';

import React, { useState, useRef } from 'react';
import Link from '@/node_modules/next/link';
import Navbar from '../../../components/Home/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import classes from '../../../my-training/all-trainings/MyTraining.module.css';
import TrainingDetails from '@/app/components/TrainingDetails/TrainingDetails';
import AnimationSVG from '@/app/components/SvgAnimation/SvgAnimation';

export default function TrainingList() {
    const [loading, setLoading] = useState(false);
    const [showTrainingDetails, setShowTrainingDetails] = useState(false);
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
    const data = [
        {
            id: 1,
            imageSrc: 'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/dbkuvgc4zh2pner6sewp/film-and-edit-yoga-5-minutes-videos.png',
            title: '3D Lurge',
            type: 'HIGH PRIORITY',
            time: '5:46',
            comment: '16',
        },
        {
            id: 2,
            imageSrc: 'https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/dbkuvgc4zh2pner6sewp/film-and-edit-yoga-5-minutes-videos.png',
            title: '3D Lurge',
            type: 'HIGH PRIORITY',
            time: '5:46',
            comment: '16',
        },
    ];

    const handleDropdownToggle = (index: any) => {
        setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleTrainingList = () => {
        // setLoading(true);
        // setTimeout(() => {
        //     setLoading(false);
        setShowTrainingDetails(true);
        // }, 1500);
    };

    const handleCloseTrainingDetails = () => {
        setShowTrainingDetails(false);
    };

    return (
        <>
            <Navbar />

            <div className={`h-[270px] absolute top-0 left-0 w-full`}></div>
            <div className={`max-w-[79rem] relative top-[7rem] mx-auto flex flex-row items-center justify-between`}>
                <div className='flex flex-col gap-1 w-full'>
                    <div className={`mx-auto relative top-[18px] flex flex-row items-start w-full`}>
                        <div className="flex items-center gap-3 w-[280px]">
                            <Link href={'/my-training/dashboard/activity'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs">Activity</Link>
                            <Link href={'/my-training/dashboard/training'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs" style={{ backgroundColor: 'rgb(107, 55, 216)' }}>Training</Link>
                            <Link href={'/my-training/dashboard/health-hub'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs">Health hub</Link>
                            <Link href={'/my-training/dashboard/media'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs">Media</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`z-10 px-[1.5rem] py-[1.6rem] rounded-2xl mx-auto max-w-[79rem] dark:bg-gray-800 flex flex-row items-start gap-4 relative top-[10rem] mb-8`}>
                <div className='flex flex-col gap-4 items-start w-full'>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-[13px] font-[600] text-start text-gray-200 uppercase flex flex-row items-center gap-2'>
                            yoga & stretching training
                            <div className='px-2 py-[2px] bg-gray-700 rounded-md'>
                                2
                            </div>
                        </h3>
                        <span className='text-gray-400 text-[12px] font-semibold'>Strength Training</span>
                    </div>
                    {data.map((item, index) => (
                        <div className={`p-5 bg-[#0c1b29] w-full rounded-2xl shadow-lg transition ease-in-out duration-300 relative`}>
                            <div className='flex flex-col gap-1 mx-auto'>
                                <div className='flex flex-row justify-between'>
                                    <div className='flex flex-row items-center gap-6'>
                                        <div className="w-14 h-14 transition ease-in-out rounded-lg duration-300 shadow-3xl">
                                            <img className="h-full object-cover rounded-lg shadow-xl" src="https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/dbkuvgc4zh2pner6sewp/film-and-edit-yoga-5-minutes-videos.png" alt="I will teach live online private yoga"/>
                                        </div>
                                        <div className="text-left">
                                            <span onClick={handleTrainingList} className="cursor-pointer flex flex-row items-center gap-4 font-bold text-gray-200 text-md max-w-[200px] whitespace-nowrap overflow-hidden" role="link">
                                                3D Lurge
                                                <button style={{ backgroundColor: 'rgb(97 44 204)', lineHeight: '12px' }} className='px-3 text-[9px] py-1 flex flex-col justify-center items-center uppercase font-semibold rounded-full'>High Priority</button>
                                            </span>
                                            <div className="mt-[0.4rem] flex flex-row items-center gap-4">
                                                <div className='flex flex-row items-center text-gray-200 font-medium text-[13px]'>
                                                    <svg className="play-btn small" width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    <span style={{ lineHeight: '11px' }}>5:46</span>
                                                </div>
                                                <div className='flex flex-row items-end gap-1 px-2 py-1 rounded-full bg-gray-800 text-gray-200 font-medium text-[10px]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#e8eaed">
                                                        <path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
                                                    </svg>
                                                    16
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end justify-between'>
                                        <button onClick={() => handleDropdownToggle(index)} className='bg-transparent p-1 rounded-xl flex flex-col justify-between items-center dark:bg-gray-800 hover:bg-gray-700 duration-200 transition ease-in-out'>
                                            <svg width={'14'} height={'14'} fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                            </svg>
                                        </button>
                                        {openDropdownIndex === index && (
                                            <div className='w-[120px] absolute right-[.8rem] top-[2.6rem] rounded-xl mt-2 dark:bg-gray-800 px-4 py-3 absolute shadow-lg z-[20]'>
                                                <ul className={`overflow-auto max-h-[250px] flex flex-col gap-2 transition ease-in-out duration-300`}>
                                                    <li className='hover:text-gray-100 rounded-lg text-sm text-gray-300 cursor-pointer transition ease-in-out duration-300 flex flex-row items-center gap-1'>
                                                        <p> Report </p>
                                                    </li>
                                                    <li className='hover:text-gray-100 rounded-lg text-sm text-gray-300 cursor-pointer transition ease-in-out duration-300'>
                                                        <p> Notes </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className={`z-10 px-[1.5rem] py-[1.6rem] rounded-2xl mx-auto max-w-[79rem] dark:bg-gray-800 flex flex-row items-start gap-4 relative top-[10rem] mb-4`}>
                <div className='flex flex-col gap-4 items-start w-full'>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-[13px] font-[600] text-start text-gray-200 uppercase flex flex-row items-center gap-2'>
                            yoga & stretching training
                            <div className='px-2 py-[2px] bg-gray-700 rounded-md'>
                                2
                            </div>
                        </h3>
                        <span className='text-gray-400 text-[12px] font-semibold'>Strength Training</span>
                    </div>
                    {data.map((item, index) => (
                        <div className={`p-5 bg-[#0c1b29] w-full rounded-2xl shadow-lg transition ease-in-out duration-300 relative`}>
                            <div className='flex flex-col gap-1 mx-auto'>
                                <div className='flex flex-row justify-between'>
                                    <div className='flex flex-row items-center gap-6'>
                                        <div className="w-14 h-14 transition ease-in-out rounded-lg duration-300 shadow-3xl">
                                            <img className="h-full object-cover rounded-lg shadow-xl" src="https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/dbkuvgc4zh2pner6sewp/film-and-edit-yoga-5-minutes-videos.png" alt="I will teach live online private yoga"/>
                                        </div>
                                        <div className="text-left">
                                            <span onClick={handleTrainingList} className="cursor-pointer flex flex-row items-center gap-4 font-bold text-gray-200 text-md max-w-[200px] whitespace-nowrap overflow-hidden" role="link">
                                                3D Lurge
                                                <button style={{ backgroundColor: 'rgb(97 44 204)', lineHeight: '12px' }} className='px-3 text-[9px] py-1 flex flex-col justify-center items-center uppercase font-semibold rounded-full'>High Priority</button>
                                            </span>
                                            <div className="mt-[0.4rem] flex flex-row items-center gap-4">
                                                <div className='flex flex-row items-center text-gray-200 font-medium text-[13px]'>
                                                    <svg className="play-btn small" width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                    <span style={{ lineHeight: '11px' }}>5:46</span>
                                                </div>
                                                <div className='flex flex-row items-end gap-1 px-2 py-1 rounded-full bg-gray-800 text-gray-200 font-medium text-[10px]'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#e8eaed">
                                                        <path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
                                                    </svg>
                                                    16
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end justify-between'>
                                        <button onClick={() => handleDropdownToggle(index)} className='bg-transparent p-1 rounded-xl flex flex-col justify-between items-center dark:bg-gray-800 hover:bg-gray-700 duration-200 transition ease-in-out'>
                                            <svg width={'14'} height={'14'} fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                            </svg>
                                        </button>
                                        {openDropdownIndex === index && (
                                            <div className='w-[120px] absolute right-[.8rem] top-[2.6rem] rounded-xl mt-2 dark:bg-gray-800 px-4 py-3 absolute shadow-lg z-[20]'>
                                                <ul className={`overflow-auto max-h-[250px] flex flex-col gap-2 transition ease-in-out duration-300`}>
                                                    <li className='hover:text-gray-100 rounded-lg text-sm text-gray-300 cursor-pointer transition ease-in-out duration-300 flex flex-row items-center gap-1'>
                                                        <p> Report </p>
                                                    </li>
                                                    <li className='hover:text-gray-100 rounded-lg text-sm text-gray-300 cursor-pointer transition ease-in-out duration-300'>
                                                        <p> Notes </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`${classes.myTraining} relative`}>
                <Footer />
            </div>

            {showTrainingDetails && <TrainingDetails show={showTrainingDetails} onClose={handleCloseTrainingDetails} />}
        </>
    )
}
