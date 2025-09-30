import Link from '@/node_modules/next/link';
import Navbar from '../../../components/Home/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import classes from '../../../my-training/all-trainings/MyTraining.module.css';

export default function TrainingMedia() {
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
                            <Link href={'/my-training/dashboard/health-hub'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs">Health hub</Link>
                            <Link href={'/my-training/dashboard/media'} className="whitespace-nowrap duration-200 transition ease-in-out w-full bg-gray-800 hover:bg-gray-700 flex flex-col justify-center items-center gap-4 text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs" style={{ backgroundColor: 'rgb(107, 55, 216)' }}>Media</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`z-10 p-[1.5rem] rounded-lg mx-auto max-w-[79rem] dark:bg-gray-800 flex flex-col items-start gap-4 relative top-[10rem]`}>
                <div className='flex flex-col items-start gap-[3px] w-full'>
                    <h5 className='font-semibold text-[20px] flex flex-row items-start justify-between w-full'>
                        Training media
                        <button className='flex flex-row items-center gap-2 bg-[#612ccc] whitespace-nowrap duration-200 transition ease-in-out text-gray-100 font-semibold lg:btn-5xl capitalize inline-block lg:px-4 lg:py-2.5 font-medium rounded-full text-xs'>
                            <svg fill='#fff' width={'14'} height={'14'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                            </svg>
                            Upload
                        </button>
                    </h5>
                    <span className='text-gray-300 text-[13px]'>You can upload your photos to show the progress you made!</span>
                </div>
                
                <div className='mt-3 grid grid-cols-1 gap-y-0 px-0 lg:grid-cols-3 lg:gap-4 w-full'>
                    <div className='bg-[#6B728080] flex flex-row items-center justify-between p-3 rounded-lg'>
                        <div className={`h-[220px] relative`}>
                            <img className='h-full w-[11.1rem] rounded-lg object-cover' src="https://img.huffingtonpost.com/asset/616466a6240000fd27507459.jpg?ops=scalefit_500_noupscale" alt="product image" />
                            <div className='h-full w-[11.1rem] z-2 absolute left-0 right-0 bottom-0 top-0 rounded-lg'></div>
                            <button className='bg-[#00000033] w-[27px] h-[27px] border-0 absolute right-0 top-0 m-2 rounded-lg transition duration-200 ease-in-out'>
                                <svg className='m-auto' fill='rgb(223 219 219)' width={'14'} height={'14'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </button>
                        </div>
                        <div className={`h-[220px] relative`}>
                            <img className='h-full w-[11.1rem] rounded-lg object-cover' src="https://s3.envato.com/files/307621319/DSC06821%20copy.jpg" alt="product image" />
                            <div className='h-full w-[11.1rem] z-2 absolute left-0 right-0 bottom-0 top-0 rounded-lg'></div>
                            <button className='bg-[#00000033] w-[27px] h-[27px] border-0 absolute right-0 top-0 m-2 rounded-lg transition duration-200 ease-in-out'>
                                <svg className='m-auto' fill='rgb(223 219 219)' width={'14'} height={'14'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
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
