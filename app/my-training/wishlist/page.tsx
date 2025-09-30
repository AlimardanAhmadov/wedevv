'use client';

import { useEffect, useState } from 'react';
import Link from '@/node_modules/next/link';
import Navbar from '../../components/Home/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import classes from '../../my-training/all-trainings/MyTraining.module.css';
import LoadingSpinner from '@/app/components/Loader/LoadingSpinner';
import { useRouter } from 'next/navigation';


export default function Wishlist() {
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
            <section className={`${classes.myTrainingBanner} absolute left-0 right-0`}></section>
            <div className={`h-[270px] absolute top-0 left-0 w-full`}></div>
            <div className={`max-w-[79rem] relative top-[7rem] mx-auto flex flex-row items-center justify-between`}>
                <div className='flex flex-col gap-1 w-full'>
                    <div className={`text-[2.2rem] font-bold`}>
                        Wishlist
                    </div>
                    <div className={`mx-auto relative top-[18px] flex flex-row items-start w-full`}>
                        <div className="flex items-center gap-3 w-[280px]">
                            <Link href={'/my-training/training-tools'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs ">Learning tools</Link>
                            <Link href={'/my-training/all-trainings'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs">All trainings</Link>
                            <Link href={'/my-training/wishlist'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs" style={{ backgroundColor: 'rgb(107, 55, 216)' }}>Wishlist</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-start justify-start relative top-[15rem] mx-auto max-w-[79rem]'>
                <div className='flex flex-row items-center gap-4 mb-[1.5rem]'>
                    <button className='border-2 border-gray-300 rounded-full w-8 h-8 flex flex-col items-center justify-center'>
                        <svg width={'13'} height={'13'} fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                        </svg>
                    </button>
                    <button className='border-2 border-gray-300 rounded-full w-8 h-8 flex flex-col items-center justify-center'>
                        <svg width={'13'} height={'13'} fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                        </svg>
                    </button>
                </div>

                <div className='grid grid-cols-1 gap-y-0 px-0 lg:grid-cols-4 lg:gap-4 w-full'>
                    <div className={`p-5 bg-[#0c1b29] w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <div className='flex flex-col gap-1 mx-auto'>
                            <div className='flex flex-row justify-between pb-5'>
                                <div className="text-left">
                                    <a href="#" className="block font-bold text-gray-200 text-md max-w-[200px] whitespace-nowrap overflow-hidden" role="link">Arkell Charles</a>
                                    <span className="text-gray-400 font-bold text-sm">Yoga</span>
                                    <h3 className='text-xs pt-1 text-gray-200 mt-2'>11 Jul, 2024</h3>
                                </div>
                                <div className='flex flex-col items-end justify-between'>
                                    <button className='bg-transparent p-1 rounded-xl flex flex-col justify-between items-center dark:bg-gray-800 hover:bg-gray-700 transition ease-in-out'>
                                        <svg width={'14'} height={'14'} fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                        </svg>
                                    </button>
                                    <div className='dark:border-gray-400 border w-14 px-2 py-1 flex flex-col justify-between items-center text-xs rounded-xl'>
                                        $300
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row gap-5 items-center pt-3'>
                                <button className='dark:bg-gray-700 hover:bg-gray-600 transition duration-200 ease-in-out px-3 py-1.5 rounded-2xl text-gray-200 font-semibold text-xs'>Hire</button>
                                <button className='bg-transparent duration-200 transition ease-in-out text-gray-500 hover:text-gray-300 text-xs font-semibold'>Remove</button>
                            </div>
                        </div>
                    </div>
                    <div className={`p-5 bg-[#0c1b29] w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <div className='flex flex-col gap-1 mx-auto'>
                            <div className='flex flex-row justify-between pb-5'>
                                <div className="text-left">
                                    <a href="#" className="block font-bold text-gray-200 text-md max-w-[200px] whitespace-nowrap overflow-hidden" role="link">Arkell Charles</a>
                                    <span className="text-gray-400 font-bold text-sm">Yoga</span>
                                    <h3 className='text-xs pt-1 text-gray-200 mt-2'>11 Jul, 2024</h3>
                                </div>
                                <div className='flex flex-col items-end justify-between'>
                                    <button className='bg-transparent p-1 rounded-xl flex flex-col justify-between items-center dark:bg-gray-800'>
                                        <svg width={'14'} height={'14'} fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                        </svg>
                                    </button>
                                    <div className='dark:border-gray-400 border w-14 px-2 py-1 flex flex-col justify-between items-center text-xs rounded-xl'>
                                        $300
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row gap-5 items-center pt-3'>
                                <button className='dark:bg-gray-700 hover:bg-gray-600 transition duration-200 ease-in-out px-3 py-1.5 rounded-2xl text-gray-200 font-semibold text-xs'>Hire</button>
                                <button className='bg-transparent duration-200 transition ease-in-out text-gray-500 hover:text-gray-300 text-xs font-semibold'>Remove</button>
                            </div>
                        </div>
                    </div>
                    <div className={`p-5 bg-[#0c1b29] w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <div className='flex flex-col gap-1 mx-auto'>
                            <div className='flex flex-row justify-between pb-5'>
                                <div className="text-left">
                                    <a href="#" className="block font-bold text-gray-200 text-md max-w-[200px] whitespace-nowrap overflow-hidden" role="link">Arkell Charles</a>
                                    <span className="text-gray-400 font-bold text-sm">Yoga</span>
                                    <h3 className='text-xs pt-1 text-gray-200 mt-2'>11 Jul, 2024</h3>
                                </div>
                                <div className='flex flex-col items-end justify-between'>
                                    <button className='bg-transparent p-1 rounded-xl flex flex-col justify-between items-center dark:bg-gray-800 hover:bg-gray-700 transition ease-in-out'>
                                        <svg width={'14'} height={'14'} fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                        </svg>
                                    </button>
                                    <div className='dark:border-gray-400 border w-14 px-2 py-1 flex flex-col justify-between items-center text-xs rounded-xl'>
                                        $300
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row gap-5 items-center pt-3'>
                                <button className='dark:bg-gray-700 hover:bg-gray-600 transition duration-200 ease-in-out px-3 py-1.5 rounded-2xl text-gray-200 font-semibold text-xs'>Hire</button>
                                <button className='bg-transparent duration-200 transition ease-in-out text-gray-500 hover:text-gray-300 text-xs font-semibold'>Remove</button>
                            </div>
                        </div>
                    </div>
                    <div className={`p-5 bg-[#0c1b29] w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <div className='flex flex-col gap-1 mx-auto'>
                            <div className='flex flex-row justify-between pb-5'>
                                <div className="text-left">
                                    <a href="#" className="block font-bold text-gray-200 text-md max-w-[200px] whitespace-nowrap overflow-hidden" role="link">Arkell Charles</a>
                                    <span className="text-gray-400 font-bold text-sm">Yoga</span>
                                    <h3 className='text-xs pt-1 text-gray-200 mt-2'>11 Jul, 2024</h3>
                                </div>
                                <div className='flex flex-col items-end justify-between'>
                                    <button className='bg-transparent p-1 rounded-xl flex flex-col justify-between items-center dark:bg-gray-800 hover:bg-gray-700 transition ease-in-out'>
                                        <svg width={'14'} height={'14'} fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/>
                                        </svg>
                                    </button>
                                    <div className='dark:border-gray-400 border w-14 px-2 py-1 flex flex-col justify-between items-center text-xs rounded-xl'>
                                        $300
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row gap-5 items-center pt-3'>
                                <button className='dark:bg-gray-700 hover:bg-gray-600 transition duration-200 ease-in-out px-3 py-1.5 rounded-2xl text-gray-200 font-semibold text-xs'>Hire</button>
                                <button className='bg-transparent duration-200 transition ease-in-out text-gray-500 hover:text-gray-300 text-xs font-semibold'>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${classes.myTraining} relative`}>
                <Footer />
            </div>
        </>
    )
}
