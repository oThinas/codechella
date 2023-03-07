import { Image, Paragraph, Text } from '../../../components';

import SectionMap1 from '../../../../assets/images/sectormap-1.png';

export function Map() {
  return (
    <div className='flex flex-col xl:flex-row items-center xl:justify-between xl:px-30 gap-4 '>
      <Image
        source={{
          light: SectionMap1,
          dark: SectionMap1,
        }}
        desc={{
          light: 'O mapa começa com o palco. Abaixo do palco, é onde fica a Pista Premium. Abaixo da Pista Premium, vem a Pista Comum. Entre a Pista Premium e a Pista comum, existe duas áreas reservadas para cadeirantes, uma na extrema esquerda e outra na extrema direita. No meio, é onde fica a House Mix. Envolta dessas duas pistas, fica as Cadeiras Térreo, também com duas áreas para cadeirantes, uma em cada extremo. Envolta das Cadeiras Térreo, fica as Cadeiras Superiores',
          dark: 'O mapa começa com o palco. Abaixo do palco, é onde fica a Pista Premium. Abaixo da Pista Premium, vem a Pista Comum. Entre a Pista Premium e a Pista comum, existe duas áreas reservadas para cadeirantes, uma na extrema esquerda e outra na extrema direita. No meio, é onde fica a House Mix. Envolta dessas duas pistas, fica as Cadeiras Térreo, também com duas áreas para cadeirantes, uma em cada extremo. Envolta das Cadeiras Térreo, fica as Cadeiras Superiores',
        }}
        className='h-[360px] md:h-auto xl:w-[610px] xl:h-[610px]'
        divClassName='w-full'
      />

      <div className='flex flex-col gap-8 px-[60px] xl:p-0 xl:w-1/2 text-grey dark:text-white'>
        <Paragraph bold>
          Legenda:
        </Paragraph>

        <ul className='flex flex-col gap-6'>
          <li className='flex items-center gap-4'>
            <div className='w-8 h-8 bg-[#0E7DF1]'/>
            <Text>
              Pista Premium
            </Text>
          </li>

          <li className='flex items-center gap-4'>
            <div className='w-8 h-8 bg-[#FE016E]'/>
            <Text>
              Pista Comum
            </Text>
          </li>

          <li className='flex items-center gap-4'>
            <div className='w-8 h-8 bg-[#01A89E]'/>
            <Text>
              Cadeiras térreo
            </Text>
          </li>

          <li className='flex items-center gap-4'>
            <div className='w-8 h-8 bg-[#3F51B5]'/>
            <Text>
              Cadeiras superiores
            </Text>
          </li>
        </ul>
      </div>
    </div>
  );
}
