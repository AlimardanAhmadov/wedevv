'use client'

import { useEffect, useState } from 'react';
import classes from './Coaches.module.css';
import Navbar from '../components/Home/Navbar/Navbar';
import Link from '@/node_modules/next/link';
import Footer from '../components/Footer/Footer';
import AnimationSVG from '../components/SvgAnimation/SvgAnimation';
import LoadingSpinner from "../components/Loader/LoadingSpinner";

import { useRouter } from 'next/navigation';


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

    const [spinningBubble, setSpinningBubble] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleClick = (id:any) => {
        setSpinningBubble(id);
        setTimeout(() => {
            setSpinningBubble(null);
        }, 500);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const bubbles = [
        { path: "/images/lottie/lottie-fitness.json", id: 'lottie-fitness' },
        { path: "/images/lottie/lottie-boxing.json", id: 'lottie-boxing' },
        { path: "/images/lottie/lottie-swimming.json", id: 'lottie-swimming' },
        { path: "/images/lottie/lottie-cycling.json", id: 'lottie-cycling' },
        { path: "/images/lottie/lottie-crossfit.json", id: 'lottie-crossfit' },
        { path: "/images/lottie/lottie-weight-lifting.json", id: 'lottie-weight-lifting' },
        { path: "/images/lottie/lottie-pilates.json", id: 'lottie-pilates' },
        { path: "/images/lottie/lottie-aerobics.json", id: 'lottie-aerobics' },
        { path: "/images/lottie/lottie-strength-training.json", id: 'lottie-strength-training' },
        { path: "/images/lottie/lottie-basketball.json", id: 'lottie-basketball' },
    ];

    return (
        <>  
            {loader && <LoadingSpinner />}
            <section className={`absolute top-0 left-0 right-0`}></section>
            <Navbar />
            <div className={`mx-auto relative h-[570px] max-w-[79rem] top-[10.2rem]`}>
                <div className={`${classes.bannerInfo} text-center relative flex flex-col items-center justify-center mx-auto`}>
                    <div className="my-5 h-1.5 w-11 rounded-lg" style={{ backgroundColor: 'rgb(245, 212, 92)' }}></div>
                    <h1 className={`uppercase`}>our coaches</h1>
                </div>
                {/* <div className='flex items-center justify-between w-full'> */}
                    {/* {bubbles.map((bubble) => (
                        <div
                            key={bubble.id}
                            className={`${classes.bannerBubble} transition ease-in-out duration-300 cursor-pointer ${spinningBubble === bubble.id ? classes['spin-animation'] : ''}`}
                            onClick={() => handleClick(bubble.id)}
                        >
                            <AnimationSVG path={bubble.path} containerId={bubble.id} />
                        </div>
                    ))} */}
                <div className={`flex w-full flex-wrap gap-[1.3rem] mt-8`}>
                    <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                        <div className="flex items-center justify-between pr-4 pb-2 py-2">
                            <h1 className="text-sm font-bold text-white">Strength Training</h1>
                        </div>
                    </div>
                    <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                        <div className="flex items-center justify-between pr-4 pb-2 py-2">
                            <h1 className="text-sm font-bold text-white">CrossFit</h1>
                        </div>
                    </div>
                    <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                        <div className="flex items-center justify-between pr-4 pb-2 py-2">
                            <h1 className="text-sm font-bold text-white">Yoga</h1>
                        </div>
                    </div>
                    <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                        <div className="flex items-center justify-between pr-4 pb-2 py-2">
                            <h1 className="text-sm font-bold text-white">Swimming</h1>
                        </div>
                    </div>
                    <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                        <div className="flex items-center justify-between pr-4 pb-2 py-2">
                            <h1 className="text-sm font-bold text-white">Cycling</h1>
                        </div>
                    </div>
                    <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                        <div className="flex items-center justify-between pr-4 pb-2 py-2">
                            <h1 className="text-sm font-bold text-white">Aerobics</h1>
                        </div>
                    </div>
                    <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                        <div className="flex items-center justify-between pr-4 pb-2 py-2">
                            <h1 className="text-sm font-bold text-white">Dance Fitness</h1>
                        </div>
                    </div>
                    <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                        <div className="flex items-center justify-between pr-4 pb-2 py-2">
                            <h1 className="text-sm font-bold text-white">Weight Training</h1>
                        </div>
                    </div>
                    <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                        <div className="flex items-center justify-between pr-4 pb-2 py-2">
                            <h1 className="text-sm font-bold text-white">Group Classes</h1>
                        </div>
                    </div>
                    <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                        <div className="flex items-center justify-between pr-4 pb-2 py-2">
                            <h1 className="text-sm font-bold text-white">Endurance Training</h1>
                        </div>
                    </div>
                    <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                        <div className="flex items-center justify-between pr-4 pb-2 py-2">
                            <h1 className="text-sm font-bold text-white">Cardiovascular Exercise</h1>
                        </div>
                    </div>
                    <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                        <div className="flex items-center justify-between pr-4 pb-2 py-2">
                            <h1 className="text-sm font-bold text-white">Flexibility and Stretching</h1>
                        </div>
                    </div>
                    <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                        <div className="flex items-center justify-between pr-4 pb-2 py-2">
                            <h1 className="text-sm font-bold text-white">Pilates</h1>
                        </div>
                    </div>
                    <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                        <div className="flex items-center justify-between pr-4 pb-2 py-2">
                            <h1 className="text-sm font-bold text-white">Boxing and Martial Arts</h1>
                        </div>
                    </div>
                    <div className={`${classes.categoryCard} max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 shadow`}>
                        <div className="flex items-center justify-between pr-4 pb-2 py-2">
                            <h1 className="text-sm font-bold text-white">Rehabilitation and Physical Therapy Exercises</h1>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
            <div className={`${classes.coachList} max-w-[79rem] top-[10rem] relative mx-auto`}>
                <div className='flex items-center flex-row-reverse gap-2 pb-8' style={{ justifyContent: 'start' }}>
                    <div className={`${classes.dropdown} relative`}>
                        <button 
                            className="flex items-center justify-between gap-1 block px-5 py-4 mt-2 bg-white rounded-lg dark:bg-gray-800 border-1 border-gray-800"
                            onClick={handleDropdownToggle}
                        >
                            <span className="mx-1 uppercase font-bold">ALL</span>
                            <svg className='w-5 h-5' fill='rgb(119, 147, 194)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className='w-full rounded-lg dark:bg-gray-800 px-6 py-7 absolute'>
                                <ul className={`${classes.sortList} flex flex-col gap-2.5 transition ease-in-out duration-300`}>
                                    <li className='uppercase text-sm text-gray-300 cursor-pointer transition ease-in-out duration-300'>ALL</li>
                                    <li className='uppercase text-sm text-gray-300 cursor-pointer transition ease-in-out duration-300'>Price</li>
                                    <li className='uppercase text-sm text-gray-300 cursor-pointer transition ease-in-out duration-300'>Ratings</li>
                                    <li className='uppercase text-sm text-gray-300 cursor-pointer transition ease-in-out duration-300'>Availability</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="pr-2">
                        <input type="text" placeholder="SEARCH BY NAME" className="font-bold block px-5 py-4 mt-2 bg-white border-2 border-gray-400 rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:outline-none" />
                    </div>
                </div>
                <div className={`pt-8 grid grid-cols-1 gap-y-0 px-0 lg:grid-cols-4 lg:gap-x-12`}>
                    <Link href={'/coach/john-doe'} className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4Wbg1gCdBzPngrwBLXR3PC%2Fae3133ce380ac58682e603b535c80742%2FJesus_Lopez_HS.png%3Ffm%3Dwebp&w=640&q=75" alt="John Doe" />

                        <div className="py-3 text-center dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">John Doe</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"MMA trainer"</span>
                        </div>
                    </Link>
                    <Link href={'/coach/john-doe'} className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6qO1sPv9uMOYnF72JLPnVj%2F367f3c427b6c10bb328e292fba77143d%2Fkaye-asesor-head-image.png%3Ffm%3Dwebp&w=640&q=75" alt="Kaye Asesor" />

                        <div className="py-3 text-center dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">Kaye Asesor</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"Women's Strawweight"</span>
                        </div>
                    </Link>
                    <Link href={'/coach/john-doe'} className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4Wbg1gCdBzPngrwBLXR3PC%2Fae3133ce380ac58682e603b535c80742%2FJesus_Lopez_HS.png%3Ffm%3Dwebp&w=640&q=75" alt="John Doe" />

                        <div className="py-3 text-center dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">John Doe</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"MMA trainer"</span>
                        </div>
                    </Link>
                    <Link href={'/coach/john-doe'} className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6qO1sPv9uMOYnF72JLPnVj%2F367f3c427b6c10bb328e292fba77143d%2Fkaye-asesor-head-image.png%3Ffm%3Dwebp&w=640&q=75" alt="Kaye Asesor" />

                        <div className="py-3 text-center dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">Kaye Asesor</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"Women's Strawweight"</span>
                        </div>
                    </Link>
                    <Link href={'/coach/john-doe'} className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4Wbg1gCdBzPngrwBLXR3PC%2Fae3133ce380ac58682e603b535c80742%2FJesus_Lopez_HS.png%3Ffm%3Dwebp&w=640&q=75" alt="John Doe" />

                        <div className="py-3 text-center dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">John Doe</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"MMA trainer"</span>
                        </div>
                    </Link>
                    <Link href={'/coach/john-doe'} className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6qO1sPv9uMOYnF72JLPnVj%2F367f3c427b6c10bb328e292fba77143d%2Fkaye-asesor-head-image.png%3Ffm%3Dwebp&w=640&q=75" alt="Kaye Asesor" />

                        <div className="py-3 text-center dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">Kaye Asesor</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"Women's Strawweight"</span>
                        </div>
                    </Link>
                    <Link href={'/coach/john-doe'} className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4Wbg1gCdBzPngrwBLXR3PC%2Fae3133ce380ac58682e603b535c80742%2FJesus_Lopez_HS.png%3Ffm%3Dwebp&w=640&q=75" alt="John Doe" />

                        <div className="py-3 text-center dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">John Doe</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"MMA trainer"</span>
                        </div>
                    </Link>
                    <Link href={'/coach/john-doe'} className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6qO1sPv9uMOYnF72JLPnVj%2F367f3c427b6c10bb328e292fba77143d%2Fkaye-asesor-head-image.png%3Ffm%3Dwebp&w=640&q=75" alt="Kaye Asesor" />

                        <div className="py-3 text-center dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">Kaye Asesor</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"Women's Strawweight"</span>
                        </div>
                    </Link>
                    <Link href={'/coach/john-doe'} className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4Wbg1gCdBzPngrwBLXR3PC%2Fae3133ce380ac58682e603b535c80742%2FJesus_Lopez_HS.png%3Ffm%3Dwebp&w=640&q=75" alt="John Doe" />

                        <div className="py-3 text-center dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">John Doe</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"MMA trainer"</span>
                        </div>
                    </Link>
                    <Link href={'/coach/john-doe'} className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6qO1sPv9uMOYnF72JLPnVj%2F367f3c427b6c10bb328e292fba77143d%2Fkaye-asesor-head-image.png%3Ffm%3Dwebp&w=640&q=75" alt="Kaye Asesor" />

                        <div className="py-3 text-center dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">Kaye Asesor</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"Women's Strawweight"</span>
                        </div>
                    </Link>
                    <Link href={'/coach/john-doe'} className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4Wbg1gCdBzPngrwBLXR3PC%2Fae3133ce380ac58682e603b535c80742%2FJesus_Lopez_HS.png%3Ffm%3Dwebp&w=640&q=75" alt="John Doe" />

                        <div className="py-3 text-center dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">John Doe</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"MMA trainer"</span>
                        </div>
                    </Link>
                    <Link href={'/coach/john-doe'} className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6qO1sPv9uMOYnF72JLPnVj%2F367f3c427b6c10bb328e292fba77143d%2Fkaye-asesor-head-image.png%3Ffm%3Dwebp&w=640&q=75" alt="Kaye Asesor" />

                        <div className="py-3 text-center dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">Kaye Asesor</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"Women's Strawweight"</span>
                        </div>
                    </Link>
                </div>
                <div className={`w-full text-center mt-4`}>
                    <button className="rounded-full w-40 text-center py-3 mt-6 bg-white hover:bg-gray-300 text-black text-sm font-bold uppercase transition duration-300 ease-in-out">
                        show more
                    </button>
                </div>
            </div>
            <div className={`${classes.coachesFooter} relative`}>
                <Footer />
            </div>
        </>
    );
}
