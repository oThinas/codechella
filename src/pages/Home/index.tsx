import { Banner } from '../../components';
import { About } from './Sections';

export function Home() {
  return (
    <div className='flex-1'>
      <Banner />
      <main
        className='flex flex-col bg-gradient-to-b from-light-gradient-start via-light-gradient-via to-light-gradient-end
        dark:from-dark-gradient-start dark:via-dark-gradient-via dark:to-dark-gradient-end'
      >
        <About />
      </main>
    </div>
  );
}
