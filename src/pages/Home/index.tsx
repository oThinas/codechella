import { Banner, Image, Main } from '../../components';
import { About, Lineup } from './Sections';

import FooterLight from '../../../assets/images/footer-light.jpg';
import FooterDark from '../../../assets/images/footer-dark.jpg';

export function Home() {
  return (
    <div className='flex-1'>
      <Main>
        <Banner source='home' title='Boas-vindas ao #CodeChella2023!'/>

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
