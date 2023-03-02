import { useContext } from 'react';
import { IoTicketOutline } from 'react-icons/io5';

import { Button, Heading, Paragraph, Section, Text } from '../../../components';

import { ThemeContext } from '../../../contexts/ThemeContext';

import AboutLightImage from '../../../../assets/images/about-light.jpg';
import AboutDarkImage from '../../../../assets/images/about-dark.jpg';

export function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <Section>
      <img
        src={theme === 'light' ? AboutLightImage : AboutDarkImage}
        alt={
          theme === 'light' ?
            '5 pessoas em uma plateia de um festival de músicas' :
            'Um palco com luzes de néon e 3 homens tocando guitarra'
        }
        className='w-full max-w-[610px] h-96 object-cover rounded-2xl'
      />

      <div className='flex flex-col items-center gap-6 xl:w-[540px] text-grey dark:text-white text-center'>
        <Heading heading='h2' size={32} bold className='md:w-[28rem]'>
          &lt; 11 e 12 de Março &gt; Aluródromo de São Paulo
        </Heading>

        <Paragraph className='leading-10'>
          Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!
        </Paragraph>

        <Button icon={<IoTicketOutline size={24}/>}> {/* // TODO: adicionar redirecionamento */}
          <Text>
            Comprar ingresso!
          </Text>
        </Button>
      </div>
    </Section>
  );
}
