import classes from './Coaches.module.css';


export default function Coaches() { 
    return (
        <div className={`${classes.coaches} relative mx-auto`}>
            <div className={`${classes.coachesTitle} flex justify-between items-center`}>
                <h1 className='uppercase'>coaches</h1>
                <a className="rounded-sm trasition text-center duration-300 ease-in-out py-3 text-white font-bold uppercase transition duration-300 ease-in-out">
                    view all coaches
                </a>
            </div>
            <div className={`${classes.coachList} flex items-center gap-8 mt-8`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="absolute top-62 z-10 h-8 w-auto xl:-right-10 cursor-pointer fill-colorWhite">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#373a5d" aria-hidden="true" className="absolute top-62 z-10 h-8 w-auto xl:-left-10 cursor-not-allowed">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path>
                </svg>
                <div className={`${classes.coachCard} w-full max-w-sm pt-3 bg-white rounded-md shadow-md dark:bg-gray-800 trasition duration-300 ease-in-out`}>
                    <div className={`${classes.coachInfo} flex flex-col items-center justify-between relative h-full`}>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className="mt-2 font-semibold text-gray-800 dark:text-white uppercase text-center">Rafael Aghayev</h1>
                            <span className='font-semibold text-center'>Welterweight champion</span>
                        </div>
                        <div className={`${classes.coachCover} absolute`}>
                            <img src="/icons/family-smoke-7.png" alt="Family Stroke" />
                        </div>
                        <div className={`${classes.coachProfileImg}`}>
                            <img className='h-full' src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F6INqkCNfNL5al8RfzygwaA%2F9fc0f657ba97ba0416d1c7d87da77d3f%2Frafael_aghayev_var1.png%3Ffm%3Dwebp&w=640&q=75" alt="" />
                        </div>
                    </div>
                </div>
                <div className={`${classes.coachCard} w-full max-w-sm pt-3 bg-white rounded-md shadow-md dark:bg-gray-800 trasition duration-300 ease-in-out`}>
                    <div className={`${classes.coachInfo} flex flex-col items-center justify-between relative h-full`}>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className="mt-2 font-semibold text-gray-800 dark:text-white uppercase text-center">Rafael Aghayev</h1>
                            <span className='font-semibold text-center'>Welterweight champion</span>
                        </div>
                        <div className={`${classes.coachCover} absolute`}>
                            <img src="/icons/family-smoke-7.png" alt="Family Stroke" />
                        </div>
                        <div className={`${classes.coachProfileImg}`}>
                            <img className='h-full' src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F5Jyp53aJG24I5dF3E5iLZS%2Ff454d5f1d600364bc9c41bc41adbfb52%2FKC_43_Var1_1000x1200_FaceOff_Melinda_Fabian.png%3Ffm%3Dwebp&w=640&q=75" alt="" />
                        </div>
                    </div>
                </div>
                <div className={`${classes.coachCard} w-full max-w-sm pt-3 bg-white rounded-md shadow-md dark:bg-gray-800 trasition duration-300 ease-in-out`}>
                    <div className={`${classes.coachInfo} flex flex-col items-center justify-between relative h-full`}>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className="mt-2 font-semibold text-gray-800 dark:text-white uppercase text-center">Sam Alvey</h1>
                            <span className='font-semibold text-center'>Heavyweight champion</span>
                        </div>
                        <div className={`${classes.coachCover} absolute`}>
                            <img src="/icons/family-smoke-7.png" alt="Family Stroke" />
                        </div>
                        <div className={`${classes.coachProfileImg}`}>
                            <img className='h-full' src="https://karate.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F4jrjxv6ydu11%2F79ILkJhTV5p6tFlxL4hdks%2F16ce937cd88b8eeae19dbfd79e57e99e%2FQmT6WdPxcvzSjCzaDqKKQNwjF6F3xMyZoxiAz6aDnfVSMV%3Ffm%3Dwebp&w=640&q=75" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}