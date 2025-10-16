'use client';

import classes from './Process.module.css';

export default function Process() { 
    return (
        <div id="process" className='relative top-[17rem] px-[5rem] flex flex-col gap-[3rem]'>
            <section>
                <h2 className='flex flex-col products-title text-left font-[300] text-[#fff] mx-auto gap-2' style={{ lineHeight: '1.04', letterSpacing: '-.04em', fontSize: 'clamp(2.5rem,calc(3.8095vw + 1.5714rem),4rem)', textWrap: 'balance' }}>
                    <div className='uppercase gradient-text' style={{ fontWeight: 'calc(300 + 200)', fontSize: 'clamp(.875rem,calc(.1905vw + .8286rem),1rem)', lineHeight: '1.08', letterSpacing: '.04em' }}>Work Process</div>
                    <div>
                        <span>
                            Road to your <span className='gradient-text'>Success</span>
                        </span>
                    </div>
                </h2>
            </section>
            <div>
                <div className='flex flex-col items-center gap-[4rem] relative'>
                    <div className={`${classes.lines} flex flex-row items-center`}>
                        <div className={`${classes.line}`}>
                            <div className={`${classes.movingLine}`}></div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-between flex-wrap w-full'>
                        <div className={`scale-target cursor-pointer w-[25rem] h-auto rounded-3xl shadow-2xl flex flex-col gap-2 items-start justify-start p-8`}>
                            <div className='flex flex-row items-center gap-[18px] text-[18px] font-light'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#d96570">
                                    <path d="M190-520q-21 0-35.5-14.5T140-570q0-21 14.5-35.5T190-620q21 0 35.5 14.5T240-570q0 21-14.5 35.5T190-520Zm580 0q-21 0-35.5-14.5T720-570q0-21 14.5-35.5T770-620q21 0 35.5 14.5T820-570q0 21-14.5 35.5T770-520ZM40-440Zm880 0ZM160-80H80v-160h160q-66 0-113-47T80-400h80q0 33 23.5 56.5T240-320v-120h108l-38-155q-23-92-98.5-148.5T40-800v-80q123 0 220.5 73T387-615l52 205q5 19-7 34.5T400-360h-80v120q0 33-23.5 56.5T240-160h-80v80Zm720 0h-80v-80h-80q-33 0-56.5-23.5T640-240v-120h-80q-20 0-32-16t-6-36l51-203q32-115 127-190t220-75v80q-95 0-170.5 57T651-595l-39 155h108v120q33 0 56.5-23.5T800-400h80q0 66-47 113t-113 47h160v160ZM320-240v-80 80Zm320 0v-80 80Z"/>
                                </svg>
                                Step 1
                            </div>
                            <span className='font-semibold text-[25px]'>Discovery</span>
                            <div className='text-gray-500'>Understanding your needs and defining project scope.</div>
                        </div>
                        <div className={`scale-target cursor-pointer w-[25rem] h-auto rounded-3xl shadow-2xl flex flex-col gap-2 items-start justify-start p-8`}>
                            <div className='flex flex-row items-center gap-[18px] text-[18px] font-light'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0842a0">
                                    <path d="m352-522 86-87-56-57-44 44-56-56 43-44-45-45-87 87 159 158Zm328 329 87-87-45-45-44 43-56-56 43-44-57-56-86 86 158 159Zm24-567 57 57-57-57ZM290-120H120v-170l175-175L80-680l200-200 216 216 151-152q12-12 27-18t31-6q16 0 31 6t27 18l53 54q12 12 18 27t6 31q0 16-6 30.5T816-647L665-495l215 215L680-80 465-295 290-120Zm-90-80h56l392-391-57-57-391 392v56Zm420-419-29-29 57 57-28-28Z"/>
                                </svg>
                                Step 2
                            </div>
                            <span className='font-semibold text-[25px]'>Design & Development</span>
                            <div className='text-gray-500'>Building user-focused experiences from concept to click.</div>
                        </div>
                        <div className={`scale-target cursor-pointer w-[25rem] h-auto rounded-3xl shadow-2xl flex flex-col gap-2 items-start justify-start p-8`}>
                            <div className='flex flex-row items-center gap-[18px] text-[18px] font-light'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#9b72cb">
                                    <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/>
                                </svg>
                                Step 3
                            </div>
                            <span className='font-semibold text-[25px]'>Deliver</span>
                            <div className='text-gray-500'>Delivering your solution with cutting-edge technology.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
