import classes from './DiscordSection.module.css';

export default function DiscordSection() { 
    return (
        <div id='community'>
            <div className={`${classes.discordSection} flex flex-col items-center text-center gap-4 mx-auto relative h-[43rem] mb-[17rem] py-[5rem]`}>
                <div className={`mx-auto max-w-[79rem]`}>
                    {/* <div className={`${classes.tag} uppercase text-center py-2 px-5 text-black flex items-center gap-1`}>
                        <img src="/icons/3d-discord.png" alt="our community" />
                        <span>our community</span>
                    </div> */}
                    <section className='mt-[3rem]' style={{ paddingTop: 'clamp(3rem,calc(4.9524vw + 1.7929rem),2.25rem)' }}>
                        <h2 className='flex flex-col products-title text-center font-[300] text-[#fff] text-left mx-auto gap-2' style={{ lineHeight: '1.04', letterSpacing: '-.04em', fontSize: 'clamp(2.5rem,calc(3.8095vw + 1.5714rem),4rem)', textWrap: 'balance' }}>
                            <div>
                                <span>
                                    We look forward to receiving <span className='text-[#36F4A4]'>community</span> feedback
                                </span>
                            </div>
                        </h2>
                    </section>
                    <div className={`${classes.discordButton} relative mx-auto`}>
                        <div className={`${classes.discordShadow} absolute`}></div>
                        <a href='https://discord.gg/XtHa2AbW' target='_blank' rel='noopener noreferrer' type='button' className='bg-purple-600 py-4 px-6 uppercase flex items-center gap-4 duration-100 trasition ease-in-out'>
                            <svg height={'44'} width={'44'} fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/>
                            </svg>
                            join our discord
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}