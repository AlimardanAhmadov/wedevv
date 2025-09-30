import Link from '@/node_modules/next/link';
import Navbar from '../../../components/Home/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import classes from '../../../my-training/all-trainings/MyTraining.module.css';

export default function TrainingDashboard() {

    return (
        <>
            <Navbar />
            <div className={`h-[270px] absolute top-0 left-0 w-full`}></div>
            <div className={`max-w-[79rem] relative top-[7rem] mx-auto flex flex-row items-center justify-between`}>
                <div className='flex flex-col gap-1 w-full'>
                    <div className={`mx-auto relative top-[18px] flex flex-row items-start w-full`}>
                        <div className="flex items-center gap-3 w-[280px]">
                            <Link href={'/my-training/dashboard/activity'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs" style={{ backgroundColor: 'rgb(107, 55, 216)' }}>Activity</Link>
                            <Link href={'/my-training/dashboard/training'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs">Training</Link>
                            <Link href={'/my-training/dashboard/health-hub'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs">Health hub</Link>
                            <Link href={'/my-training/dashboard/media'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs">Media</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`z-10 px-[1.4rem] py-[1.5rem] rounded-lg mx-auto max-w-[79rem] dark:bg-gray-800 flex flex-row items-start gap-4 relative top-[10rem]`}>
                <svg width={'34'} height={'34'} fill={'#804fe7'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"/>
                </svg>
                <div className='flex flex-col items-start gap-[5px]'>
                    <h5 className='font-semibold text-[16px]'>Order started</h5>
                    <span className='text-gray-300 font-semibold text-[15px]'>b345ts confirmed the order so you can start training now. You got this!</span>
                </div>
            </div>

            <div className={`z-10 px-[1.4rem] py-[1.3rem] rounded-lg mx-auto max-w-[79rem] dark:bg-gray-800 flex flex-row items-start gap-4 relative top-[12rem]`}>
                <div className='flex flex-col items-start gap-[5px] w-full'>
                    <h5 className='font-semibold text-[15px] flex flex-row items-center justify-between w-full'>
                        Training Details
                        <button>
                            <svg width={'17'} height={'17'} fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                            </svg>
                        </button>
                    </h5>
                    <div className='flex flex-row gap-4 items-start mt-3'>
                        <div className={`flex flex-col items-center justify-center rounded-xl bg-[#040e19] h-[3.7rem] w-[3.7rem] shadow-lg`}>
                            <img className='w-[3.4rem] h-[3.4rem] rounded-full mt-[3px] z-1' src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4oaZ0g2KQTezYZXoKkhJfo%2F997a6929369200ba3d8d3613b2c85dc6%2Fraymond-daniels-body-image.png%3Ffm%3Dwebp&w=640&q=75" alt="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='text-gray-200 text-[15px] font-medium'>I will teach live online MMA</span>
                            {/* <button className='mt-1 flex flex-row items-center bg-[#6B37D8] whitespace-nowrap duration-200 transition ease-in-out w-[5.2rem] justify-center items-center gap-2 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-2 lg:py-1 font-medium rounded-md text-[11px]'>
                                In progress
                            </button> */}
                            <span className='text-[#6997d6] text-[11px] uppercase font-bold mt-1' style={{ letterSpacing: '0.5px' }}>John Doe</span>
                        </div>
                    </div>

                    <div className='flex flex-row gap-2 items-end mt-4 border-t border-[#5b5b5b] pt-5'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-row'>
                                <div className='flex flex-col gap-3' style={{ borderRight: '1px #5b5b5b solid', paddingRight: '47px' }}>
                                    <h2 style={{ color: 'rgb(110 153 210)', fontSize: '11px' }} className='uppercase font-semibold'>training status</h2>
                                    <button style={{ fontSize: '9px', backgroundColor: 'rgb(97 44 204)', lineHeight: '12px' }} className='py-1 flex flex-col justify-center items-center uppercase font-semibold rounded-md'>in progress</button>
                                </div>
                                <div className='flex flex-col gap-2 pl-[47px]'>
                                    <h2 style={{ color: 'rgb(110 153 210)'}} className='text-[11px] uppercase font-semibold'>training category</h2>
                                    <span className='text-gray-200 text-[14px] font-semibold'>MMA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='z-10 p-[1.4rem] rounded-lg mx-auto max-w-[79rem] dark:bg-gray-800 flex flex-col items-start gap-6 relative top-[14rem]'>
                <div className="flex gap-2.5 justify-start items-center w-full">
                    <div className='flex flex-col gap-6 items-center'>
                        <div className='dark:bg-gray-700 flex flex-col justify-center items-center p-[.68rem] rounded-full '>
                            <svg fill='#fff' width={'18'} height={'18'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="rounded flex flex-row gap-2 items-center">
                            <h2 className="text-white text-[14px] font-semibold leading-snug">Your training has started</h2>
                            <h3 className="text-gray-200 text-[14px] font-normal leading-4">Oct 18, 2023, 3:52 PM</h3>
                        </div>
                    </div>
                </div>
                <div className="grid w-full">
                    <div className="flex gap-2.5">
                        <div className='flex flex-col gap-6 items-center'>
                            <img className="w-10 h-10 rounded-full bg-[#040e19]" src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F4oaZ0g2KQTezYZXoKkhJfo%2F997a6929369200ba3d8d3613b2c85dc6%2Fraymond-daniels-body-image.png%3Ffm%3Dwebp&w=640&q=75" alt="" />
                            <div className='h-full w-[1px] bg-[#374151FF]'></div>
                        </div>
                        <div className="flex flex-col w-full max-w-[326px] leading-1.5 px-3 py-2 border-gray-200 bg-gray-100 rounded dark:bg-gray-700">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">John Doe</span>
                            </div>
                            <div className="group relative my-2.5">
                                <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                    <button data-tooltip-target="download-image" className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50">
                                        <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
                                        </svg>
                                    </button>
                                    <div id="download-image" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                        Download image
                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                    </div>
                                </div>
                                <img src="https://flowbite.com/docs/images/blog/image-2.jpg" className="rounded-lg" />
                            </div>
                            <p className="text-sm font-normal text-gray-900 dark:text-white">This is the new office</p>
                            <div className='flex flex-row gap-1 items-center justify-start'>
                                <h3 className="text-gray-400 text-xs font-normal leading-4">Oct 18, 2023, 3:52 PM</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-check-all" viewBox="0 0 16 16">
                                    <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2.5 justify-start w-full">
                    <div className='flex flex-col gap-2 items-center'>
                        <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                    </div>
                    <div className="">
                        <div className="grid mb-2">
                            <div className="px-3 py-2 bg-[#612ccc] rounded flex flex-col gap-1 items-start">
                                <h2 className="text-white text-sm font-normal leading-snug">Yes, let’s see, send your work here</h2>
                                <div className='flex flex-row gap-1 items-center justify-end'>
                                    <h3 className="text-gray-200 text-xs font-normal leading-4">Oct 18, 2023, 3:52 PM</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-check-all" viewBox="0 0 16 16">
                                        <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="justify-center">
                            <div className="grid w-fit mr-auto">
                                <div className="px-3 py-2 bg-[#612ccc] rounded flex flex-col gap-1 items-start">
                                    <h2 className="text-white text-sm font-normal leading-snug">Anyone on for lunch today</h2>
                                    <div className='flex flex-row gap-1 items-center justify-end'>
                                        <h3 className="text-gray-200 text-xs font-normal leading-4">Oct 18, 2023, 3:52 PM</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-check-all" viewBox="0 0 16 16">
                                            <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center w-full gap-4 justify-between dark:bg-gray-800 border-t border-[#374151FF] pt-4" style={{ borderBottomRightRadius: '0.5rem' }}>
                    <div className="flex flex-row items-center gap-1">
                        <button className="bg-transparent rounded-full dark:bg-gray-700 flex flex-row items-center justify-center gap-2 w-[115px] p-2.5 rounded-full transition duration-200 ease-in-out hover:bg-gray-700">
                            <svg width="19" height="19" fill="rgb(192 196 203)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/>
                            </svg>
                            <span className='text-[12px] font-semibold'>
                                Video call
                            </span>
                        </button>
                        <button className="bg-transparent p-2 rounded-full transition duration-200 ease-in-out hover:bg-gray-700">
                            <svg width="24" height="24" fill="rgb(192 196 203)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                            </svg>
                        </button>
                        <button className="bg-transparent p-2 rounded-full transition duration-200 ease-in-out hover:bg-gray-700">
                            <svg width="20" height="20" fill="rgb(192 196 203)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="w-full pl-3.5 pr-2 py-3 rounded-md dark:bg-gray-900 items-center gap-2 inline-flex justify-between">
                        <div className="flex items-center gap-2 w-full">
                            <input className="grow shrink basis-0 bg-transparent text-sm font-medium text-gray-200 leading-4 focus:outline-none" placeholder="Type a message..." />
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="items-center flex px-3 py-2rounded-full shadow ">
                                <svg width="18" height="18" fill="rgb(192 196 203)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
                                </svg>
                            </button>
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
