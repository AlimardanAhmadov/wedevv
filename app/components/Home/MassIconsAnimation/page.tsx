import classes from '../MassIconsAnimation/MassIconsAnimation.module.css';
import Image from 'next/image';

export default function MassIconsAnimation() {
    const images = [
        // "https://img.icons8.com/color/96/tiktok--v1.png",
        "https://img.icons8.com/color/96/shopify.png",
        "/icons/squarespace.png",
        // "/icons/visa-white.png",
        // "/icons/master-card.png",
        "/icons/apple-fitness.png",
        // "/icons/2d-discord.png",
        "/icons/google_fit.svg"
    ]
    
    return (
        <>
            <div id='about' style={{ backgroundImage: 'linear-gradient(0deg, #0a1825 20%, #0b163a)', maskImage: 'linear-gradient(to bottom, rgb(10, 24, 37), rgb(0, 0, 0), transparent)' }} className="relative top-[19rem] flex flex-row gap-[3rem] rounded-t-[5rem] pt-[4rem] h-[50rem]">
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
                <div className="mx-[5rem] flex flex-col gap-[4rem] relative w-full">
                    <div className='flex flex-col gap-2 items-start'>
                        <section>
                            <h2 className='flex flex-col products-title text-left font-[300] text-[#fff] text-left mx-auto gap-2' style={{ lineHeight: '1.04', letterSpacing: '-.04em', fontSize: 'clamp(2.5rem,calc(3.8095vw + 1.5714rem),4rem)', textWrap: 'balance' }}>
                                <div>
                                    <span>
                                        About Us. <span className='text-[#36F4A4]'>All-in-One</span> <br /> Digital Expertise.
                                    </span>
                                </div>
                            </h2>
                        </section>
                        <p className='richtext text-[16px] text-gray-400 max-w-[36rem]'>At WeDev, we transform concepts into powerful digital solutions. With expertise in design and development, we help businesses create experiences that engage and perform.</p>
                    </div>
                    <div className='flex flex-row items-center gap-[2rem]'>
                        <div className='flex flex-col gap-2 items-start mt-8 max-w-[35rem] border-t border-[#13293E] pt-[8px]'>
                            <h4 className='text-[17px] font-semibold text-[#36F4A4] flex flex-row items-center gap-1'>
                                <svg width={'17'} height={'17'} fill="#36F4A4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0L109.6 0C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9c0 0 0 0-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3L448 384l-320 0 0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3L64 384l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64 0-131.4c-4 1-8 1.8-12.3 2.3z"/>
                                </svg>
                                Build your brand
                            </h4>
                            <p className='richtext text-body-sm text-gray-400 max-w-[17rem]'>Empower your brand with seamless innovative solutions.</p>
                        </div>
                        <div className='flex flex-col gap-2 items-start mt-8 max-w-[35rem] border-t border-[#13293E] pt-[8px]'>
                            <h4 className='text-[17px] font-semibold text-[#36F4A4] flex flex-row items-center gap-1'>
                                <svg width={'17'} height={'17'} fill="#36F4A4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/>
                                </svg>
                                Online Presence
                            </h4>
                            <p className='richtext text-body-sm text-gray-400 max-w-[17rem]'>Build a strong online business with ease.</p>
                        </div>
                    </div>
                    <div className='max-w-[33rem] text-gray-300 pl-[25px] border-l border-[#36F4A4]' style={{ borderLeftWidth: '3px' }}>
                        WeDev provides end-to-end digital services — from UI/UX design to full-stack development and platform optimization — enabling businesses to enhance their online presence and operational efficiency
                    </div>

                    <div className={`${classes.flyingImages} absolute right-0 top-[3rem] flex flex-col items-center justify-center gap-[6rem]`}>
                        <div style={{ animation: '3s ease 0s infinite normal none running bounce1' }} className="bg-white/30 relative top-[0rem] right-0 z-[2] w-[6rem] h-[6rem] rounded-3xl shadow-2xl flex flex-col items-center justify-center">
                            <Image alt="" src={'data:image/png;base64,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'} width={'45'} height={'45'} />
                        </div>
                        <div className='w-full'>
                            <div className='absolute w-[450px] h-[450px] top-[4rem] right-[3rem] flex flex-col items-center justify-center'>
                                <img className='w-full h-full rounded-2xl' src="https://cdn.shopify.com/b/shopify-brochure2-assets/4189185257135c76a4e8be6de7f38046.jpg?originalWidth=1920&originalHeight=1732&width=1400" alt="" />
                            </div>
                        </div>
                        <div style={{ animation: '3s ease 0s infinite normal none running bounce2' }} className='absolute top-[-3rem] right-[17rem] flex flex-col gap-[3.24rem] items-center justify-center'>
                            <div
                                className={`${classes.icon} bg-white/10 rounded-3xl w-[5rem] min-h-[5rem] h-[5rem] flex flex-col items-center justify-center transition-all duration-1000`}
                                style={{
                                top: '50%',
                                }}
                            >
                                <img 
                                width="45"
                                height="45" 
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsklEQVR4nO2WS0sCURTH57MZVJvGxIyy0R6kGGOZVj6yJEvGVwUyYG1cKJRZ6UxqtY6wiCKiIvw2/5hZSJGjFTMqdQ+czXlcfpfzuJeiiPwXEWp19JJSBLBGAOsEUPgpoI5mekIFAkgTQIYA6roJaJh2gBcz3QPsH5lE37BF0b+e3gaX5T/ZBoxTnQEcmrAhe1WAMxxq6u/TW1B4EGFmFxs2+2oAuesCaMamLaBxZg5H9wJCezuKMVb3Eg5vi1/s3l0Oxw8iTDanNoCWBQ9KzxV4Ylst45L5PQRSsaY+V2QDwktVvoSqgI61IMTXc8z6/a170ziJ8tsF9Fa7YszMilc+i91YVwfQtxtF8amMMcd829I4wyHsX+baxo2zLhSfKlhORjoLuH+ZUxyej2qysTh5PEOQT3SuxLTFLpdXWkHte7kKd3RToyGJNx+SQCqOxGG65RmNi/p86g7Jd9bMwc0prG6PYq53h5P7Tuq/ji9qM7soL2dpSTfLkRZ1/q4Ew5SjO08dl+Xl500xR89gcHS6e58FXszIH4Tf5msOqFNZCaCOANIEEH8TUOghpYj8F3kH0lkO62AO9l8AAAAASUVORK5CYII="
                                alt={`icon-1`}
                                />
                            </div>
                        </div>
                        <div style={{ animation: '3s ease 0s infinite normal none running bounce1' }} className='absolute right-[20rem] bottom-[-27rem] flex flex-col gap-[3.24rem] items-center justify-center'>
                            <div
                                className={`${classes.icon} bg-white/10 rounded-3xl w-[5rem] min-h-[5rem] h-[5rem] flex flex-col items-center justify-center transition-all duration-1000`}
                                style={{
                                top: '50%',
                                }}
                            >
                                <img
                                width="45"
                                height="45"
                                src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACZklEQVR4nO2XW2vUQBTH50k/hF9HEBHUVy+4RSwqWD+B14KoKPgi3vDdBy+It4+gawvutt101+pmszOJmGS3bNImmZmXI+dsE1LQh2WTjQ8NHDIzmcz/l3POzGQY27k2APYLqS9zqeo8UdtCaijScMzx2HoBtVj+4lF0gCe6WbTov2F0AzWzL5+leB6CPIFun7V4DuISE4n6WhmAVF8YT9RWdR5QW6wq8dTYHoCYoPOHQQinWgLmDAGP7SFwSiQNj+wh1AwBJ1sCPg3C8gDOdxwwYwV9qQkA6xfbDjxzNgnkR6zgQscpD2C+bWdlFMSvrhk2AaXt53J9SgHgUkMvUbDY8+Ca6cJ104WbpkdtvCyAvtTw0h3B4aZFcT6yc79reWT5tkMNC954wS6vTAVQD2I4sSbgjuXBOz+AG6ZHifg9krAURLAcRlQ+3bLJE2/9AG73xlD47tQANcMGI0qy+rFmnxIQxe/3fTKEeOoM6Vnab207oXenBphbF9CJZFY/vjIGQNE8ALZhGNJ+q0UB1IOYsv2JPaQ5jkmXhgCFl8M4C8Gtngev3BE84AM4Y9iwVEQIhNRgJRpe/B7BwW89yoejK30SvGf5ZGkSIhj2ee2NiktCkTOcYjjVfsaKEu5q16XpeKXrQjdWWZ9JxmSTAqRlBDm7bpMn0EN/W6wKB5hv27QUo/jzX5sEhEtvuhSjF3B5Lg3gvR9SvHEzeigGFOd0M8I2fPaxzM1IlGBsD4BX+FMqEhX8D7/leqHSg8nG+GjWqEC80QLYlz+czgxi1+E0vZAGXYJxKSMxcUwu1WfUyL6cMfYHCQHJ1uL8SZkAAAAASUVORK5CYII='}
                                alt={`icon-2`}
                                />
                            </div>
                        </div>
                        <div style={{ animation: '3s ease 0s infinite normal none running bounce1' }} className='absolute left-[-32rem] top-[12rem] flex flex-col gap-[3.24rem] items-center justify-center'>
                            <div
                                className={`${classes.icon} bg-white/10 rounded-3xl w-[5rem] min-h-[5rem] h-[5rem] flex flex-col items-center justify-center transition-all duration-1000`}
                                style={{
                                top: '50%',
                                }}
                            >
                                <img
                                width="45"
                                height="45"
                                src={'data:image/png;base64,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'}
                                alt={`icon-3`}
                                />
                            </div>
                        </div>
                        <div style={{ animation: '3s ease 0s infinite normal none running bounce2' }} className='absolute right-[-3rem] top-[23rem] flex flex-col gap-[3.24rem] items-center justify-center'>
                            <div
                                className={`${classes.icon} bg-white/10 rounded-3xl w-[5rem] min-h-[5rem] h-[5rem] flex flex-col items-center justify-center transition-all duration-1000`}
                                style={{
                                top: '50%',
                                }}
                            >
                                <img
                                width="45"
                                height="45"
                                src={'data:image/png;base64,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'}
                                alt={`icon-3`}
                                />
                            </div>
                        </div>
                        <div style={{ animation: '3s ease 0s infinite normal none running bounce2' }} className='absolute left-[-29rem] top-[19rem] flex flex-col gap-[3.24rem] items-center justify-center shadow-2xl'>
                            <div className="w-[190px] rounded-2xl bg-[#11293e] absolute left-[-6rem] top-16 flex flex-col gap-1 z-20 p-[18px]">
                                <span className="text-[11px] font-medium">New Customers Today</span>
                                <div className="text-[15px] font-semibold tracking-tight text-white flex flex-row items-center justify-between" style={{ letterSpacing: '0.2px' }}>
                                    <div className='flex flex-row items-center'>
                                        <svg fill='#fff' width={'11'} height={'11'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
                                        </svg>
                                        18
                                    </div>
                                    <div className="flex flex-row gap-1 items-center">
                                        <Image alt="" src={'/icons/stats.svg'} height={'15'} width={'15'} />
                                        <span className="text-green-400 text-[10.5px] font-medium">123%</span>
                                    </div>
                                </div>
                                <span className="text-gray-400 text-[10px]">1,233 customers in total</span>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </>
    )
}