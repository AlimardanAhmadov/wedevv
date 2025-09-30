'use client';

import React, { useEffect } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

const PlyrVideo = (props) => {
  useEffect(() => {
    const player = new Plyr('#plyr-video', {
      controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
    });
    
    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div className="plyr-container duration-200 transition ease-in-out mt-[3.5rem]">
      <video
        id="plyr-video"
        className="plyr rounded-[20px]"
        playsInline
        controls
      >
        <source src={props?.src} type="video/mp4" />
        <track kind="captions" label="English captions" srcLang="en" src="/path/to/captions.vtt" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default PlyrVideo;
