import { useState, useEffect } from 'react';

export function useDevice() {
  const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');

  function checkDevice() {
    console.log(window.innerWidth);
    if (window.innerWidth < 768) setDevice('mobile');
    else if (768 <= window.innerWidth && window.innerWidth < 1440) setDevice('tablet');
    else setDevice('desktop');
  }

  useEffect(() => {
    checkDevice();
  }, []);

  window.addEventListener('resize', () => checkDevice());

  return { device };
}
