import { useContext, useState } from 'react';

import { TicketCard, TicketForm } from './Sections';

import { Banner, Heading, Main, Section } from '../../components';

import { DeviceContext } from '../../contexts/DeviceContex';

import TicketFormBannerMobile from '../../../assets/images/ticket-form-banner-mobile.png';
import TicketFormBannerTablet from '../../../assets/images/ticket-form-banner-tablet.png';
import TicketFormBannerDesktop from '../../../assets/images/ticket-form-banner-desktop.png';

import TicketCardBannerMobile from '../../../assets/images/ticket-card-banner-mobile.png';
import TicketCardBannerTablet from '../../../assets/images/ticket-card-banner-tablet.png';
import TicketCardBannerDesktop from '../../../assets/images/ticket-card-banner-desktop.png';

export function Ticket() {
  const { device } = useContext(DeviceContext);
  const [data, setData] = useState(null);

  function onSubmit(data: any) {
    setData(data);
  }

  return (
    <Main>
      {
        data ? (
          <>
            <Banner
              source={{
                light: device === 'mobile' ? TicketCardBannerMobile : device === 'tablet' ? TicketCardBannerTablet : TicketCardBannerDesktop,
                dark: device === 'mobile' ? TicketCardBannerMobile : device === 'tablet' ? TicketCardBannerTablet : TicketCardBannerDesktop,
              }}
              desc={{
                light: 'Duas mulheres da plateia sorrindo com os olhos fechados e batendo palmas.',
                dark: 'Duas mulheres da plateia sorrindo com os olhos fechados e batendo palmas.',
              }}
              title='Seu ingresso está aqui!'
              filter={{ light: { bgColor: '', opacity: 'opacity-0' }, dark: { bgColor: 'dark:bg-black', opacity: 'dark:opacity-20' } }}
              className='opacity-60'
            />

            <Section className='gap-12 xl:flex-col'>
              <Heading size={32} font='title' heading='h2' className='text-center'>
                Uhul, agora sim! <br /> Seu ingresso está aqui, apresente na entrada do evento e divirta&#8209;se!
              </Heading>

              <TicketCard data={data} />
            </Section>
          </>
        ) : (
          <>
            <Banner
              source={{
                light: device === 'mobile' ? TicketFormBannerMobile : device === 'tablet' ? TicketFormBannerTablet : TicketFormBannerDesktop,
                dark: device === 'mobile' ? TicketFormBannerMobile : device === 'tablet' ? TicketFormBannerTablet : TicketFormBannerDesktop,
              }}
              desc={{
                light: 'Fotos do céu com objetos de circo como bamboles e pinos de boliche jogados para cima.',
                dark: 'Fotos do céu com objetos de circo como bamboles e pinos de boliche jogados para cima.',
              }}
              title='Garanta seu Ingresso'
              filter={{ light: { bgColor: '', opacity: 'opacity-0' }, dark: { bgColor: 'dark:bg-black', opacity: 'dark:opacity-20' } }}
              className='opacity-60'
            />

            <Section className='gap-12 xl:flex-col'>
              <Heading size={32} font='title' heading='h2' className='text-center'>
                Preencha o formulário a seguir:
              </Heading>

              <TicketForm dataSubmit={onSubmit} />
            </Section>
          </>
        )
      }
    </Main>
  );
}
