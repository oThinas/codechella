import { useContext } from 'react';

import { TicketForm } from './Sections';

import { Banner, Heading, Main, Section } from '../../components';

import { DeviceContext } from '../../contexts/DeviceContex';

import TicketBannerMobile from '../../../assets/images/ticket-banner-mobile.png';
import TicketBannerTablet from '../../../assets/images/ticket-banner-tablet.png';
import TicketBannerDesktop from '../../../assets/images/ticket-banner-desktop.png';

export function Ticket() {
  const { device } = useContext(DeviceContext);
  
  return (
    <Main>
      <Banner
        source={{
          light: device === 'mobile' ? TicketBannerMobile : device === 'tablet' ? TicketBannerTablet : TicketBannerDesktop,
          dark: device === 'mobile' ? TicketBannerMobile : device === 'tablet' ? TicketBannerTablet : TicketBannerDesktop,
        }}
        desc={{
          light: 'Fotos do céu com objetos de circo como bamboles e pinos de boliche jogados para cima.',
          dark: 'Fotos do céu com objetos de circo como bamboles e pinos de boliche jogados para cima.'
        }}
        title='Garanta seu Ingresso'
        filter={{ light: { bgColor: '', opacity: 'opacity-0' }, dark: { bgColor: 'dark:bg-black', opacity: 'dark:opacity-20' } }}
        className='opacity-60'
      />

      <Section className='gap-12 xl:flex-col'>
        <Heading size={32} font='title' heading='h2' className='text-center'>
          Preencha o formulário a seguir:
        </Heading>

        <TicketForm />
      </Section>
    </Main>
  );
}
