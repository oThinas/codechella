import { useContext } from 'react';

import { Banner, Heading, Image, Main, Paragraph, Section } from '../../components';

import { Map } from './Sections';

import { DeviceContext } from '../../contexts/DeviceContex';

import SectorMapBannerMobile from '../../../assets/images/sectormap-banner-mobile.png';
import SectorMapBannerTablet from '../../../assets/images/sectormap-banner-tablet.png';
import SectorMapBannerDesktop from '../../../assets/images/sectormap-banner-desktop.png';
import SectionMap2 from '../../../assets/images/sectormap-2.jpg';
import SectionMap3 from '../../../assets/images/sectormap-3.jpg';
import SectionMap4 from '../../../assets/images/sectormap-4.jpg';

export function SectorMap() {
  const { device } = useContext(DeviceContext);

  return (
    <div className='flex-1'>
      <Main className='gap-2 text-grey dark:text-white'>
        <Banner
          title='Mapa de Setores'
          className='opacity-60'
          source={{
            light: device === 'mobile' ? SectorMapBannerMobile : device === 'tablet' ? SectorMapBannerTablet : SectorMapBannerDesktop,
            dark: device === 'mobile' ? SectorMapBannerMobile : device === 'tablet' ? SectorMapBannerTablet : SectorMapBannerDesktop,
          }}
          desc={{
            light: 'Mapa do céu no dia do evento. O céu está limpo com apenas algumas nuvens e é possível ver o final de um prédio com um letreiro. Não é possível ler o letreiro.',
            dark: 'Mapa do céu no dia do evento. O céu está limpo com apenas algumas nuvens e é possível ver o final de um prédio com um letreiro. Não é possível ler o letreiro.',
          }}
        />

        <Map />

        <Section className='text-center xl:flex-col'>
          <Heading heading='h3' bold size={32}>
            Mais detalhes sobre os setores
          </Heading>

          <div className='flex flex-col xl:flex-row gap-8'>
            <div className='flex flex-col gap-6 w-full'>
              <Image
                source={{
                  light: SectionMap2,
                  dark: SectionMap2,
                }}
                desc={{
                  light: 'Uma mulher no festival com um babolê. Ela segura o bambolê com a mão esquerda enquanto a mão direita está na linha da sobrancelha tentando tampar o sol.',
                  dark: 'Uma mulher no festival com um babolê. Ela segura o bambolê com a mão esquerda enquanto a mão direita está na linha da sobrancelha tentando tampar o sol.',
                }}
                className='rounded-2xl md:max-w-[380px] xl:h-[239px]'
                divClassName='xl:h-[239px]'
              />

              <Heading heading='h4' bold size={32}>
                Pista
              </Heading>

              <Paragraph className='leading-10'>
                Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.
              </Paragraph>
            </div>

            <div className='flex flex-col gap-6 w-full'>
              <Image
                source={{
                  light: SectionMap3,
                  dark: SectionMap3,
                }}
                desc={{
                  light: 'Visão que a pista premium tem do palco. O palco está no centro da imagem, com o público em volta. Não é possível ver o palco com clareza por causa das fumaças que saem do palco.',
                  dark: 'Visão que a pista premium tem do palco. O palco está no centro da imagem, com o público em volta. Não é possível ver o palco com clareza por causa das fumaças que saem do palco.',
                }}
                className='rounded-2xl md:max-w-[380px] xl:h-[239px]'
                divClassName='xl:h-[239px] xl:mt-32'
              />

              <Heading heading='h4' bold size={32}>
                Pista Premium
              </Heading>

              <Paragraph className='leading-10'>
                Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.
              </Paragraph>
            </div>

            <div className='flex flex-col gap-6 w-full'>
              <Image
                source={{
                  light: SectionMap4,
                  dark: SectionMap4,
                }}
                desc={{
                  light: 'A imagem mostra a região das cadeiras. Todas são brancas e estão com o banco dobrado para dentro.',
                  dark: 'A imagem mostra a região das cadeiras. Todas são brancas e estão com o banco dobrado para dentro.',
                }}
                className='rounded-2xl md:max-w-[380px] xl:h-[239px]'
                divClassName='xl:h-[239px]'
              />

              <Heading heading='h4' bold size={32}>
                Cadeiras
              </Heading>

              <Paragraph className='leading-10'>
                Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.
              </Paragraph>
            </div>
          </div>
        </Section>
      </Main>
    </div>
  );
}
