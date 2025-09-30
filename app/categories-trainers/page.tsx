'use client'

import classes from './CategoriesTrainers.module.css';
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

                <Link href="/categories" className="text-gray-600 text-sm font-bold dark:text-gray-200 uppercase">
                    Categories
                </Link>

                <span className="mx-5 text-gray-500 text-xl dark:text-gray-300">
                    /
                </span>

                <p className="text-gray-500 uppercase cursor-not-allowed">
                    Swimming
                </p>
            </div>
            <div className={`${classes.coachList} mx-auto pt-8 grid grid-cols-1 gap-y-0 px-0 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-12`}>
                <div className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                    <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4Wbg1gCdBzPngrwBLXR3PC%2Fae3133ce380ac58682e603b535c80742%2FJesus_Lopez_HS.png%3Ffm%3Dwebp&w=640&q=75" alt="John Doe" />

                    <div className="py-3 text-center dark:bg-gray-900">
                        <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">John Doe</a>
                        <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"MMA trainer"</span>
                    </div>
                </div>
                <div className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                    <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6qO1sPv9uMOYnF72JLPnVj%2F367f3c427b6c10bb328e292fba77143d%2Fkaye-asesor-head-image.png%3Ffm%3Dwebp&w=640&q=75" alt="Kaye Asesor" />

                    <div className="py-3 text-center dark:bg-gray-900">
                        <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">Kaye Asesor</a>
                        <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"Women's Strawweight"</span>
                    </div>
                </div>
                <div className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                    <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4Wbg1gCdBzPngrwBLXR3PC%2Fae3133ce380ac58682e603b535c80742%2FJesus_Lopez_HS.png%3Ffm%3Dwebp&w=640&q=75" alt="John Doe" />

                    <div className="py-3 text-center dark:bg-gray-900">
                        <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">John Doe</a>
                        <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"MMA trainer"</span>
                    </div>
                </div>
                <div className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                    <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6qO1sPv9uMOYnF72JLPnVj%2F367f3c427b6c10bb328e292fba77143d%2Fkaye-asesor-head-image.png%3Ffm%3Dwebp&w=640&q=75" alt="Kaye Asesor" />

                    <div className="py-3 text-center dark:bg-gray-900">
                        <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">Kaye Asesor</a>
                        <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"Women's Strawweight"</span>
                    </div>
                </div>
                <div className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                    <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4Wbg1gCdBzPngrwBLXR3PC%2Fae3133ce380ac58682e603b535c80742%2FJesus_Lopez_HS.png%3Ffm%3Dwebp&w=640&q=75" alt="John Doe" />

                    <div className="py-3 text-center dark:bg-gray-900">
                        <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">John Doe</a>
                        <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"MMA trainer"</span>
                    </div>
                </div>
                <div className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                    <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6qO1sPv9uMOYnF72JLPnVj%2F367f3c427b6c10bb328e292fba77143d%2Fkaye-asesor-head-image.png%3Ffm%3Dwebp&w=640&q=75" alt="Kaye Asesor" />

                    <div className="py-3 text-center dark:bg-gray-900">
                        <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">Kaye Asesor</a>
                        <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"Women's Strawweight"</span>
                    </div>
                </div>
                <div className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                    <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4Wbg1gCdBzPngrwBLXR3PC%2Fae3133ce380ac58682e603b535c80742%2FJesus_Lopez_HS.png%3Ffm%3Dwebp&w=640&q=75" alt="John Doe" />

                    <div className="py-3 text-center dark:bg-gray-900">
                        <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">John Doe</a>
                        <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"MMA trainer"</span>
                    </div>
                </div>
                <div className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                    <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6qO1sPv9uMOYnF72JLPnVj%2F367f3c427b6c10bb328e292fba77143d%2Fkaye-asesor-head-image.png%3Ffm%3Dwebp&w=640&q=75" alt="Kaye Asesor" />

                    <div className="py-3 text-center dark:bg-gray-900">
                        <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">Kaye Asesor</a>
                        <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"Women's Strawweight"</span>
                    </div>
                </div>
                <div className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                    <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4Wbg1gCdBzPngrwBLXR3PC%2Fae3133ce380ac58682e603b535c80742%2FJesus_Lopez_HS.png%3Ffm%3Dwebp&w=640&q=75" alt="John Doe" />

                    <div className="py-3 text-center dark:bg-gray-900">
                        <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">John Doe</a>
                        <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"MMA trainer"</span>
                    </div>
                </div>
                <div className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                    <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6qO1sPv9uMOYnF72JLPnVj%2F367f3c427b6c10bb328e292fba77143d%2Fkaye-asesor-head-image.png%3Ffm%3Dwebp&w=640&q=75" alt="Kaye Asesor" />

                    <div className="py-3 text-center dark:bg-gray-900">
                        <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">Kaye Asesor</a>
                        <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"Women's Strawweight"</span>
                    </div>
                </div>
                <div className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                    <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4Wbg1gCdBzPngrwBLXR3PC%2Fae3133ce380ac58682e603b535c80742%2FJesus_Lopez_HS.png%3Ffm%3Dwebp&w=640&q=75" alt="John Doe" />

                    <div className="py-3 text-center dark:bg-gray-900">
                        <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">John Doe</a>
                        <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"MMA trainer"</span>
                    </div>
                </div>
                <div className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                    <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6qO1sPv9uMOYnF72JLPnVj%2F367f3c427b6c10bb328e292fba77143d%2Fkaye-asesor-head-image.png%3Ffm%3Dwebp&w=640&q=75" alt="Kaye Asesor" />

                    <div className="py-3 text-center dark:bg-gray-900">
                        <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">Kaye Asesor</a>
                        <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"Women's Strawweight"</span>
                    </div>
                </div>
            </div>
        </>
    )
}