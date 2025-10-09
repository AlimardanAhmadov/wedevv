import Link from 'next/link';
import classes from './InfoSection.module.css';

export default function InfoSection(props: any) { 
    return (
        <div id='career' className={`bg-[#07121f] shadow-lg top-[80rem] relative mx-auto flex flex-row items-center max-w-[79rem] rounded-2xl p-[4rem] justify-between relative overflow-hidden`}>
            <div className='flex flex-col gap-3'>
                <div className="orb3 absolute z-0 glow-2 top-[12cqw] left-[49cqw] w-[13rem] h-[13rem] rounded-full opacity-30 transform scale-200 -rotate-[30deg] bg-[radial-gradient(ellipse_at_center,rgb(54,113,162,0.21),#06101c_75%,#06101c)]"></div>
                <div className="orb2 absolute z-0 glow-2 top-[13cqw] left-[37cqw] w-[13rem] h-[13rem] rounded-full opacity-30 transform scale-200 -rotate-[30deg] bg-[radial-gradient(ellipse_at_center,rgb(54,113,162,0.4),#06101c_75%,#06101c)]"></div>    
                <section>
                    <h2 className='flex flex-col products-title text-left font-[300] text-[#fff] text-left mx-auto gap-2' style={{ lineHeight: '1.04', letterSpacing: '-.04em', fontSize: 'clamp(2.5rem,calc(3.8095vw + 1.5714rem),1rem)', textWrap: 'balance' }}>
                        <div>
                            <span>
                                Join our team at <span className='text-[#36F4A4]'>WeDev</span>
                            </span>
                        </div>
                    </h2>
                </section>
                <div className='flex flex-col gap-4 mt-3 max-w-[35rem]'>
                    At WeDev, we’re shaping the future of the web. If you’re driven by creativity, technology, and problem-solving, join our team and explore career opportunities where your ideas can truly make an impact.
                </div>
                <Link href={'https://forms.gle/k4ZHH5KMSh2hJuhv6'} target='_blank' className="mt-4 duration-200 w-[200px] transition ease-in-out bg-[#36F4A4] text-[#323232] flex flex-row justify-center items-center gap-1 text-gray-100 font-semibold inline-block px-4 py-[19px] font-medium rounded-full text-xs z-20">
                    <span className='capitalize text-[18px] text-[#494949]'>Apply Now</span>
                </Link>
                {/* <a type='button' className="w-[13rem] rounded-md text-center py-4 bg-white hover:bg-gray-300 text-black text-sm font-bold uppercase transition duration-300 ease-in-out">
                    how it works
                </a> */}
            </div>
        </div>
    )
}