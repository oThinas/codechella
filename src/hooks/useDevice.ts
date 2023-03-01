import { useState, useEffect } from 'react';

export function useDevice() {
  const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');

  function checkDevice() {
    if (window.innerWidth < 768) setDevice('mobile');
    else if (window.innerHeight < 1440) setDevice('tablet');
    else setDevice('desktop');
  }

  useEffect(() => {
    checkDevice();
  }, []);

  window.addEventListener('resize', () => checkDevice());

  return { device };
}
