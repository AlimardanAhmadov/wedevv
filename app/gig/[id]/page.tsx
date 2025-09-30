'use client'

import React, { useState, useEffect } from 'react';
import classes from '../Gig.module.css';
import Link from '@/node_modules/next/link';
import Navbar from '@/app/components/Home/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';


export default function GigPreview() {
    const [activeSection, setActiveSection] = useState('basic-details');
    return (
        <>
            <Navbar />
            {/* <section className={`${classes.bannerCover} absolute left-0 right-0`}></section>
            <div className={`${classes.overlay} absolute top-0 left-0 w-full h-full`}></div> */}
            <div className={`${classes.banner} mx-auto flex flex-row items-center justify-between relative`}>
                <div className={`${classes.lines}`}>
                    <div className={`${classes.line}`}></div>
                    <div className={`${classes.line}`}></div>
                    <div className={`${classes.line}`}></div>
                    <div className={`${classes.line}`}></div>
                    <div className={`${classes.line}`}></div>
                    <div className={`${classes.line} horizontal`}></div>
                    <div className={`${classes.line} horizontal`}></div>
                    <div className={`${classes.line} horizontal`}></div>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className={`flex items-center pb-4 overflow-x-auto whitespace-nowrap`}>
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
                    <div className={`${classes.bannerTitle} text-[2rem] font-[800]`}>
                        I will teach live online private yoga
                    </div>
                    <Link href={''} className={`text-[.9rem] font-[600] flex flex-row items-center justify-between rounded-lg bg-[#273e53] w-[12rem] px-2 py-2.5 mb-1`}>
                        <div className='flex items-center gap-[10px]'>
                            <div className='h-[35px] w-[35px] flex flex-col items-center justify-center bg-[#040e19] rounded-full'>
                                <img src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4oaZ0g2KQTezYZXoKkhJfo%2F997a6929369200ba3d8d3613b2c85dc6%2Fraymond-daniels-body-image.png%3Ffm%3Dwebp&amp;w=640&amp;q=75" alt="" />
                            </div>
                            John Doe
                        </div>
                        <svg className='mr-1' fill='#fff' width={'15'} height={'15'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/>
                        </svg>
                    </Link>
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
                {/* <div className={`${classes.profileImg} shadow-lg`}>
                    <div className={`${classes.coachCover} absolute`}>
                        <img src="/icons/family-smoke-7.png" alt="Family Stroke" />
                    </div>
                    <img src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4oaZ0g2KQTezYZXoKkhJfo%2F997a6929369200ba3d8d3613b2c85dc6%2Fraymond-daniels-body-image.png%3Ffm%3Dwebp&w=640&q=75" alt="" />
                </div> */}
                <div className='relative flex max-h-full w-screen max-w-lg flex-1 flex-col gap-2'>
                    <div className='flex h-full max-h-full flex-col gap-6 overflow-y-auto relative bg-[#0C1B29FF] rounded-2xl p-8'>
                        <div className={`flex items-center gap-4`}>
                            <button
                                onClick={() => setActiveSection('basic-details')}
                                className={`duration-200 transition ease-in-out w-full dark:bg-gray-800 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-[14px]`}
                                style={activeSection === 'basic-details' ? { backgroundColor: '#612CCC' } : {}}
                            >
                                Basic
                            </button>
                            <button
                                onClick={() => setActiveSection('standard-details')}
                                className={`duration-200 transition ease-in-out w-full dark:bg-gray-800 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-[14px]`}
                                style={activeSection === 'standard-details' ? { backgroundColor: '#612CCC' } : {}}
                            >
                                Standard
                            </button>
                            <button
                                onClick={() => setActiveSection('premium-details')}
                                className={`duration-200 transition ease-in-out w-full dark:bg-gray-800 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-[14px]`}
                                style={activeSection === 'premium-details' ? { backgroundColor: '#612CCC' } : {}}
                            >
                                Premium
                            </button>
                        </div>
                        {activeSection === 'basic-details' && (
                            <>
                            <div className='flex flex-col gap-1 mt-2'>
                                <div className='flex flex-row items-center justify-between w-full'>
                                    <span className='uppercase text-[18px] font-semibold text-gray-200'>basic</span>
                                    <span className='text-[18px] font-semibold text-gray-200'>¥27,800</span>
                                </div>
                            </div>
                            <p className='text-gray-200 text-[15px]'>
                                The First Karate Combat Lightweight Champ: Edgars Skrivers has trained Shotokan Karate since the age of 6 years old.
                            </p>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-row items-center gap-2'>
                                    <svg width={'18'} height={'18'} fill={'#fff'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                    </svg>
                                    <p className='text-gray-200 text-[14px]'>
                                        Personalized Training Programs
                                    </p>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <svg width={'18'} height={'18'} fill={'#fff'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                    </svg>
                                    <p className='text-gray-200 text-[14px]'>
                                        Technique and Skill Development
                                    </p>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <svg width={'18'} height={'18'} fill={'#fff'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                    </svg>
                                    <p className='text-gray-200 text-[14px]'>
                                        Conditioning and Strength Training
                                    </p>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <svg width={'18'} height={'18'} fill={'#fff'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                    </svg>
                                    <p className='text-gray-200 text-[14px]'>
                                        Fight Preparation and Strategy
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-5 items-center'>
                                <button className='relative mt-4 duration-200 w-full transition ease-in-out bg-[#612CCC] flex flex-row justify-center items-center gap-1 text-gray-100 font-semibold inline-block px-4 py-[13px] font-medium rounded-full text-[18px] z-20'>
                                    Continue
                                    <svg className='absolute right-0 top-0 bottom-0 m-auto mr-7' width={'15'} height={'15'} fill={'#fff'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                                    </svg>
                                </button>
                                <button className='bg-none text-gray-300 font-[600]'>Contact me</button>
                            </div>
                        </>
                        )}
                        {activeSection === 'standard-details' && (
                            <>
                            <div className='flex flex-col gap-1 mt-2'>
                                <div className='flex flex-row items-center justify-between w-full'>
                                    <span className='uppercase text-[18px] font-semibold text-gray-200'>standard</span>
                                    <span className='text-[18px] font-semibold text-gray-200'>¥43,230</span>
                                </div>
                            </div>
                            <p className='text-gray-200 text-[15px]'>
                                The First Karate Combat Lightweight Champ: Edgars Skrivers has trained Shotokan Karate since the age of 6 years old.
                            </p>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-row items-center gap-2'>
                                    <svg width={'18'} height={'18'} fill={'#fff'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                    </svg>
                                    <p className='text-gray-200 text-[14px]'>
                                        Personalized Training Programs
                                    </p>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <svg width={'18'} height={'18'} fill={'#fff'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                    </svg>
                                    <p className='text-gray-200 text-[14px]'>
                                        Technique and Skill Development
                                    </p>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <svg width={'18'} height={'18'} fill={'#fff'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                    </svg>
                                    <p className='text-gray-200 text-[14px]'>
                                        Conditioning and Strength Training
                                    </p>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <svg width={'18'} height={'18'} fill={'#fff'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                    </svg>
                                    <p className='text-gray-200 text-[14px]'>
                                        Fight Preparation and Strategy
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-5 items-center'>
                                <button className='relative mt-4 duration-200 w-full transition ease-in-out bg-[#612CCC] flex flex-row justify-center items-center gap-1 text-gray-100 font-semibold inline-block px-4 py-[13px] font-medium rounded-full text-[18px] z-20'>
                                    Continue
                                    <svg className='absolute right-0 top-0 bottom-0 m-auto mr-7' width={'15'} height={'15'} fill={'#fff'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                                    </svg>
                                </button>
                                <button className='bg-none text-gray-300 font-[600]'>Contact me</button>
                            </div>
                        </>
                        )}

                        {activeSection === 'premium-details' && (
                            <>
                                <div className='flex flex-col gap-1 mt-2'>
                                    <div className='flex flex-row items-center justify-between w-full'>
                                        <span className='uppercase text-[18px] font-semibold text-gray-200'>premium</span>
                                        <span className='text-[18px] font-semibold text-gray-200'>¥43,094</span>
                                    </div>
                                </div>
                                <p className='text-gray-200 text-[15px]'>
                                    The First Karate Combat Lightweight Champ: Edgars Skrivers has trained Shotokan Karate since the age of 6 years old.
                                </p>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-row items-center gap-2'>
                                        <svg width={'18'} height={'18'} fill={'#fff'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                        </svg>
                                        <p className='text-gray-200 text-[14px]'>
                                            Personalized Training Programs
                                        </p>
                                    </div>
                                    <div className='flex flex-row items-center gap-2'>
                                        <svg width={'18'} height={'18'} fill={'#fff'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                        </svg>
                                        <p className='text-gray-200 text-[14px]'>
                                            Technique and Skill Development
                                        </p>
                                    </div>
                                    <div className='flex flex-row items-center gap-2'>
                                        <svg width={'18'} height={'18'} fill={'#fff'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                        </svg>
                                        <p className='text-gray-200 text-[14px]'>
                                            Conditioning and Strength Training
                                        </p>
                                    </div>
                                    <div className='flex flex-row items-center gap-2'>
                                        <svg width={'18'} height={'18'} fill={'#fff'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                        </svg>
                                        <p className='text-gray-200 text-[14px]'>
                                            Fight Preparation and Strategy
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-5 items-center'>
                                    <button className='relative mt-4 duration-200 w-full transition ease-in-out bg-[#612CCC] flex flex-row justify-center items-center gap-1 text-gray-100 font-semibold inline-block px-4 py-[13px] font-medium rounded-full text-[18px] z-20'>
                                        Continue
                                        <svg className='absolute right-0 top-0 bottom-0 m-auto mr-7' width={'15'} height={'15'} fill={'#fff'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                                        </svg>
                                    </button>
                                    <button className='bg-none text-gray-300 font-[600]'>Contact me</button>
                                </div>
                            </>
                        )}
                    </div>
                    {/* <div className='px-8'>
                        <button className='rounded-full w-full text-center py-[13px] mt-6 bg-white hover:bg-gray-300 text-black text-[15px] font-bold transition duration-300 ease-in-out'>
                            Contact me
                        </button>
                    </div> */}
                </div>
            </div>

            <div className={`${classes.bio} relative flex flex-col gap-2 mx-auto`}>
                <h2 className='uppercase'>gig description</h2>
                <div>
                    The First Karate Combat Lightweight Champ: Edgars Skrivers has trained Shotokan Karate since the age of 6 years old. He's a renowned athlete in the sport of Karate having acquired many titles such as European Champion, Shotokan World Champion, and many times Latvian and Baltic champion. Edgars has balanced his athletic feats with a passion for education having a attained a degree in Sports Physiotherapy and currently does strength and conditioning coaching. As champion, he calls his electrifying performances in The Pit, "The Bearslayer Entertainment Show."
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

            <div className={`${classes.paymentCard} mx-auto relative flex justify-between rounded-md`}>
                <div className='flex flex-col items-start justify-between px-8 py-8'>
                    <div className={`flex flex-col gap-2`}>
                        <h2 className='text-3xl font-bold'>¥27,800</h2>
                        <div className={`flex flex-col ${classes.couponContainer}`}>
                            <span className='font-semibold'>Get 40% off discount</span>
                            <div className={`${classes.couponInput} flex items-center mt-2`}>
                                <input placeholder="Enter Coupon" className="font-bold block px-5 py-4 bg-white border border-gray-400 dark:placeholder-gray-600 dark:bg-gray-800 dark:border-gray-600 focus:border-[#6B37D8] focus:outline-none focus:ring-opacity-0" type="text" />
                                <button type="button" className="w-full text-xs text-center w-20 py-4 text-white font-bold transition duration-300 ease-in-out disabled cursor-not-allowed">Apply</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 mt-8'>
                        <h4 className='text-sm font-bold'>This package will include:</h4>

                        <ul className='flex flex-col gap-3 mt-2'>
                            <li className='flex items-center gap-2 text-xs font-semibold'>
                                <svg className='w-4 h-4' fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"/>
                                </svg>
                                Certificate of completion
                            </li>
                            <li className='flex items-center gap-2 text-xs font-semibold'>
                                <svg className='w-4 h-4' fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                                </svg>
                                3 hours of live sessions on Thu, Fri, Sun
                            </li>
                            <li className='flex items-center gap-2 text-xs font-semibold'>
                                <svg className='w-4 h-4' fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path d="M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5L320 210.7l72.2-72.2C419.5 111.3 456.4 96 494.9 96C575 96 640 161 640 241.1v29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2C220.5 400.7 183.6 416 145.1 416C65 416 0 351 0 270.9V241.1zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8C100.3 160 64 196.3 64 241.1v29.7c0 44.8 36.3 81.1 81.1 81.1c21.5 0 42.2-8.5 57.4-23.8L274.7 256zm90.5 0l72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8c44.8 0 81.1-36.3 81.1-81.1V241.1c0-44.8-36.3-81.1-81.1-81.1c-21.5 0-42.2 8.5-57.4 23.8L365.3 256z"/>
                                </svg>
                                Full lifetime access
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col justify-end gap-1 px-8 py-8'>
                    <div className={`${classes.featureVideoContainer} relative`}>
                        <div className='overlay'></div>
                        <button className='absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center'>
                            <svg className='transition duration-100 ease-in-out' width={'70'} height={'70'} fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/>
                            </svg>
                        </button>
                        <video className='w-full' id="about-video" width="1000">
                            <source src="/videos/boxing-man.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-xs'>30-Day Money-Back Guarantee | <a className='text-purple-500' href=""> Refund Policy </a> and <a className='text-purple-500' href="">Pricing Policy </a></p>
                        <a type="button" className="w-full rounded-full text-center w-40 py-4 text-white font-bold uppercase transition duration-300 ease-in-out">buy now</a>
                    </div>
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
                <h2 className='uppercase'>gig reviews</h2>
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
            <div className={`relative top-[-58rem]`}>
                <Footer />
            </div>
        </>
    )
}
