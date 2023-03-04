import { useContext, useEffect } from 'react';

import { About, Lineup } from './Sections';

import { Banner, Image, Main } from '../../components';

import { DeviceContext } from '../../contexts/DeviceContex';

import FooterLight from '../../../assets/images/footer-light.jpg';
import FooterDark from '../../../assets/images/footer-dark.jpg';

import HomeBannerMobileLight from '../../../assets/images/home-banner-mobile-light.png';
import HomeBannerTabletLight from '../../../assets/images/home-banner-tablet-light.png';
import HomeBannerDesktopLight from '../../../assets/images/home-banner-desktop-light.png';
import HomeBannerMobileDark from '../../../assets/images/home-banner-mobile-dark.png';
import HomeBannerTabletDark from '../../../assets/images/home-banner-tablet-dark.png';
import HomeBannerDesktopDark from '../../../assets/images/home-banner-desktop-dark.png';

export function Home() {
  const { device } = useContext(DeviceContext);

  useEffect(() => console.log(device), [device]);

  let light;
  if (device === 'mobile') light = HomeBannerMobileLight;
  else if (device === 'tablet') light = HomeBannerTabletLight;
  else light = HomeBannerDesktopLight;

  return (
    <div className='flex-1'>
      <Main>
        <Banner
          source={{
            light,
            dark: device === 'mobile' ? HomeBannerMobileDark : device === 'tablet' ? HomeBannerTabletDark : HomeBannerDesktopDark,
          }}
          title='Boas-vindas ao #CodeChella2023!'
          desc={{
            light: 'Um carrossel num parque de diversões',
            dark: 'Aurora Boreal',
          }}
        />

        <About />

        <Lineup />

        <Image
          source={{ light: FooterLight, dark: FooterDark }}
          desc={{
            light: 'Light',
            dark: 'Dark',
          }}
          className='w-full h-[338px] object-cover'
          filter={{
            light: { bgColor: 'bg-coral-dark', opacity: 'opacity-30' },
            dark: { bgColor: 'dark:bg-grey-dark', opacity: 'opacity-50' },
          }}
        />
      </Main>
    </div>
  );
}
