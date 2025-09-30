'use client';

import { useEffect, FC } from 'react';
import lottie from 'lottie-web';

interface AnimationSVGProps {
  path: string;
  containerId: string;
}

const AnimationSVG: FC<AnimationSVGProps> = ({ path, containerId }) => {
  useEffect(() => {
    const isClient = typeof window !== 'undefined';
    if (!isClient) return;

    import('lottie-web').then((lottie) => {
      const container = document.getElementById(containerId);
      if (container) {
        const animation = lottie.default.loadAnimation({
          container: container,
          renderer: 'svg',
          loop: false,
          autoplay: true,
          path: path,
        });

        if (containerId === 'lottie-pulse' || containerId === 'grey-wave') {
          animation.setSpeed(0.6);
        }
      }
    });
  }, [path, containerId]);

  return <div id={containerId} />;
};

export default AnimationSVG;
