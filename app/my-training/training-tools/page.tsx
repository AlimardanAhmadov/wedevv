"use client";

import { useEffect, useState } from 'react';
import Link from '@/node_modules/next/link';
import Navbar from '../../components/Home/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import myTrainingClasses from '../../my-training/all-trainings/MyTraining.module.css';
import LoadingSpinner from '@/app/components/Loader/LoadingSpinner';

import { useRouter } from 'next/navigation';


export default function TrainingTools() {
    const router = useRouter();
    const [loader, setLoader] = useState(false);
    const [step, setStep] = useState(1);
    const [selectedTraining, setSelectedTraining] = useState('');
    const [isToolsModalOpen, setIsToolsModalOpen] = useState(false);
    const [time, setTime] = useState('');
    const [error, setError] = useState('');

    const handleIsToolsOpen = () => {
        setIsToolsModalOpen(!isToolsModalOpen);
    };

    const handleSelection = (training: any) => {
        setSelectedTraining(training);
    };

    const [selectedFrequences, setSelectedFrequencies] = useState([]);
    const frequencies = ['Daily', 'Weekly', 'Monthly', 'Once'];

    const handleFrequenceChange = (frequency: string) => {
        setSelectedFrequencies((prevSelectedFrequencies) => {
            if (prevSelectedFrequencies.includes(frequency)) {
                return prevSelectedFrequencies.filter((s) => s !== frequency);
            } else {
                return [...prevSelectedFrequencies, frequency];
            }
        });
    };

    const durations = ['5 Min', '10 Min', '20 Min', '1 hr'];
  
    const validateTime = (value: any) => {
        if (value.length === 2 && !value.includes(':')) {
            value = value + ':';
        }
    
        const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
    
        if (timePattern.test(value)) {
            setError('');
        } else if (value.length === 5) {
            setError('Invalid time format. Please use HH:MM.');
        }
    
        setTime(value);
    };

    const handleNext = () => {
        setStep((prevStep) => Math.min(prevStep + 1, 3));
    };

    const handleBack = () => {
        setStep((prevStep) => Math.max(prevStep - 1, 1));
    };
  
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
            <section className={`${myTrainingClasses.myTrainingBanner} absolute left-0 right-0`}></section>
            <div className={`h-[270px] absolute top-0 left-0 w-full`}></div>
            <div className={`max-w-[79rem] relative top-[7rem] mx-auto flex flex-row items-center justify-between`}>
                <div className='flex flex-col gap-1 w-full'>
                    <div className={`text-[2.2rem] font-bold`}>
                        Training Reminders
                    </div>
                    <div className={`mx-auto relative top-[18px] flex flex-row items-start w-full`}>
                        <div className="flex items-center gap-3 w-[280px]">
                            <Link href={'/my-training/training-tools'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs" style={{ backgroundColor: 'rgb(107, 55, 216)' }}>Learning tools</Link>
                            <Link href={'/my-training/all-trainings'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs">All trainings</Link>
                            <Link href={'/my-training/wishlist'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs">Wishlist</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`z-10 px-[1.2rem] py-[1.3rem] rounded-lg mx-auto max-w-[79rem] dark:bg-gray-800 flex flex-row items-start gap-4 relative top-[16rem]`}>
                <svg width={'34'} height={'34'} fill={'#804fe7'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/>
                </svg>
                <div className='flex flex-col items-start gap-[5px]'>
                    <h5 className='font-semibold text-[15px]'>Calendar events</h5>
                    <span className='text-gray-300 text-[14px]'>Don’t want to schedule time blocks? Set a learning reminder to get notifications from the PeakFit calendar.</span>
                    <span className='text-gray-500 text-[12px]'>Requires Google Calendar, Apple Calendar, or Outlook</span>

                    <div className='mt-4 flex flex-row items-center gap-3'>
                        <button onClick={handleIsToolsOpen} className='flex flex-row items-center bg-[#6B37D8] whitespace-nowrap duration-200 transition ease-in-out w-full justify-center items-center gap-2 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-md text-xs'>
                            Schedule Training Time
                            <svg width={'15'} height={'15'} fill={'#fff'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`z-10 p-[1.3rem] rounded-lg mx-auto max-w-[79rem] dark:bg-gray-800 flex flex-col items-start gap-4 relative top-[18rem]`}>
                <div className='flex flex-col items-start gap-[10px] w-full'>
                    <h5 className='font-semibold text-[17px] flex items-center justify-between w-full'>
                        Training reminder
                        <button>
                            <svg width={'17'} height={'17'} fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                            </svg>
                        </button>
                    </h5>
                    <div className='flex flex-row items-center gap-4 mt-1'>
                        <div className='flex flex-row items-center gap-2'>
                            <svg width={'18'} height={'18'} fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                            </svg>
                            <span className='text-gray-300 text-[15px] font-semibold'>5:46 AM</span>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <svg width={'18'} height={'18'} fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"/>
                            </svg>
                            <span className='text-gray-300 text-[15px] font-semibold'>September 24, 2024</span>
                        </div>
                    </div>

                    <div className='flex flex-row items-center gap-2 mt-2'>
                        <img width="26" height="26" src="https://img.icons8.com/color/26/google-logo.png" alt="google-logo"/>
                        <span className='text-[13px] text-gray-200'>Added to Google Calendar</span>
                    </div>
                </div>
            </div>

            {isToolsModalOpen && (
                <>
                    <button style={{ backgroundColor: 'rgb(0 0 0 / 0.6)' }} className='z-10 fixed inset-0 transition-opacity w-full h-full dark:bg-black-800 bg-opacity-60 border-none focus:outline-none cursor-default'></button>
                    <div className={`m-auto z-20 fixed inset-y-0 m-auto flex max-w-full flex-col shadow-xl translate-x-0 w-full`}>
                        <div className={`bg-[#0c1b29] w-[480px] m-auto rounded-xl p-7 flex flex-col justify-start items-start`}>
                            <h3 className='text-xl font-semibold text-start w-full'>Create an event</h3>

                            <span className="text-gray-400 text-[12px] mt-1">Step {step} of 3</span>

                            {step === 3 && (
                                <>
                                    <h2 className="text-sm font-semibold mt-6">
                                        Add to calendar
                                    </h2>
                                    <div className={`mt-3 grid grid-cols-1 gap-y-0 px-0 lg:grid-cols-3 lg:gap-3`}>
                                        <button
                                            className={`w-[110px] rounded-full border-2 text-xs font-semibold py-2.5 px-4 flex flex gap-2 items-center justify-center transition duration-200 ease-in-out`}
                                        >
                                            <img width="20" height="20" src="https://img.icons8.com/color/20/google-logo.png" alt="google-logo"/>
                                            <span>
                                                Google
                                            </span>
                                        </button>
                                        <button
                                            className={`w-[110px] rounded-full border-2 text-xs font-semibold py-2.5 px-4 flex flex gap-2 items-center justify-center transition duration-200 ease-in-out`}
                                        >
                                            <img width="20" height="20" src="https://img.icons8.com/office/20/mac-os.png" alt="mac-os"/>
                                            <span>
                                                Apple
                                            </span>
                                        </button>
                                        <button
                                            className={`w-[110px] rounded-full border-2 text-xs font-semibold py-2.5 px-4 flex flex gap-2 items-center justify-center transition duration-200 ease-in-out`}
                                        >
                                            <img width="20" height="20" src="https://img.icons8.com/color/20/ms-outlook.png" alt="ms-outlook"/>
                                            <span>
                                                Outlook
                                            </span>
                                        </button>
                                    </div>

                                    <span className='text-xs text-gray-400 mt-4'>Follow all calendar prompts and be sure to save before proceeding. Apple and Outlook will generate an .ics file, which you can open to add the event to your calendar.</span>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <h2 className="text-sm font-semibold mt-6">
                                        Frequency
                                    </h2>
                                    <div className={`mt-3 grid grid-cols-1 gap-y-0 px-0 lg:grid-cols-5 lg:gap-2`}>
                                        {frequencies.map((frequency, index) => (
                                            <button
                                                key={index}
                                                className={`rounded-full border-2 ${selectedFrequences.includes(frequency) ? 'border-purple-500' : 'border-gray-400'} text-xs font-semibold py-2.5 px-4 flex flex gap-2 items-center justify-center transition duration-200 ease-in-out`}
                                                onClick={() => handleFrequenceChange(frequency)}
                                                style={{
                                                    backgroundColor: selectedFrequences.includes(frequency) ? 'rgb(99 105 114)' : '',
                                                    borderColor: selectedFrequences.includes(frequency) ? 'rgb(31 41 55 / 1)' : ''
                                                }}
                                            >
                                                <span>
                                                    {frequency}
                                                </span>
                                            </button>
                                        ))}
                                    </div>

                                    <h2 className="text-sm font-semibold mt-6">
                                        Duration
                                    </h2>

                                    <div className={`mt-3 grid grid-cols-1 gap-y-0 px-0 lg:grid-cols-5 lg:gap-2`}>
                                        {durations.map((duration, index) => (
                                            <button
                                                key={index}
                                                className={`rounded-full border-2 ${selectedFrequences.includes(duration) ? 'border-purple-500' : 'border-gray-400'} text-xs font-semibold py-2.5 px-4 flex flex gap-2 items-center justify-center transition duration-200 ease-in-out`}
                                                onClick={() => handleFrequenceChange(duration)}
                                                style={{
                                                    backgroundColor: selectedFrequences.includes(duration) ? 'rgb(99 105 114)' : '',
                                                    borderColor: selectedFrequences.includes(duration) ? 'rgb(31 41 55 / 1)' : ''
                                                }}
                                            >
                                                <span>
                                                    {duration}
                                                </span>
                                            </button>
                                        ))}
                                    </div>

                                    <div className="flex flex-col w-auto mt-4">
                                        <label htmlFor="" className="text-sm font-semibold">
                                            Time
                                        </label>
                                        <input
                                            id="time"
                                            className={`bg-[#08121b] w-[80px] font-bold block text-sm px-3 py-[8px] mt-2 border-2 dark:border-gray-700 rounded-lg dark:placeholder-gray-600 focus:border-[#6B37D8] focus:outline-none focus:ring-opacity-0 ${
                                            error ? 'border-red-500' : ''
                                            }`}
                                            type="text"
                                            placeholder="HH:MM"
                                            maxLength={5}
                                            value={time}
                                            onChange={(e) => validateTime(e.target.value)}
                                        />
                                        {error && <p className="text-red-400 text-xs font-semibold mt-2">{error}</p>}
                                    </div>
                                </>
                            )}

                            {step === 1 && (
                                <>
                                    <div className="flex flex-col w-full mt-4">
                                        <label htmlFor="" className="text-sm font-semibold">
                                            Name
                                        </label>
                                        <input className="bg-[#08121b] w-full font-bold block text-sm px-3 py-[8px] mt-2 border-2 dark:border-gray-700 rounded-lg dark:placeholder-gray-600 focus:border-[#6B37D8] focus:outline-none focus:ring-opacity-0" type="text" />
                                    </div>

                                    <div className='flex flex-col gap-2 w-full mt-4'>
                                        <h1 className="text-sm font-semibold">
                                            Training Course
                                        </h1>
                                        <button
                                            onClick={() => handleSelection('Strength and Conditioning: Building Power and Endurance')}
                                            className={`dark:bg-gray-800 rounded-lg shadow-lg px-5 py-3.5 w-full ${
                                                selectedTraining === 'Strength and Conditioning: Building Power and Endurance' ? 'border-[#6B37D8]' : 'border-gray-600'
                                            }`}
                                        >
                                            <div className="flex items-center mr-4 mb-2 mt-2">
                                                <input
                                                    id="Strength and Conditioning: Building Power and Endurance"
                                                    type="radio"
                                                    name="radio"
                                                    className="hidden"
                                                    checked={selectedTraining === 'Strength and Conditioning: Building Power and Endurance'}
                                                    onChange={() => handleSelection('Strength and Conditioning: Building Power and Endurance')}
                                                />
                                                <label htmlFor="Strength and Conditioning: Building Power and Endurance" className="flex items-center cursor-pointer text-sm font-semibold">
                                                    <span className={`w-5 h-5 inline-block mr-2 rounded-full flex-no-shrink border border-gray-600 ${
                                                        selectedTraining === 'Strength and Conditioning: Building Power and Endurance' ? 'border-[#6B37D8]' : 'border-gray-600'
                                                    }`}></span>
                                                    <p className='text-[13px] font-semibold max-w-[350px] truncate text-gray-300'>
                                                        Strength and Conditioning: Building Power and Endurance
                                                    </p>
                                                </label>
                                            </div>
                                        </button>
                                        <button
                                            onClick={() => handleSelection('High-Intensity Interval Training (HIIT) for Fat Loss and Muscle Gain')}
                                            className={`dark:bg-gray-800 rounded-lg shadow-lg px-5 py-3.5 w-full ${
                                                selectedTraining === 'Strength and Conditioning: Building Power and Endurance' ? 'border-[#6B37D8]' : 'border-gray-600'
                                            }`}
                                        >
                                            <div className="flex items-center mr-4 mb-2 mt-2">
                                                <input
                                                    id="High-Intensity Interval Training (HIIT) for Fat Loss and Muscle Gain"
                                                    type="radio"
                                                    name="radio"
                                                    className="hidden"
                                                    checked={selectedTraining === 'High-Intensity Interval Training (HIIT) for Fat Loss and Muscle Gain'}
                                                    onChange={() => handleSelection('High-Intensity Interval Training (HIIT) for Fat Loss and Muscle Gain')}
                                                />
                                                <label htmlFor="High-Intensity Interval Training (HIIT) for Fat Loss and Muscle Gain" className="flex items-center cursor-pointer text-sm font-semibold">
                                                    <span className={`w-5 h-5 inline-block mr-2 rounded-full flex-no-shrink border border-gray-600 ${
                                                        selectedTraining === 'High-Intensity Interval Training (HIIT) for Fat Loss and Muscle Gain' ? 'border-[#6B37D8]' : 'border-gray-600'
                                                    }`}></span>
                                                    <p className='text-[13px] font-semibold max-w-[350px] truncate text-gray-300'>
                                                        High-Intensity Interval Training (HIIT) for Fat Loss and Muscle Gain
                                                    </p>
                                                </label>
                                            </div>
                                        </button>
                                    </div>
                                </>
                            )}
                            <div className="flex flex-row items-center gap-3 mt-6 w-full">
                                {step === 1 
                                ? 
                                <button
                                    onClick={handleIsToolsOpen}
                                    className={`w-full bg-gray-800 hover:bg-gray-700 transition duration-200 ease-in-out px-4 py-2 inline-flex items-center rounded-full border text-sm font-semibold leading-5 transition ease-in-out focus:outline-none disabled:pointer-events-none disabled:opacity-40 border-transparent text-primary-action-text justify-center shadow-sm ring-primary-focus ring-offset-2 focus-visible:outline-none focus-visible:ring-2`}
                                >
                                    Cancel
                                </button>
                                : 
                                <button
                                    onClick={handleBack}
                                    disabled={step === 1}
                                    className={`w-full bg-gray-800 hover:bg-gray-700 transition duration-200 ease-in-out px-4 py-2 inline-flex items-center rounded-full border text-sm font-semibold leading-5 transition ease-in-out focus:outline-none disabled:pointer-events-none disabled:opacity-40 border-transparent bg-primary-action text-primary-action-text hover:bg-primary-action-hover justify-center shadow-sm ring-primary-focus ring-offset-2 focus-visible:outline-none focus-visible:ring-2 ${step === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    Back
                                </button>
                                }

                                <button
                                    onClick={handleNext}
                                    className="bg-[#6B37D8] w-full px-4 py-2 inline-flex items-center rounded-full border text-sm font-semibold leading-5 transition duration-200 ease-in-out focus:outline-none disabled:pointer-events-none disabled:opacity-40 border-transparent bg-primary-action text-primary-action-text hover:bg-primary-action-hover justify-center shadow-sm ring-primary-focus ring-offset-2 focus-visible:outline-none focus-visible:ring-2"
                                >
                                    {step === 3 ? 'Done' : 'Next'}
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <div className={`${myTrainingClasses.myTraining} relative`}>
                <Footer />
            </div>
        </>
    )
}
