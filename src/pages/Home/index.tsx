import { Banner, Image } from '../../components';
import { About, Lineup } from './Sections';

import FooterLight from '../../../assets/images/footer-light.jpg';
import FooterDark from '../../../assets/images/footer-dark.jpg';

export function Home() {
  return (
    <div className='flex-1'>
      <Banner />

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
            light: { color: 'coral-dark', opacity: 30 },
            dark: { color: 'grey-dark', opacity: 30 },
          }}
        />
      </main>
    </div>
  );
}
