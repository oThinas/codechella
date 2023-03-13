import { useContext } from 'react';
import { Accordion, Banner, Heading, Main, Section } from '../../components';

import { DeviceContext } from '../../contexts/DeviceContex';

import InfoBannerMobile from '../../../assets/images/info-banner-mobile.png';
import InfoBannerTablet from '../../../assets/images/info-banner-tablet.png';
import InfoBannerDesktop from '../../../assets/images/info-banner-desktop.png';

export function Info() {
  const { device } = useContext(DeviceContext);

  return (
    <Main>
      <Banner
        source={{
          light: device === 'mobile' ? InfoBannerMobile : device === 'tablet' ? InfoBannerTablet : InfoBannerDesktop,
          dark: device === 'mobile' ? InfoBannerMobile : device === 'tablet' ? InfoBannerTablet : InfoBannerDesktop,
        }}
        desc={{
          light: 'Uma plateia vibrando com a música de um artista que está no palco. O palco está tão iluminado que só é possível ver o chão',
          dark: 'Uma plateia vibrando com a música de um artista que está no palco. O palco está tão iluminado que só é possível ver o chão',
        }}
        title='Informações Gerais'
        filter={{ light: { bgColor: '', opacity: 'opacity-0' }, dark: { bgColor: 'dark:bg-black', opacity: 'dark:opacity-20' } }}
        className='opacity-60'
      />

      <Section className='py-12 xl:flex-col'>
        <Heading heading='h2' size={32} font='title' className='text-center'>
          Perguntas Frequentes:
        </Heading>

        <Accordion />
      </Section>
    </Main>
  );
}
