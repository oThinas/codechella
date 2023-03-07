import { useContext } from 'react';

import { Banner, Heading, Image, Main, Paragraph, Section } from '../../components';

import { DeviceContext } from '../../contexts/DeviceContex';

import ExperienceBannerMobile from '../../../assets/images/experience-banner-mobile.png';
import ExperienceBannerTablet from '../../../assets/images/experience-banner-tablet.png';
import ExperienceBannerDesktop from '../../../assets/images/experience-banner-desktop.png';

import Experience1 from '../../../assets/images/experience-1.jpg';
import Experience2 from '../../../assets/images/experience-2.jpg';
import Experience3 from '../../../assets/images/experience-3.jpg';

export function Experience() {
  const { device } = useContext(DeviceContext);

  return (
    <div className='flex-1 text-grey dark:text-white'>
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

        <Section className='text-center xl:flex-col md:gap-16 xl:gap-32'>
          <div className='flex flex-col xl:flex-row items-center gap-8 xl:gap-12'>
            <Image
              source={{
                light: Experience1,
                dark: Experience1,
              }}
              desc={{
                light: 'Mulher negra com uma roupa cintilante em azul sorrindo com os braços para cima',
                dark: 'Mulher negra com uma roupa cintilante em azul sorrindo com os braços para cima',
              }}
              className='rounded-2xl w-full h-[381px] xl:h-[381px]'
              divClassName='xl:w-1/2'
            />

            <div className='xl:w-1/2 xl:text-left xl:flex xl:flex-col xl:gap-6'>
              <Heading heading='h2' size={32} bold>
                Acessibilidade e Inclusão
              </Heading>

              <Paragraph className='leading-10'>
                Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!
              </Paragraph>
            </div>
          </div>

          <div className='flex flex-col xl:flex-row-reverse items-center gap-8'>
            <Image
              source={{
                light: Experience2,
                dark: Experience2,
              }}
              desc={{
                light: 'Uma ecobag de lixos recicláveis',
                dark: 'Uma ecobag de lixos recicláveis',
              }}
              className='rounded-2xl w-full h-[381px]'
              divClassName='xl:w-1/2'
            />

            <div className='xl:w-1/2 xl:text-right xl:flex xl:flex-col xl:gap-6'>
              <Heading heading='h2' size={32} bold>
                Sustentabilidade
              </Heading>

              <Paragraph className='leading-10'>
                Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.
              </Paragraph>
            </div>
          </div>

          <div className='flex flex-col xl:flex-row items-center gap-8'>
            <Image
              source={{
                light: Experience3,
                dark: Experience3,
              }}
              desc={{
                light: 'Roda gigante',
                dark: 'Roda gigante',
              }}
              className='rounded-2xl w-full h-[381px]'
              divClassName='xl:w-1/2'
            />

            <div className='xl:w-1/2 xl:text-left xl:flex xl:flex-col xl:gap-6'>
              <Heading heading='h2' size={32} bold>
                Atrações
              </Heading>

              <Paragraph className='leading-10'>
                Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!
              </Paragraph>
            </div>
          </div>
        </Section>
      </Main>
    </div>
  );
}
