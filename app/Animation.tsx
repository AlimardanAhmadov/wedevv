import { useEffect } from 'react';

type AnimationSVGProps = {
  path: string;
  containerId: string;
};

const AnimationSVG = ({ path, containerId }: AnimationSVGProps) => {
  useEffect(() => {
    const isClient = typeof window !== 'undefined';
    if (!isClient) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    import('lottie-web').then((lottie) => {
      const animation = lottie.default.loadAnimation({
        container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path,
      });

      return () => animation.destroy();
    });
  }, [path, containerId]);

  return <div id={containerId}></div>;
};

export default AnimationSVG;
