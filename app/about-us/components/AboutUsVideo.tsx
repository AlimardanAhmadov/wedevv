'use client'

import { useEffect } from "react";
import classes from "./AboutUsVideo.module.css";

export default function AboutUsVideo() {
    useEffect(() => {
        const video = document.getElementById('about-video');
        
        const handleVideoEnd = () => {
            video.currentTime = 0;
            video.play();
        };
        
        return () => {
            video.removeEventListener('ended', handleVideoEnd);
        };
    }, []);
    
    return (
        <div className={`${classes.aboutUsVideo} mx-auto relative flex flex-col items-center justify-center`}>
            <div className={`${classes.videoContainer} relative`}>
                <video className="w-full" id="about-video" width="1000" autoPlay loop muted>
                    <source src="/videos/boxing-man.mp4" type="video/mp4"/>
                </video>
                <div className={`${classes.videoOverlay}`}></div>
                <div className={`${classes.videoInfo} relative mx-auto flex flex-col justify-center`}>
                    <h1 className='uppercase'>PICK YOUR COACH TODAY AND START YOUR JOURNEY</h1>
                    <h3 className='mt-4'>Your Gateway to Coaching Excellence. Connect with coaches, make informed choices, and elevate your fitness journey with us.</h3>
                    <a type='button' className="rounded-full text-center w-40 py-4 mt-6 bg-white hover:bg-gray-300 text-black font-bold uppercase transition duration-300 ease-in-out">
                        get started
                    </a>
                </div>
            </div>
        </div>
    );
}
