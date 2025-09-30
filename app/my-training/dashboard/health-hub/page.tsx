import Link from '@/node_modules/next/link';
import Navbar from '@/app/components/Home/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import Image from 'next/image';
import classes from '../../../my-training/all-trainings/MyTraining.module.css';


export default function HealthHub() {
    return (
        <>
            <Navbar />
            <div className={`h-[270px] absolute top-0 left-0 w-full`}></div>
            <div className={`max-w-[79rem] relative top-[7rem] mx-auto flex flex-row items-center justify-between`}>
                <div className='flex flex-col gap-1 w-full'>
                    <div className={`mx-auto relative top-[18px] flex flex-row items-start w-full`}>
                        <div className="flex items-center gap-3 w-[280px]">
                            <Link href={'/my-training/dashboard/activity'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs">Activity</Link>
                            <Link href={'/my-training/dashboard/training'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs">Training</Link>
                            <Link href={'/my-training/dashboard/health-hub'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs" style={{ backgroundColor: 'rgb(107, 55, 216)' }}>Health hub</Link>
                            <Link href={'/my-training/dashboard/media'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs">Media</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start gap-5 relative top-[10rem] mx-auto max-w-[79rem]'>
                <div className={`z-10 py-[1.3rem] rounded-lg dark:bg-gray-800 flex flex-row items-start gap-4 w-full`}>
                    <div className='z-10 p-[1.5rem] rounded-lg dark:bg-gray-800 flex flex-col items-start gap-6 relative'>
                        <div className='flex flex-row items-center'>
                            <div className='w-[8rem] h-[9rem] p-[15px]'>
                                <Image alt="" src={'/icons/google_fit.svg'} width={'75'} height={'75'} />
                            </div>
                            <div className='flex flex-col gap-[4px]'>
                                <h2 className='text-[25px] font-semibold'>Google Fit</h2>
                                <h3 className='text-[#8FB8D0]'>Connect to Google Fit and step into your best self!</h3>
                                <button className='mt-[12px] flex flex-row items-center justify-center gap-[10px] border-[#8FB8D0] border-2 rounded-[5px] w-[11.5rem] text-[12px] py-[10px] px-[10px] font-semibold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 48 48">
                                        <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                        <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                        <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                        <path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg>
                                    Continue with Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`z-10 py-[1.3rem] rounded-lg dark:bg-gray-800 flex flex-row items-start gap-4 w-full`}>
                    <div className='z-10 p-[1.5rem] rounded-lg dark:bg-gray-800 flex flex-col items-start gap-6 relative'>
                        <div className='flex flex-row items-center gap-[6px]'>
                            <div className='w-[8rem] h-[9rem] mb-[26px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#424242" d="M34,42H14c-4.411,0-8-3.589-8-8V14c0-4.411,3.589-8,8-8h20c4.411,0,8,3.589,8,8v20	C42,38.411,38.411,42,34,42z"></path><path fill="#f50057" d="M24,38c-7.72,0-14-6.28-14-14s6.28-14,14-14s14,6.28,14,14S31.72,38,24,38z M24,13	c-6.065,0-11,4.935-11,11s4.935,11,11,11s11-4.935,11-11S30.065,13,24,13z"></path><path fill="#d4e157" d="M24,34c-5.514,0-10-4.486-10-10s4.486-10,10-10s10,4.486,10,10S29.514,34,24,34z M24,17	c-3.859,0-7,3.14-7,7s3.141,7,7,7s7-3.14,7-7S27.859,17,24,17z"></path><path fill="#26c6da" d="M24,30c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S27.309,30,24,30z M24,21c-1.654,0-3,1.346-3,3	s1.346,3,3,3s3-1.346,3-3S25.654,21,24,21z"></path><path fill="#00897b" d="M26.9,18.74C26.04,18.27,25.05,18,24,18l1,1.5L24,21c0.75,0,1.45,0.29,1.98,0.75	C26.6,21.2,27,20.39,27,19.5C27,19.24,26.97,18.98,26.9,18.74z"></path><path fill="#26c6da" d="M25.5,19.5c0,0.828-0.672,1.5-1.5,1.5v-3C24.828,18,25.5,18.672,25.5,19.5z"></path><path fill="#9e9d24" d="M26.78,14.4C25.9,14.14,24.97,14,24,14l1,1.5L24,17c0.81,0,1.6,0.14,2.32,0.4	c0.42-0.52,0.68-1.19,0.68-1.9C27,15.11,26.92,14.74,26.78,14.4z"></path><path fill="#d4e157" d="M25.5,15.5c0,0.828-0.672,1.5-1.5,1.5v-3C24.828,14,25.5,14.672,25.5,15.5z"></path><path fill="#c2185b" d="M26.73,10.26C25.85,10.09,24.93,10,24,10l1,1.5L24,13c0.83,0,1.64,0.09,2.42,0.27	c0.36-0.5,0.58-1.11,0.58-1.77C27,11.06,26.9,10.64,26.73,10.26z"></path><path fill="#f50057" d="M25.5,11.5c0,0.828-0.672,1.5-1.5,1.5v-3C24.828,10,25.5,10.672,25.5,11.5z"></path>
                                </svg>
                            </div>
                            <div className='flex flex-col gap-[4px]'>
                                <h2 className='text-[25px] font-semibold'>Apple Health</h2>
                                <h3 className='text-[#8FB8D0]'>Connect to Apple Health and step into your best self!</h3>
                                <span className='shadow-lg mt-[10px] text-[11px] text-gray-300 p-2 rounded-lg bg-gray-700'>On your iPhone go to Health App -> Profile -> Export data -> Send to your computer.</span>
                                <button className='mt-[12px] flex flex-row items-center justify-center gap-[10px] border-[#8FB8D0] border-2 rounded-[5px] w-[11.5rem] text-[12px] py-[10px] px-[10px] font-semibold'>
                                    <svg width={'15'} height={'15'} fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z"/>
                                    </svg>
                                    Upload Health Data
                                </button>
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