import { Banner, Main } from '../../components';

import ExperienceBannerMobile from '../../../assets/images/experience-banner-mobile.png';
// import ExperienceBannerTablet from '../../../assets/images/experience-banner-tablet.png'
// import ExperienceBannerDesktop from '../../../assets/images/experience-banner-desktop.png'

export function Experience() {
  return (
    <div className='flex-1'>
      <Main>
        <Banner
          source={{
            light: ExperienceBannerMobile,
            dark: ExperienceBannerMobile,
          }}
          title='A Experiência'
          desc={{
            light: 'A Experiência',
            dark: 'A Experiência',
          }}
          className='opacity-60'
        />
      </Main>
    </div>
  );
}
