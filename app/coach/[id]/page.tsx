'use client'

import { useEffect, useState } from 'react';
import classes from '../../coach/Coach.module.css';
import Link from '@/node_modules/next/link';
import Navbar from '../../components/Home/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import LoadingSpinner from '@/app/components/Loader/LoadingSpinner';

import { useRouter } from 'next/navigation';


export default function Coach() {
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
            <section className={`${classes.bannerCover} absolute left-0 right-0`}></section>
            <div className={`${classes.overlay} absolute top-0 left-0 w-full h-full`}></div>
            <div className={`${classes.banner} mx-auto flex flex-row items-center justify-between`}>
                <div className='flex flex-col gap-1'>
                    <div className={`flex items-center py-4 overflow-x-auto whitespace-nowrap`}>
                        <Link href="/" className="text-gray-600 text-sm font-bold dark:text-gray-200 uppercase">
                            CATEGORIES
                        </Link>

                        <span className="mx-2 text-gray-500 text-xl dark:text-gray-300">
                            <svg fill='#fff' width={'12'} height={'12'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
                            </svg>
                        </span>

                        <a href="#" className="text-gray-500 uppercase cursor-not-allowed">
                            MMA
                        </a>
                    </div>
                    <div className='flex w-80 gap-4 relative mb-3'>
                        <div className={`${classes.bannerSubtitle} uppercase`}>
                            MMA Trainer
                        </div>
                        <div className={`${classes.bannerSubtitle} uppercase`}>
                            community ranking
                        </div>
                        <div className={`${classes.communityRanking} absolute`}>
                            3
                        </div>
                    </div>
                    <div className={`${classes.bannerTitle} uppercase`}>
                        john doe
                    </div>
                    <div className={`${classes.location} flex items-center gap-2`}>
                        <img className='w-8 h-8' src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" alt="USA" />
                        <div>USA</div>
                    </div>
                    <div className={`${classes.services} flex items-center gap-2`}>
                        <div className='uppercase'>
                            MMA
                        </div>
                        <div className='uppercase'>
                            Wrestling
                        </div>
                    </div>
                    <div className={`${classes.ratingStars} flex items-center gap-1`}>
                        <span className='mr-1'>5.0</span>
                        <img width="20" height="20" src="/icons/rating-star.png" alt="star--v1"/>
                        <img width="20" height="20" src="/icons/rating-star.png" alt="star--v1"/>
                        <img width="20" height="20" src="/icons/rating-star.png" alt="star--v1"/>
                        <img width="20" height="20" src="/icons/rating-star.png" alt="star--v1"/>
                        <img width="20" height="20" src="/icons/rating-star.png" alt="star--v1"/>

                        <a className='text-sm ml-1 underline'>(2124234 ratings)</a>
                    </div>
                    <button style={{ width: '200px' }} className='cursor-pointer flex items-center gap-2 justify-center text-xs rounded-full text-center w-40 py-4 mt-4 bg-white hover:bg-gray-300 text-black font-bold uppercase transition duration-300 ease-in-out'>
                        <svg width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                        </svg>
                        Featured Video
                    </button>
                </div>
                <div className={`${classes.profileImg} shadow-lg`}>
                    <div className={`${classes.coachCover} absolute`}>
                        <img src="/icons/family-smoke-7.png" alt="Family Stroke" />
                    </div>
                    <img src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4oaZ0g2KQTezYZXoKkhJfo%2F997a6929369200ba3d8d3613b2c85dc6%2Fraymond-daniels-body-image.png%3Ffm%3Dwebp&w=640&q=75" alt="" />
                </div>
            </div>

            <div className={`${classes.bio} relative flex flex-col gap-2 mx-auto`}>
                <h2 className='uppercase'>OVERVIEW</h2>
                <div>
                    The First Karate Combat Lightweight Champ: Edgars Skrivers has trained Shotokan Karate since the age of 6 years old. He's a renowned athlete in the sport of Karate having acquired many titles such as European Champion, Shotokan World Champion, and many times Latvian and Baltic champion. Edgars has balanced his athletic feats with a passion for education having a attained a degree in Sports Physiotherapy and currently does strength and conditioning coaching. As champion, he calls his electrifying performances in The Pit, "The Bearslayer Entertainment Show."
                </div>

                <div className={`${classes.coachFeatures} relative pt-2 grid grid-cols-1 gap-y-0 px-0 lg:grid-cols-4`}>
                    <a className="flex items-center px-6 gap-4 font-bold rounded-md trasition duration-300 ease-in-out text-white cursor-default">
                        <div>
                            <svg width={'20'} height={'20'} fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/>
                            </svg>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-md uppercase'>Exclusive Content</span>
                        </div>
                    </a>
                    <a className="flex items-center px-6 gap-4 font-bold rounded-md trasition duration-300 ease-in-out text-white cursor-default">
                        <div>
                            <svg width={'20'} height={'20'} fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"/>
                            </svg>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-md uppercase'>Booking</span>
                        </div>
                    </a>
                    <a className="flex items-center px-6 gap-4 font-bold rounded-md trasition duration-300 ease-in-out text-white cursor-default">
                        <div>
                            <svg width={'20'} height={'20'} fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                            </svg>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-md uppercase'>Content Library</span>
                        </div>
                    </a>
                    <a className="flex items-center px-6 gap-4 font-bold rounded-md trasition duration-300 ease-in-out text-white cursor-default">
                        <div>
                            <svg width={'20'} height={'20'} fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"/>
                            </svg>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-md uppercase'>Merchandise</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className={`${classes.servicesSection} relative flex flex-col gap-2 mx-auto`}>
                <h2 className='uppercase'>services offered</h2>
                <div className={`${classes.servicesGrid} relative pt-2 grid grid-cols-1 gap-y-0 px-0 lg:grid-cols-4`}>
                    <a className="flex items-center gap-4 px-7 font-bold rounded-md trasition duration-300 ease-in-out cursor-pointer">
                        Personalized Training Programs
                    </a>
                    <a className="flex items-center gap-4 px-7 font-bold rounded-md trasition duration-300 ease-in-out cursor-pointer">
                        Technique and Skill Development
                    </a>
                    <a className="flex items-center gap-4 px-7 font-bold rounded-md trasition duration-300 ease-in-out cursor-pointer">
                        Conditioning and Strength Training
                    </a>
                    <a className="flex items-center gap-4 px-7 font-bold rounded-md trasition duration-300 ease-in-out cursor-pointer">
                        Fight Preparation and Strategy
                    </a>
                    <a className="flex items-center gap-4 px-7 font-bold rounded-md trasition duration-300 ease-in-out cursor-pointer">
                        Nutrition and Diet Planning
                    </a>
                    <a className="flex items-center gap-4 px-7 font-bold rounded-md trasition duration-300 ease-in-out cursor-pointer">
                        Mental Coaching and Motivation
                    </a>
                    <a className="flex items-center gap-4 px-7 font-bold rounded-md trasition duration-300 ease-in-out cursor-pointer">
                        Rehabilitation and Injury Prevention
                    </a>
                    <a className="flex items-center gap-4 px-7 font-bold rounded-md trasition duration-300 ease-in-out cursor-pointer">
                        Youth and Beginner Programs
                    </a>
                    <a className="flex items-center gap-4 px-7 font-bold rounded-md trasition duration-300 ease-in-out cursor-pointer">
                        Group Classes and Seminars
                    </a>
                    <a className="flex items-center gap-4 px-7 font-bold rounded-md trasition duration-300 ease-in-out cursor-pointer">
                        Self-Defense Training
                    </a>
                    <a className="flex items-center gap-4 px-7 font-bold rounded-md trasition duration-300 ease-in-out cursor-pointer">
                        Virtual Coaching and Online Programs
                    </a>
                </div>
            </div>

            <div className={`${classes.coachMerch} relative mx-auto`}>
                <h2 className='uppercase'>JOHN DOE's SHOP</h2>

                <div className="pt-8 grid grid-cols-1 gap-y-0 px-0 lg:grid-cols-4 lg:gap-x-12">
                    <Link href={''} className={`${classes.coachCard} cursor-pointer flex flex-col w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-55" src="https://image.spreadshirtmedia.com/image-server/v1/productTypes/812/views/,appearanceId=2,modelId=115,crop=detail,width=700,height=700,backgroundColor=ffffff.webp" alt="T-shirt" />
                        <div className="py-3 px-4 text-left dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase max-w-[200px] whitespace-nowrap overflow-hidden" role="link">Men's Premium T-Shirt</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">Spreadshirt 812</span>
                            <h3 className='text-lg pt-1'>$14.87</h3>
                        </div>
                    </Link>
                    <Link href={'/coach/john-doe'} className={`${classes.coachCard} cursor-pointer flex flex-col w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-55" src="https://image.spreadshirtmedia.com/image-server/v1/productTypes/752/views/1/appearances/231,modelId=506,crop=detail,width=700,height=700,backgroundColor=ffffff.webp" alt="T-shirt" />

                        <div className="py-3 px-4 text-left dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase max-w-[200px] whitespace-nowrap overflow-hidden" role="link">Women's Flowy Tank Top</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">Spreadshirt 812</span>
                            <h3 className='text-lg pt-1'>$14.87</h3>
                        </div>
                    </Link>
                    <Link href={'/coach/john-doe'} className={`${classes.coachCard} cursor-pointer flex flex-col w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-55" src="https://image.spreadshirtmedia.com/image-server/v1/productTypes/813/views/,appearanceId=566,crop=detail,width=700,height=700,backgroundColor=ffffff.webp" alt="T-shirt" />
                        <div className="py-3 px-4 text-left dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase max-w-[200px] whitespace-nowrap overflow-hidden" role="link">Women's Premium T-Shirt</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">Spreadshirt 812</span>
                            <h3 className='text-lg pt-1'>$14.87</h3>
                        </div>
                    </Link>
                    <Link href={'/coach/john-doe'} className={`${classes.coachCard} cursor-pointer flex flex-col w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-55" src="https://image.spreadshirtmedia.com/image-server/v1/productTypes/875/views/1/appearances/648,modelId=1687,crop=detail,width=700,height=700,backgroundColor=ffffff.webp" alt="T-shirt" />

                        <div className="py-3 px-4 text-left dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase max-w-[200px] whitespace-nowrap overflow-hidden" role="link">Men's Premium Long Sleeve</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">Spreadshirt 812</span>
                            <h3 className='text-lg pt-1'>$14.87</h3>
                        </div>
                    </Link>
                </div>
            </div>

            <div id="reviews" className={`${classes.reviews} relative mx-auto`}>
                <h2 className='uppercase'>reviews</h2>
                <div className={`${classes.reviewsList} flex flex-col gap-6 items-start`}>
                    <div className="px-5 rounded-lg">
                        <div className='flex items-center gap-4 text-lg'>
                            <img width="50" height="50" src="https://img.icons8.com/color/50/circled-user-male-skin-type-3--v1.png" alt="circled-user-male-skin-type-3--v1"/>
                            <div className='flex flex-col gap-1 mb-1' style={{ lineHeight: '29px' }}>
                                Stefan B.
                                <div className={`flex items-center gap-1`}>
                                    <img width="15" height="15" src="/icons/rating-star.png" alt="star--v1"/>
                                    <img width="15" height="15" src="/icons/rating-star.png" alt="star--v1"/>
                                    <img width="15" height="15" src="/icons/rating-star.png" alt="star--v1"/>
                                    <img width="15" height="15" src="/icons/rating-star.png" alt="star--v1"/>
                                    <img width="15" height="15" src="/icons/rating-star.png" alt="star--v1"/>

                                    <span className='text-xs text-gray-500 ml-2'>8 months ago</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${classes.reviewContent} mx-auto mt-2 font-semibold text-gray-300`}>
                            The course is excellent, it is a useful. course since I wanted to develop Mixed Martial Arts from an interest to a sport I consider from my sports, I trained as young Volley ball and Swimming to the extent that makes me swim excellent and play Volley ball with techniques. Thank you for the course.
                        </div>
                    </div>
                    <div className="px-5 rounded-lg">
                        <div className='flex items-center gap-4 text-lg'>
                            <img width="50" height="50" src="https://img.icons8.com/color/50/circled-user-female-skin-type-1-2--v1.png" alt="circled-user-female-skin-type-1-2--v1"/>
                            <div className='flex flex-col gap-1 mb-1' style={{ lineHeight: '29px' }}>
                                Jane R.
                                <div className={`flex items-center gap-1`}>
                                    <img width="15" height="15" src="/icons/rating-star.png" alt="star--v1"/>
                                    <img width="15" height="15" src="/icons/rating-star.png" alt="star--v1"/>
                                    <img width="15" height="15" src="/icons/rating-star.png" alt="star--v1"/>
                                    <img width="15" height="15" src="/icons/rating-star.png" alt="star--v1"/>
                                    <img width="15" height="15" src="/icons/rating-star.png" alt="star--v1"/>

                                    <span className='text-xs text-gray-500 ml-2'>8 months ago</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${classes.reviewContent} mx-auto mt-2 font-semibold text-gray-300`}>
                            The course is excellent, it is a useful. course since I wanted to develop Mixed Martial Arts from an interest to a sport I consider from my sports, I trained as young Volley ball and Swimming to the extent that makes me swim excellent and play Volley ball with techniques. Thank you for the course.
                        </div>
                    </div>
                    <div className="px-5 rounded-lg">
                        <div className='flex items-center gap-4 text-lg'>
                            <img width="50" height="50" src="https://img.icons8.com/color/50/circled-user-female-skin-type-1-2--v1.png" alt="circled-user-female-skin-type-1-2--v1"/>
                            <div className='flex flex-col gap-1 mb-1' style={{ lineHeight: '29px' }}>
                                Jane R.
                                <div className={`flex items-center gap-1`}>
                                    <img width="15" height="15" src="/icons/rating-star.png" alt="star--v1"/>
                                    <img width="15" height="15" src="/icons/rating-star.png" alt="star--v1"/>
                                    <img width="15" height="15" src="/icons/rating-star.png" alt="star--v1"/>
                                    <img width="15" height="15" src="/icons/rating-star.png" alt="star--v1"/>
                                    <img width="15" height="15" src="/icons/rating-star.png" alt="star--v1"/>

                                    <span className='text-xs text-gray-500 ml-2'>8 months ago</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${classes.reviewContent} mx-auto mt-2 font-semibold text-gray-300`}>
                            The course is excellent, it is a useful. course since I wanted to develop Mixed Martial Arts from an interest to a sport I consider from my sports, I trained as young Volley ball and Swimming to the extent that makes me swim excellent and play Volley ball with techniques. Thank you for the course.
                        </div>
                    </div>
                </div>
                <div className={`w-full text-center mt-12`}>
                    <button className="rounded-full w-40 text-center py-3 mt-6 bg-white hover:bg-gray-300 text-black text-sm font-bold uppercase transition duration-300 ease-in-out">
                        show more
                    </button>
                </div>
            </div>
            
            <div className={`${classes.relatedCoaches} relative mx-auto`}>
                <h2 className='uppercase'>related coaches</h2>
                <div className="pt-8 grid grid-cols-1 gap-y-0 px-0 lg:grid-cols-4 lg:gap-x-12">
                    <Link href={''} className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4Wbg1gCdBzPngrwBLXR3PC%2Fae3133ce380ac58682e603b535c80742%2FJesus_Lopez_HS.png%3Ffm%3Dwebp&amp;w=640&amp;q=75" alt="John Doe" />
                        <div className="py-3 text-center dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">John Doe</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"MMA trainer"</span>
                        </div>
                    </Link>
                    <Link href={''} className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6qO1sPv9uMOYnF72JLPnVj%2F367f3c427b6c10bb328e292fba77143d%2Fkaye-asesor-head-image.png%3Ffm%3Dwebp&w=640&q=75" alt="Kaye Asesor" />
                        <div className="py-3 text-center dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">Kaye Asesor</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"Women's Strawweight"</span>
                        </div>
                    </Link>
                    <Link href={''} className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4Wbg1gCdBzPngrwBLXR3PC%2Fae3133ce380ac58682e603b535c80742%2FJesus_Lopez_HS.png%3Ffm%3Dwebp&amp;w=640&amp;q=75" alt="John Doe" />
                        <div className="py-3 text-center dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">John Doe</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"MMA trainer"</span>
                        </div>
                    </Link>
                    <Link href={''} className={`${classes.coachCard} cursor-pointer flex flex-col justify-end w-full max-w-xs overflow-hidden rounded-lg shadow-lg transition ease-in-out duration-300`}>
                        <img className="object-contain w-full h-40" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6qO1sPv9uMOYnF72JLPnVj%2F367f3c427b6c10bb328e292fba77143d%2Fkaye-asesor-head-image.png%3Ffm%3Dwebp&w=640&q=75" alt="Kaye Asesor" />
                        <div className="py-3 text-center dark:bg-gray-900">
                            <a href="#" className="block font-bold text-gray-800 text-sm dark:text-white uppercase" role="link">Kaye Asesor</a>
                            <span className="text-gray-700 dark:text-gray-200 uppercase font-bold">"Women's Strawweight"</span>
                        </div>
                    </Link>
                </div>
                <div className={`w-full text-center mt-12`}>
                    <button className="cursor-pointer rounded-md w-40 text-center py-3 mt-6 bg-white hover:bg-gray-300 text-black text-sm font-bold uppercase transition duration-300 ease-in-out">
                        all coaches
                    </button>
                </div>
            </div>

            <div className={`relative top-[-47rem]`}>
                <Footer />
            </div>
        </>
    )
}
