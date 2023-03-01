import { useContext } from 'react';

import { Heading, Paragraph } from '../../../components';

import { ThemeContext } from '../../../contexts/ThemeContext';

import AboutLightImage from '../../../../assets/images/about-light.jpg';
import AboutDarkImage from '../../../../assets/images/about-dark.jpg';

export function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className='flex flex-col gap-8 px-6 py-8 justify-center items-center'>
      <img
        src={theme === 'light' ? AboutLightImage : AboutDarkImage}
        alt={
          theme === 'light' ?
            '5 pessoas em uma plateia de um festival de músicas' :
            'Um palco com luzes de néon e 3 homens tocando guitarra'
        }
        className='w-full max-w-sm h-96 object-cover rounded-2xl'
      />

      <div className='flex flex-col gap-6 text-grey text-center'>
        <Heading heading='h2' size={32} bold>
          &lt; 11 e 12 de Março &gt; Aluródromo de São Paulo
        </Heading>

        <Paragraph>
          Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!
        </Paragraph>
      </div>
    </section>
  );
}
