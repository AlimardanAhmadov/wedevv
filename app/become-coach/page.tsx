'use client'

import classes from './BecomeCoach.module.css';
import Link from '@/node_modules/next/link';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import LoadingSpinner from "../components/Loader/LoadingSpinner";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


export default function BecomeCoach() {
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
            <section className={`${classes.bannerCover} absolute top-0 left-0 right-0`}>
            </section>
            <div className={`${classes.banner} mx-auto`}>
                <div className='flex flex-col gap-8'>
                    <div className={`${classes.bannerSubtitle} uppercase`}>
                        highly trained & professional coaches
                    </div>
                    <div className={`${classes.bannerTitle} uppercase`}>
                        Lead Strong
                    </div>
                    <div className='flex items-center gap-4'>
                        <button className="rounded-full w-60 py-4 bg-white hover:bg-gray-300 text-black text-xs font-bold uppercase transition duration-300 ease-in-out">
                            become a coach
                        </button>
                    </div>
                </div>
            </div>
            
            <div className={`${classes.coachTypeSectionSubtitle} relative mx-auto`}>
                <div>
                    High-Performance & Comfortable Coaching Platform
                </div>
            </div>
            
            <div className={`${classes.coachTypeSectionTitle} uppercase relative mx-auto`} style={{ top: '40rem' }}>
                <div>
                    Crafted for Every Coaching Trailblazer
                </div>
            </div>

            <div className={`${classes.coachTypeList} relative mx-auto flex gap-4`}>
                <div className={`${classes.coachTypes} flex items-center rounded-xl relative`} style={{ maxWidth: '100%', width: '100%' }}>
                    <div>
                        <img src="/images/deadlifting-man.jpeg" alt="Deadlifting Man" />
                    </div>
                    <div className={`${classes.overlay} absolute top-0 left-0 w-full h-full`}></div>
                    <div className={`absolute flex flex-col justify-end h-full p-10 gap-1`}>
                        <h1 className='uppercase'>weight lifting</h1>
                        <a className='uppercase underline'>check out now</a>
                    </div>
                </div>
                <div className={`${classes.coachTypes} flex items-center rounded-xl relative`} style={{ maxWidth: '36rem', width: '36rem' }}>
                    <div>
                        <img src="/images/yoga-woman.jpeg" alt="Yoga Woman" />
                    </div>
                    <div className={`${classes.overlay} absolute top-0 left-0 w-full h-full`}></div>
                    <div className={`absolute flex flex-col justify-end h-full p-10 gap-1`}>
                        <h1 className='uppercase'>yoga</h1>
                        <a className='uppercase underline'>check out now</a>
                    </div>
                </div>
            </div>
            <div className={`${classes.coachTypeList} relative mx-auto flex gap-4 mt-4`}>
                <div className={`${classes.coachTypes} flex items-center rounded-xl relative`} style={{ maxWidth: '36rem', width: '36rem' }}>
                    <div>
                        <img src="/images/butterfly-swimming.jpeg" alt="Butterfly Swimming" />
                    </div>
                    <div className={`${classes.overlay} absolute top-0 left-0 w-full h-full`}></div>
                    <div className={`absolute flex flex-col justify-end h-full p-10 gap-1`}>
                        <h1 className='uppercase'>swimming</h1>
                        <a className='uppercase underline'>check out now</a>
                    </div>
                </div>
                <div className={`${classes.coachTypes} flex items-center rounded-xl relative`} style={{ maxWidth: '100%', width: '100%' }}>
                    <div>
                        <img src="/images/HIIT-women.jpeg" alt="Yoga Girl" />
                    </div>
                    <div className={`${classes.overlay} absolute top-0 left-0 w-full h-full`}></div>
                    <div className={`absolute flex flex-col justify-end h-full p-10 gap-1`}>
                        <h1 className='uppercase'>HIIT</h1>
                        <a className='uppercase underline'>check out now</a>
                    </div>
                </div>
            </div>
            <div className={`${classes.coachFeatures} relative`}>
                <div className={`${classes.coachTypeSectionTitle} relative mx-auto`}>
                    <div>
                        Why Coach with PeakFit?
                    </div>
                </div>
                <div className='flex items-start justify-between relative mx-auto mt-10'>
                    <div className='flex flex-col'>
                        <svg style={{ paddingRight: '20px' }} fill='rgb(147 51 234 / 1)' width={'65px'} height={'80px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/>
                        </svg>
                        <h2 className='text-2xl'>Inspire Change</h2>
                        <div>Motivate and guide clients on their fitness journey by helping them set and achieve their goals. Your expertise and encouragement will empower them to make lasting, positive changes in their lives.</div>
                    </div>
                    <div className='flex flex-col'>
                        <svg style={{ paddingRight: '20px' }} fill='rgb(147 51 234 / 1)' width={'70px'} height={'80px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"/>
                        </svg>
                        <h2 className='text-2xl'>Flexible Schedule</h2>
                        <div>Enjoy the freedom to set your own hours and availability. Whether you prefer to coach in the mornings, evenings, or weekends, you can create a schedule that fits your lifestyle and personal commitments.</div>
                    </div>
                    <div className='flex flex-col'>
                        <svg style={{ paddingRight: '20px' }} fill='rgb(147 51 234 / 1)' width={'80px'} height={'80px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
                        </svg>
                        <h2 className='text-2xl'>Global Audience</h2>
                        <div>Connect with clients from all over the world, breaking geographical barriers and expanding your impact. Share your knowledge and skills with a diverse community eager to learn and grow.</div>
                    </div>
                    <div className='flex flex-col'>
                        <svg style={{ paddingRight: '20px' }} fill='rgb(147 51 234 / 1)' width={'90px'} height={'80px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/>
                        </svg>
                        <h2 className='text-2xl'>Supportive Community</h2>
                        <div>Join a network of like-minded coaches and fitness enthusiasts who are passionate about helping others. Collaborate, share experiences, and gain insights from a community dedicated to mutual growth and success.</div>
                    </div>
                </div>
            </div>
            <div className={`${classes.aboutUsVideo} mx-auto relative flex flex-col items-center justify-center`}>
                <div className={`${classes.videoContainer} relative`}>
                    <video className='w-full' id="about-video" width="1000" autoPlay loop muted>
                        <source src="/videos/boxing-man.mp4" type="video/mp4"/>
                    </video>
                    <div className={`${classes.videoOverlay}`}></div>
                    <div className={`${classes.videoInfo} relative mx-auto flex flex-col justify-center`}>
                        <h3 className='mt-4 uppercase'>Inspire. Train. Achieve.</h3>
                        <h1 className='uppercase'>watch our coaches in action</h1>
                        <a type='button' className="cursor-pointer flex items-center gap-2 justify-center text-xs rounded-full text-center w-40 py-4 mt-6 bg-white hover:bg-gray-300 text-black font-bold uppercase transition duration-300 ease-in-out">
                            <svg width={'15px'} height={'15px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                            </svg>
                            watch now
                        </a>
                    </div>
                </div>
            </div>

            <div className={`${classes.howToStart} relative`}>
                <div id='stars' className='max-h-[1rem] absolute'></div>
                {/* <div id='stars2' className='h-[20rem]'></div>
                <div id='stars3' className='h-[20rem]'></div> */}
                <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
                <div className={`${classes.howToStartTitle} relative mx-auto`}>
                    <div className='flex flex-col items-center justify-center'>
                        How To Get Started?
                    </div>
                </div>
                <div className='w-full mt-20'>
                    <div className='w-full absolute right-0 mt-20'>
                        <div className='flex flex-col gap-1'>
                            <h1>Apply</h1>
                            <div>Fill out our easy application form with your details and experience. This helps us understand your background and how you can contribute to our team.</div>
                        </div>
                        <img src="https://assets-global.website-files.com/61bcbb2559ac4069845871a7/61d9a5d97619c8230cbcef2c_Arrow.svg" loading="lazy" alt="" />
                    </div>
                    <div className='w-full absolute mt-20'>
                        <div className='flex flex-col gap-1'>
                            <h1>Review</h1>
                            <div>Our team will carefully review your application and credentials to ensure you meet our standards. This process helps us maintain a high-quality coaching staff.</div>
                        </div>
                        <img src="https://assets-global.website-files.com/61bcbb2559ac4069845871a7/61d9a5d97619c8230cbcef2c_Arrow.svg" loading="lazy" alt="" />
                    </div>
                </div>
            </div>

            <div className={`${classes.howToStart} relative`} style={{ top: '105rem' }}>
                <div className='w-full mt-20'>
                    <div className='w-full absolute right-0 mt-20'>
                        <div className='flex flex-col gap-1'>
                            <h1>Onboard</h1>
                            <div>Once approved, you'll complete our comprehensive onboarding process, which includes training and setup to get you ready for your coaching role.</div>
                        </div>
                        <img src="https://assets-global.website-files.com/61bcbb2559ac4069845871a7/61d9a5d97619c8230cbcef2c_Arrow.svg" loading="lazy" alt="" />
                    </div>
                    <div className='w-full absolute mt-20'>
                        <div className='flex flex-col gap-1'>
                            <h1>Start Coaching</h1>
                            <div>Begin connecting with clients and transforming lives! You'll start coaching sessions, helping clients achieve their fitness goals and making a positive impact.</div>
                        </div>
                        <img src="https://assets-global.website-files.com/61bcbb2559ac4069845871a7/61d9a5d97619c8230cbcef2c_Arrow.svg" loading="lazy" alt="" />
                    </div>
                </div>
            </div>
            <div className={`${classes.becomeCoachFooter} relative`}>
                <Footer />
            </div>
        </>
    )
}