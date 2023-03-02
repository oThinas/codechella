import { useContext } from 'react';

import { BandList, Heading, Section, Text } from '../../../components';

import { DeviceContext } from '../../../contexts/DeviceContex';

import { IBandList } from '../../../interfaces';

const bandsDay1: IBandList = [
  {
    items: 'System of a DOM',
    size: 48,
    weight: 'extraBold',
  },
  {
    items: ['Python Maiden', 'ApolloClient'],
    size: 40,
    weight: 'bold',
  },
  {
    items: ['Bon Java', 'NickCallback'],
    size: 40,
    weight: 'bold',
  },
  {
    items: ['Linkin Promises', 'Fullstack Fighters'],
    size: 32,
    weight: 'bold',
  },
  {
    items: ['Papa React', 'Angular in Chains'],
    size: 32,
    weight: 'bold',
  },
  {
    items: ['Agnostic Front-end', 'SlipkNode'],
    size: 32,
    weight: 'medium',
  },
  {
    items: ['Pink Flutter', 'Kiss'],
    size: 32,
    weight: 'medium',
  },
];

const bandsDay2: IBandList = [
  {
    items: 'Lana Del Ploy',
    size: 48,
    weight: 'extraBold',
  },
  {
    items: ['Dua Lib', 'The Backnd', 'CSS Styles'],
    size: 40,
    weight: 'bold',
  },
  {
    items: ['ArrayAna Grande', 'DJ Query'],
    size: 40,
    weight: 'bold',
  },
  {
    items: ['Miley Cypress', 'The Bootstraps Boys'],
    size: 32,
    weight: 'bold',
  },
  {
    items: ['Json Derulo', 'ClouPlay', 'Dev Lovato'],
    size: 32,
    weight: 'bold',
  },
  {
    items: ['Kylie MiLog', 'Jenkins Brothers', 'Rubycat Dolls'],
    size: 32,
    weight: 'medium',
  },
];

export function Lineup() {
  const { device } = useContext(DeviceContext);

  return (
    <Section className='gap-12 py-12 xl:flex-col'>
      <Heading heading='h2' bold size={48} type='title' className='text-grey dark:text-white mb-6'>
        /Line-Up/
      </Heading>

      <div className='flex flex-col gap-24'>
        <div className='flex justify-center md:justify-between items-center gap-8 w-full'>
          <div className='flex-1 h-0.5 bg-coral-dark dark:bg-green-dark hidden md:block'/>
          <Text
            size={device === 'mobile' ? 32 : 48}
            type='title'
            className='uppercase text-white bg-coral-dark dark:bg-green-dark px-2 py-4'
          >
            Sábado &lt;11/03&gt;
          </Text>
          <div className='flex-1 h-0.5 bg-coral-dark dark:bg-green-dark hidden md:block'/>
        </div>

        <BandList {...bandsDay1} />

        <div className='flex justify-center md:justify-between items-center gap-8 w-full'>
          <div className='flex-1 h-0.5 bg-coral-dark dark:bg-green-dark hidden md:block'/>
          <Text
            size={device === 'mobile' ? 32 : 48}
            type='title'
            className='uppercase text-white bg-coral-dark dark:bg-green-dark px-2 py-4'
          >
            Domingo &lt;12/03&gt;
          </Text>
          <div className='flex-1 h-0.5 bg-coral-dark dark:bg-green-dark hidden md:block'/>
        </div>

        <BandList {...bandsDay2} />
      </div>
    </Section>
  );
}
