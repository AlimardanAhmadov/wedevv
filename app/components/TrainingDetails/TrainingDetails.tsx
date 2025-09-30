import classes from '../TrainingDetails/TrainingDetails.module.css';
import React, { useState, useEffect } from 'react';
import PlyrVideo from '../Plyr/Plyr';
import styles from '../../dashboard/components/AddProduct/AddProduct.module.css';
import Link from '@/node_modules/next/link';

export default function TrainingDetails({ show, onClose, isClosing }) { 
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('notes');
    const [activeInfoSection, setActiveInfoSection] = useState('details');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
    const [isEditable, setIsEditable] = useState(null);

    const videos = [
        { videoUrl: 'https://image.spreadshirtmedia.com/image-server/v1/productTypes/812/views/,appearanceId=2,modelId=115,crop=detail,width=700,height=700,backgroundColor=ffffff.webp' },
        { videoUrl: 'https://image.spreadshirtmedia.com/image-server/v1/productTypes/812/views/,appearanceId=2,modelId=115,crop=detail,width=700,height=700,backgroundColor=ffffff.webp' },
        { videoUrl: 'https://image.spreadshirtmedia.com/image-server/v1/productTypes/812/views/,appearanceId=2,modelId=115,crop=detail,width=700,height=700,backgroundColor=ffffff.webp' },
        { videoUrl: 'https://image.spreadshirtmedia.com/image-server/v1/productTypes/812/views/,appearanceId=2,modelId=115,crop=detail,width=700,height=700,backgroundColor=ffffff.webp' },
        { videoUrl: 'https://image.spreadshirtmedia.com/image-server/v1/productTypes/812/views/,appearanceId=2,modelId=115,crop=detail,width=700,height=700,backgroundColor=ffffff.webp' },
    ];

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSecondaryDropdownToggle = (index: any) => {
        setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleNextClick = (nextSection: any) => {
        if (activeSection === 'comments') {
            setActiveSection(nextSection);
        } else if (activeSection === 'notes') {
            setActiveSection(nextSection);
        } else {
            alert("This section doesn't exist");
        }
    };

    useEffect(() => {
        if ((show) || (openDropdownIndex !== null)) {
            setIsVisible(true);
        } else {
            const timeout = setTimeout(() => setIsVisible(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [show, openDropdownIndex]);

    const handleCloseWithAnimation = () => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    const handleEditableToggle = (index: any) => {
        setIsEditable((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <div className={`${classes.trainingDetails} fixed top-0 right-0 w-full h-full transform transition-transform duration-500 ease-in-out z-[21] overflow-hidden`}
                >
                <button id='close-dialog' className={`fixed inset-0 transition-opacity w-full h-full dark:bg-black-800 bg-opacity-60 border-none focus:outline-none cursor-default ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></button>
                <div className={`fixed inset-y-0 right-0 ml-10 flex max-w-full flex-col shadow-xl m-[20px] overflow-hidden rounded-xl duration-300 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}>
                    <div className={`relative flex max-h-full w-screen max-w-lg flex-1 flex-col`}>
                        <div className='flex h-full max-h-full flex-col overflow-y-auto relative'>
                            <header className="flex justify-between gap-2 p-3 p-6">
                                <p className="flex-auto truncate text-lg font-medium leading-7 text-gray-200">Workout Details</p>
                                <button onClick={handleCloseWithAnimation} className="rounded text-black outline-none transition duration-150 ease-in-out hover:text-black-500 focus-visible:ring-2 focus-visible:ring-primary-action focus-visible:ring-offset-2" aria-label="Close dialog">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="rgb(229 231 235 / 1)" role="img" aria-hidden="true" className="h-6 w-6">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.18278 4.19892C4.29997 4.08188 4.45882 4.01614 4.62445 4.01614C4.79008 4.01614 4.94893 4.08188 5.06612 4.19892L9.83278 8.96559L14.5995 4.19892C14.6567 4.13752 14.7257 4.08827 14.8023 4.05411C14.879 4.01995 14.9618 4.00158 15.0457 4.0001C15.1296 3.99862 15.213 4.01405 15.2908 4.04549C15.3686 4.07692 15.4393 4.12371 15.4986 4.18306C15.558 4.24241 15.6048 4.3131 15.6362 4.39093C15.6677 4.46875 15.6831 4.55211 15.6816 4.63603C15.6801 4.71994 15.6618 4.80271 15.6276 4.87937C15.5934 4.95604 15.5442 5.02504 15.4828 5.08226L10.7161 9.84892L15.4828 14.6156C15.5442 14.6728 15.5934 14.7418 15.6276 14.8185C15.6618 14.8951 15.6801 14.9779 15.6816 15.0618C15.6831 15.1457 15.6677 15.2291 15.6362 15.3069C15.6048 15.3847 15.558 15.4554 15.4986 15.5148C15.4393 15.5741 15.3686 15.6209 15.2908 15.6524C15.213 15.6838 15.1296 15.6992 15.0457 15.6978C14.9618 15.6963 14.879 15.6779 14.8023 15.6437C14.7257 15.6096 14.6567 15.5603 14.5995 15.4989L9.83278 10.7323L5.06612 15.4989C4.94764 15.6093 4.79093 15.6694 4.62901 15.6666C4.4671 15.6637 4.31261 15.5981 4.1981 15.4836C4.08359 15.3691 4.01799 15.2146 4.01514 15.0527C4.01228 14.8908 4.07238 14.7341 4.18278 14.6156L8.94945 9.84892L4.18278 5.08226C4.06574 4.96507 4 4.80622 4 4.64059C4 4.47496 4.06574 4.31611 4.18278 4.19892Z"></path>
                                    </svg>
                                </button>
                            </header>
                            <div style={{ borderBottom: '1px solid rgb(75 85 99 / 1)', paddingBottom: '23px' }} className={`flex items-center gap-3 px-6`}>
                                <button
                                    onClick={() => setActiveInfoSection('details')}
                                    className={`duration-200 transition ease-in-out w-full dark:bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block px-4 py-2.5 font-medium rounded-full text-xs ${activeSection === 'details' ? 'bg-purple-500' : ''}`}
                                    style={activeInfoSection === 'details' ? { backgroundColor: 'rgb(107 55 216 / 1)' } : {}}
                                >
                                    Details
                                </button>
                                <button
                                    onClick={() => setActiveInfoSection('videos')}
                                    className={`duration-200 transition ease-in-out w-full dark:bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block px-4 py-2.5 font-medium rounded-full text-xs ${activeSection === 'videos' ? 'bg-purple-500' : ''}`}
                                    style={activeInfoSection === 'videos' ? { backgroundColor: 'rgb(107 55 216 / 1)' } : {}}
                                >
                                    Videos
                                </button>
                            </div>
                            {activeInfoSection === 'details' && (
                            <div className='p-6 overflow-auto' style={activeSection === 'comments' ? { maxHeight: '500px' } : {}}>
                                <div className='text-lg font-semibold flex flex-row items-center justify-between relative'>
                                    3D Lurge
                                    <button onClick={handleDropdownToggle} className='p-1 rounded-full duration-200 transition ease-in-out hover:bg-gray-700 z-[10] m-[3px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="19px" viewBox="0 -960 960 960" width="19px" fill="#e8eaed">
                                            <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/>
                                        </svg>
                                    </button>
                                    {isDropdownOpen && (
                                        <div className='w-[120px] absolute right-[1%] top-[77%] rounded-xl mt-2 dark:bg-gray-800 px-4 py-3 absolute shadow-lg z-[20]'>
                                            <ul className={`overflow-auto max-h-[250px] flex flex-col gap-2 transition ease-in-out duration-300`}>
                                                <li className='hover:text-gray-100 rounded-lg text-sm text-gray-300 cursor-pointer transition ease-in-out duration-300'>
                                                    <p> Edit </p>
                                                </li>
                                                <li className='hover:text-gray-100 rounded-lg text-sm text-gray-300 cursor-pointer transition ease-in-out duration-300'>
                                                    <p> Delete </p>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <div className='flex flex-row items-center gap-3 mt-6'>
                                    <button style={{ backgroundColor: 'rgb(97 44 204)', lineHeight: '12px' }} className='px-3 text-[9px] py-1.5 flex flex-col justify-center items-center uppercase font-semibold rounded-full'>High Priority</button>
                                    <div className='flex flex-row items-end gap-1 px-2 py-1 rounded-full bg-gray-800 text-gray-200 font-medium text-[10px]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#e8eaed">
                                            <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/>
                                        </svg>
                                        Oct 10, 2024
                                    </div>
                                </div>
                                <div className={`${classes.gradient} flex flex-row items-center justify-between mt-8 w-full p-3 rounded-lg`}>
                                    <div className='flex flex-row items-center gap-3'>
                                        <div className='w-[1.7rem] h-[1.7rem] rounded-lg bg-[#000] flex flex-col items-center justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#e8eaed">
                                                <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/>
                                            </svg>
                                        </div>
                                        <span className='text-[12px] text-gray-700'>Total Workout Duration</span>
                                    </div>
                                    <div className='text-black flex flex-row items-center gap-1'>
                                        5:46
                                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#484848">
                                            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-1 mt-8'>
                                    <h2 className='font-semibold text-[14px]'>Description</h2>
                                    <p className="text-gray-300 text-[13px]">
                                        Using this feature, you can control the number of orders you receive. Once the limit you set is reached, your listing will temporarily be removed from the search results. Disabling this feature will return your listing to the search results, typically within approximately 15 minutes.
                                    </p>
                                </div>
                                {/* <div className='flex flex-col gap-[10px] mt-6'>
                                    <PlyrVideo />
                                </div> */}
                                <div className='flex flex-col gap-1 absolute bottom-0 mb-6 w-[91%] bg-[#0C1B29]'>
                                    <div className="border-b border-gray-800 py-3 w-full mb-1">
                                        <div className='flex items-center gap-3 w-[200px] '>
                                            <button onClick={() => handleNextClick('notes')} className="cursor-pointer whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs" style={activeSection === 'notes' ? { backgroundColor: 'rgb(107 55 216 / 1)' } : {}}>Notes</button>
                                            <button onClick={() => handleNextClick('comments')} className="cursor-pointer whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs" style={activeSection === 'comments' ? { backgroundColor: 'rgb(107 55 216 / 1)' } : {}}>Comments</button>
                                        </div>
                                    </div>
                                    {activeSection === 'notes' && (
                                        <>
                                            <div className="relative flex flex-col items-start text-md font-semibold justify-between w-full text-white cursor-pointer max-h-[180px] overflow-auto">
                                                <div className='flex flex-row items-center w-full justify-between py-3 relative'>
                                                    <div className='flex flex-row items-start gap-3'>
                                                        <div className="relative">
                                                            <div className={`${classes.gradient} w-8 h-8 rounded-lg flex flex-col items-center justify-center`}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="15px" width="15px" fill="#000" viewBox="0 0 576 512">
                                                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className='text-gray-300 text-[11px] font-medium'>John Doe • 17th Oct, 2024</span>
                                                            <span className="font-medium text-gray-200 text-[13px]">Workout at 7:00PM today</span>
                                                        </div>
                                                    </div>
                                                    <button className='p-1 rounded-xl flex flex-col justify-between items-center hover:bg-gray-700 duration-200 transition ease-in-out'>
                                                        <svg width={'14'} height={'14'} fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                                            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <input placeholder='Add a note...' type="text" className='w-full font-medium block text-sm px-4 py-2 mt-2 bg-white border border-gray-400 rounded-xl dark:placeholder-gray-600 dark:bg-gray-800 dark:border-gray-600 focus:border-[#6B37D8] focus:outline-none focus:ring-opacity-0 transition duration-200 ease-in-out' />
                                            </div>
                                        </>
                                    )}
                                    {activeSection === 'comments' && ( 
                                        <>
                                            <div className='flex flex-col items-center gap-2 max-h-[180px] overflow-auto'>
                                                <div className="flex flex-row items-start text-md font-semibold gap-3 w-full py-3 text-white shadow-xl bg-[#132633] px-4 rounded-xl group hover:bg-[#182f3f] duration-200 transition ease-in-out">
                                                    <div className="relative">
                                                        <img className="min-w-6 min-h-6 w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt=""/>
                                                    </div>
                                                    <div className="flex flex-col gap-2 w-full">
                                                        <div className="flex flex-row items-center justify-between w-full">
                                                            <div className="flex flex-row items-center gap-2">
                                                                <span className="text-gray-100 text-[14px] font-semibold">Alimardan Ahmadov</span>
                                                                <span className="text-gray-300 text-[11px] font-medium">just now</span>
                                                            </div>
                                                            <div className="flex flex-row items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                <button onClick={() => handleEditableToggle(123124)} className="duration-200 transition ease-in-out hover:bg-gray-800 p-1 rounded-full">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -960 960 960" width="15" fill="#e8eaed">
                                                                        <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
                                                                    </svg>
                                                                </button>
                                                                <button className="duration-200 transition ease-in-out hover:bg-gray-800 p-1 rounded-full">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -960 960 960" width="15" fill="#e8eaed">
                                                                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <span className="font-[500] text-gray-200 text-[13px] max-w-[95%]">I want a complete diet plan🙂</span>
                                                        {isEditable === 123124 && (
                                                            <div className="relative duration-300 transition ease-in-out translate-y-0 opacity-100">
                                                                <textarea placeholder="Edit video title..." className="editable-title w-full font-medium block text-[13px] h-[100px] pl-4 pr-2 py-[10px] bg-white border border-gray-400 rounded-xl dark:placeholder-gray-600 dark:bg-gray-800 dark:border-gray-600 focus:border-[#6B37D8] focus:outline-none focus:ring-opacity-0 transition duration-200 ease-in-out" > </textarea>
                                                                <div className="absolute right-[1rem] bottom-0 flex flex-row items-center gap-2 mt-auto mb-[1rem]">
                                                                    <button onClick={() => handleEditableToggle(123124)} className="text-[11px] hover:bg-gray-600 opacity-[0.5] cursor-pointer transition ease-in-out duration-300 rounded-full w-[50px] h-[30px] flex flex-col items-center justify-center">
                                                                        Cancel
                                                                    </button>
                                                                    <button className="text-[11px] hover:bg-gray-600 opacity-[0.5] cursor-not-allowed pointer-events-none bg-gray-700 transition ease-in-out duration-300 rounded-full w-[50px] h-[30px] flex flex-col items-center justify-center">
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="flex flex-row items-start text-md font-semibold gap-3 w-full py-3 text-white cursor-pointer shadow-xl bg-[#132633] px-4 rounded-xl group hover:bg-[#182f3f] duration-200 transition ease-in-out">
                                                    <div className="relative">
                                                        <div className='min-w-6 min-h-6 w-6 h-6 rounded-full bg-gray-700 flex flex-col items-center justify-center'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="17px" fill="#e8eaed">
                                                                <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-2 w-full">
                                                        <div className="flex flex-row items-center justify-between w-full">
                                                            <div className="flex flex-row items-center gap-2">
                                                                <span className="text-gray-100 text-[14px] font-semibold">Alimardan Ahmadov</span>
                                                                <span className="text-gray-300 text-[11px] font-medium">just now</span>
                                                            </div>
                                                            <div className="flex flex-row items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                            <button onClick={() => handleEditableToggle(123126)} className="duration-200 transition ease-in-out hover:bg-gray-800 p-1 rounded-full">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -960 960 960" width="15" fill="#e8eaed">
                                                                        <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
                                                                    </svg>
                                                                </button>
                                                                <button className="duration-200 transition ease-in-out hover:bg-gray-800 p-1 rounded-full">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -960 960 960" width="15" fill="#e8eaed">
                                                                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <span className="font-[500] text-gray-200 text-[13px] max-w-[95%]">I want a complete diet plan🙂</span>
                                                        {isEditable === 123126 && (
                                                            <div className="relative duration-300 transition ease-in-out translate-y-0 opacity-100">
                                                                <textarea placeholder="Edit video title..." className="editable-title w-full font-medium block text-[13px] h-[100px] pl-4 pr-2 py-[10px] bg-white border border-gray-400 rounded-xl dark:placeholder-gray-600 dark:bg-gray-800 dark:border-gray-600 focus:border-[#6B37D8] focus:outline-none focus:ring-opacity-0 transition duration-200 ease-in-out" > </textarea>
                                                                <div className="absolute right-[1rem] bottom-0 flex flex-row items-center gap-2 mt-auto mb-[1rem]">
                                                                    <button onClick={() => handleEditableToggle(123126)} className="text-[11px] hover:bg-gray-600 opacity-[0.5] cursor-pointer transition ease-in-out duration-300 rounded-full w-[50px] h-[30px] flex flex-col items-center justify-center">
                                                                        Cancel
                                                                    </button>
                                                                    <button className="text-[11px] hover:bg-gray-600 opacity-[0.5] cursor-not-allowed pointer-events-none bg-gray-700 transition ease-in-out duration-300 rounded-full w-[50px] h-[30px] flex flex-col items-center justify-center">
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <input placeholder='Add a comment...' type="text" className='w-full font-medium block text-sm px-4 py-2 mt-2 bg-white border border-gray-400 rounded-xl dark:placeholder-gray-600 dark:bg-gray-800 dark:border-gray-600 focus:border-[#6B37D8] focus:outline-none focus:ring-opacity-0 transition duration-200 ease-in-out' />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            )}
                            {activeInfoSection === 'videos' && (
                                <div className='py-3 px-6 overflow-auto'>
                                    <div id='workout-videos'>
                                        <div>
                                            <div className="flex flex-row justify-between items-center px-4 mb-2">
                                                <div className="flex flex-row items-center gap-1">
                                                    <div className="checkbox-wrapper-13 flex flex-col items-star2 gap-2 py-3">
                                                        <input id="c1-0" type="checkbox" />
                                                    </div>
                                                    <div className="ml-[10px] text-[12px] font-[600] text-start text-[#A5ACB6]">Select all</div>
                                                </div>
                                            </div>
                                            {videos.map((product, index) => (
                                                <div className="flex flex-row items-center justify-between px-4 py-3 bg-[#132633] rounded-[1rem] mb-6 relative">
                                                    <div className="flex flex-row gap-[17px] items-center text-gray-300 text-[14px]">
                                                        <div className="checkbox-wrapper-13 flex flex-col items-star2 gap-2 py-3">
                                                            <input id="c1-1" type="checkbox"/>
                                                        </div>
                                                        <div className="w-10 h-10 transition ease-in-out rounded-lg duration-300 shadow-3xl">
                                                            <img className="h-full object-cover rounded-lg shadow-xl" src="https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/301816903/original/fd11f2eb4f4b555a12f70140679ae5c71a3fd759/develop-clone-website-using-react-and-nextjs.jpg" alt="I will teach live online private yoga" />
                                                        </div>
                                                        <div className='flex flex-col items-start gap-1'>
                                                            <Link href={'/dashboard/bookings/training/video/3d-lunge-lore'} className="cursor-pointer cut-text small">3D Lunge Lore</Link>
                                                            <span className='text-gray-400 text-[10px]'>1 Set 2 Reps |  Rest 90 sec between sets</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button onClick={() => handleSecondaryDropdownToggle(index)} style={{ rotate: openDropdownIndex === index && isVisible ? '180deg' : '0deg' }} className={`duration-200 transition ease-in-out hover:bg-gray-700 p-1 rounded-full ${isDropdownOpen === index ? 'bg-gray-700' : 'bg-transparent '} `}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 -960 960 960" width="17" fill="#e8eaed">
                                                                <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/>
                                                            </svg>
                                                        </button>
                                                        {openDropdownIndex === index && (
                                                            <div className={`w-[120px] absolute right-[12px] rounded-xl mt-2 dark:bg-gray-800 px-4 py-3 absolute shadow-lg z-[20] duration-200 ${
                                                                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                                                                }`}
                                                            >
                                                                <ul className={`overflow-auto max-h-[250px] flex flex-col gap-2 transition ease-in-out duration-300`}>
                                                                    <li className='hover:text-gray-100 rounded-lg text-sm text-gray-300 cursor-pointer transition ease-in-out duration-300'>
                                                                        <p> Edit </p>
                                                                    </li>
                                                                    <li className='hover:text-gray-100 rounded-lg text-sm text-gray-300 cursor-pointer transition ease-in-out duration-300'>
                                                                        <p> Delete </p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}