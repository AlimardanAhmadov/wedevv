'use client'

import classes from './Categories.module.css';
import Link from '@/node_modules/next/link';
import LoadingSpinner from "../components/Loader/LoadingSpinner";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function Coaches() {
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
            <div className={`${classes.breadcrumbs} mx-auto flex items-center py-4 pt-20 overflow-x-auto whitespace-nowrap`}>
                <Link href="/" className="text-gray-600 text-sm font-bold dark:text-gray-200 uppercase">
                    Home
                </Link>

                <span className="mx-5 text-gray-500 text-xl dark:text-gray-300">
                    /
                </span>

                <a href="#" className="text-gray-500 uppercase cursor-not-allowed">
                    categories
                </a>
            </div>

            <div className={`${classes.categories} mx-auto pt-8 grid grid-cols-1 gap-y-0 px-0 lg:grid-cols-6`}>
                <Link href={'/categories-trainers'} className={`${classes.categoryCard} cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                    <div className="flex items-center justify-between pr-4 pb-2 py-2">
                        <h1 className="text-sm font-bold text-white">Strength Training</h1>
                    </div>
                </Link>
                <Link href={'/categories-trainers'} className={`${classes.categoryCard} cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                    <div  className="flex items-center justify-between pr-4 pb-2 py-2">
                        <h1 className="text-sm font-bold text-white">CrossFit</h1>
                    </div>
                </Link>
                <Link href={'/categories-trainers'} className={`${classes.categoryCard} cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                    <div className="flex items-center justify-between pr-4 pb-2 py-2">
                        <h1 className="text-sm font-bold text-white">Yoga</h1>
                    </div>
                </Link>
                <Link href={'/categories-trainers'} className={`${classes.categoryCard} cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                    <div className="flex items-center justify-between pr-4 pb-2 py-2">
                        <h1 className="text-sm font-bold text-white">Swimming</h1>
                    </div>
                </Link>
                <Link href={'/categories-trainers'} className={`${classes.categoryCard} cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                    <div className="flex items-center justify-between pr-4 pb-2 py-2">
                        <h1 className="text-sm font-bold text-white">Cycling</h1>
                    </div>
                </Link>
                <Link href={'/categories-trainers'} className={`${classes.categoryCard} cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                    <div className="flex items-center justify-between pr-4 pb-2 py-2">
                        <h1 className="text-sm font-bold text-white">Aerobics</h1>
                    </div>
                </Link>
                <Link href={'/categories-trainers'} className={`${classes.categoryCard} cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                    <div className="flex items-center justify-between pr-4 pb-2 py-2">
                        <h1 className="text-sm font-bold text-white">Dance Fitness</h1>
                    </div>
                </Link>
                <Link href={'/categories-trainers'} className={`${classes.categoryCard} cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                    <div className="flex items-center justify-between pr-4 pb-2 py-2">
                        <h1 className="text-sm font-bold text-white">Weight Training</h1>
                    </div>
                </Link>
                <Link href={'/categories-trainers'} className={`${classes.categoryCard} cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                    <div className="flex items-center justify-between pr-4 pb-2 py-2">
                        <h1 className="text-sm font-bold text-white">HIIT</h1>
                    </div>
                </Link>
                <Link href={'/categories-trainers'} className={`${classes.categoryCard} cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                    <div className="flex items-center justify-between pr-4 pb-2 py-2">
                        <h1 className="text-sm font-bold text-white">Group Classes</h1>
                    </div>
                </Link>
                <Link href={'/categories-trainers'} className={`${classes.categoryCard} cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                    <div className="flex items-center justify-between pr-4 pb-2 py-2">
                        <h1 className="text-sm font-bold text-white">Endurance Training</h1>
                    </div>
                </Link>
                <Link href={'/categories-trainers'} className={`${classes.categoryCard} cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                    <div className="flex items-center justify-between pr-4 pb-2 py-2">
                        <h1 className="text-sm font-bold text-white">Cardiovascular Exercise</h1>
                    </div>
                </Link>
                <Link href={'/categories-trainers'} className={`${classes.categoryCard} cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                    <div className="flex items-center justify-between pr-4 pb-2 py-2">
                        <h1 className="text-sm font-bold text-white">Flexibility and Stretching</h1>
                    </div>
                </Link>
                <Link href={'/categories-trainers'} className={`${classes.categoryCard} cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                    <div className="flex items-center justify-between pr-4 pb-2 py-2">
                        <h1 className="text-sm font-bold text-white">Pilates</h1>
                    </div>
                </Link>
                <Link href={'/categories-trainers'} className={`${classes.categoryCard} cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                    <div className="flex items-center justify-between pr-4 pb-2 py-2">
                        <h1 className="text-sm font-bold text-white">Functional Training</h1>
                    </div>
                </Link>
                <Link href={'/categories-trainers'} className={`${classes.categoryCard} cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                    <div className="flex items-center justify-between pr-4 pb-2 py-2">
                        <h1 className="text-sm font-bold text-white">Boxing and Martial Arts</h1>
                    </div>
                </Link>
                <Link href={'/categories-trainers'} className={`${classes.categoryCard} cursor-pointer max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                    <div className="flex items-center justify-between pr-4 pb-2 py-2">
                        <h1 className="text-sm font-bold text-white">Rehabilitation and Physical Therapy Exercises</h1>
                    </div>
                </Link>
            </div>
        </>
    )
}