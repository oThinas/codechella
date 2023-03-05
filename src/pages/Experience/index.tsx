import { useContext } from 'react';
import { Banner, Image, Main, Section } from '../../components';

import { DeviceContext } from '../../contexts/DeviceContex';

import ExperienceBannerMobile from '../../../assets/images/experience-banner-mobile.png';
import ExperienceBannerTablet from '../../../assets/images/experience-banner-tablet.png';
import ExperienceBannerDesktop from '../../../assets/images/experience-banner-desktop.png';

import Experience1 from '../../../assets/images/experience-1.jpg';

export function Experience() {
  const { device } = useContext(DeviceContext);

  return (
    <div className='flex-1'>
      <Main>
        <Banner
          source={{
            light: device === 'mobile' ? ExperienceBannerMobile : device === 'tablet' ? ExperienceBannerTablet : ExperienceBannerDesktop,
            dark: device === 'mobile' ? ExperienceBannerMobile : device === 'tablet' ? ExperienceBannerTablet : ExperienceBannerDesktop,
          }}
          title='A Experiência'
          desc={{
            light: 'A Experiência',
            dark: 'A Experiência',
          }}
          className='opacity-60'
        />

        <Section>
          <div>
            <Image
              source={{
                light: Experience1,
                dark: Experience1,
              }}
              desc={{
                light: 'Mulher negra com uma roupa cintilante em azul sorrindo com os braços para cima',
                dark: 'Mulher negra com uma roupa cintilante em azul sorrindo com os braços para cima',
              }}
              className='rounded-2xl w-full h-auto'
            />

            {/* // TODO: colocar textos */}
          </div>
        </Section>
      </Main>
    </div>
  );
}
