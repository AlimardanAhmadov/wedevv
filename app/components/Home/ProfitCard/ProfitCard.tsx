import Image from 'next/image';

export default function ProfitCard() { 
    return (
        <div className='max-w-[79rem] mx-auto top-[44rem] relative bg-[#0c172b] px-[1rem] py-[4rem] rounded-3xl flex flex-row items-center gap-[4rem]'>
            <div className='flex flex-col gap-3'>

            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='uppercase text-[2.30rem] max-w-[17rem] font-[800]' style={{ lineHeight: '50px' }}>how does it work?</h1>
                <p className='text-[16px] font-[700] text-gray-400 max-w-[25rem]'>Your success is our priority – You control the pricing, setting your own margins to achieve the profit that works best for you.</p>
                <div className='flex flex-col gap-5'>
                    <p className='text-[18px] font-[700] text-gray-100 max-w-[25rem]'>Define your earnings</p>
                    <div className='flex flex-row items-center gap-6 h-[3rem]'>
                        <button className="bg-[#f5d45c] w-[2.9rem] h-full rounded-md flex flex-col items-center justify-center">
                            <Image alt="" src={'/icons/minus.svg'} width={'26'} height={'26'} />
                        </button>
                        <div className='w-[23rem] h-[3.1rem] rounded-lg w-[200px] border-2 border-[#b1c1cb] flex flex-col items-center justify-center'>
                            <p className='font-semibold'>$21.00</p>
                        </div>
                        <button className="bg-[#f5d45c] w-[2.9rem] h-full rounded-md flex flex-col items-center justify-center">
                            <Image alt="" src={'/icons/plus.svg'} width={'26'} height={'26'} />
                        </button>
                    </div>
                    <div className='grid grid-cols-2 gap-y-8 gap-6 mt-3'>
                        <div className='relative'>
                            <div className='bg-[#323D4B] absolute bottom-[-7px] w-[15rem] h-[11rem] right-[-4px] rounded-md z-0'></div>
                            <div className='w-[15rem] h-[11rem] bg-[#1F2937] rounded-md px-5 py-4 z-1 relative'>
                                <div className='flex flex-col'>
                                    <p className='font-bold text-gray-100 text-[20px] tracking-wider'>$21.00</p>
                                    <p className='font-semibold text-gray-400 text-[15px]'>Price</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <div className='bg-[#341A6B] absolute bottom-[-7px] w-[15rem] h-[11rem] right-[-4px] rounded-md z-0'></div>
                            <div className='w-[15rem] h-[11rem] bg-[#612CCC] rounded-md px-5 py-4 z-20 relative'>
                                <div className='flex flex-col'>
                                    <p className='font-bold text-gray-100 text-[20px] tracking-wider'>$17.14</p>
                                    <p className='font-semibold text-gray-100 text-[15px]'>Price</p>
                                    <span className='font-[400] text-gray-100 text-[15px] mt-1'>What you profit</span>
                                    <Image alt="" className="absolute bottom-0 right-0 m-4" src={'/icons/dollar.svg'} width={'45'} height={'45'} />
                                </div>
                            </div>
                        </div>
                        <button className='w-[15rem] bg-[#ff8256] rounded-full px-5 py-3 flex flex-row items-center mt-2'>
                            <p className='font-semibold text-gray-100 text-[15px] w-full text-center'>Connect your account</p>
                            <svg className='mt-[2px]' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                <path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}