import { Banner, Image } from '../../components';
import { About, Lineup } from './Sections';

import FooterLight from '../../../assets/images/footer-light.jpg';
import FooterDark from '../../../assets/images/footer-dark.jpg';

export function Home() {
  return (
    <div className='flex-1'>
      <Banner source='home' title='Boas-vindas ao #CodeChella2023!'/>

      <main
        className='flex flex-col bg-gradient-to-b from-light-gradient-start via-light-gradient-via to-light-gradient-end
        dark:from-dark-gradient-start dark:via-dark-gradient-via dark:to-dark-gradient-end'
      >
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
      </main>
    </div>
  );
}
