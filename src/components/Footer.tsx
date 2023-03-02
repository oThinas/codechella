import { FaInstagram, FaTwitch, FaTwitter, FaWhatsapp } from 'react-icons/fa';

import { Link, Logo, Text } from '.';

export function Footer() {
  return (
    <footer className='flex flex-col xl:flex-row p-6 xl:px-30 xl:py-16 gap-8 items-center xl:justify-between flex-shrink-0 w-full text-grey dark:text-white bg-coral dark:bg-blue-dark'>
      <div className='flex flex-col md:gap-7 xl:gap-2 items-center xl:items-start'>
        <Logo className='text-grey dark:text-white'/>

        <div className='flex flex-col md:flex-row gap-2'>
          <Text className='leading-8'>
          Acesse nossas redes:
          </Text>

          <div id='icons' className='flex gap-2 justify-center'>
            <Link href='https://web.whatsapp.com/' target={'_blank'}>
              <FaWhatsapp size={32} className='hover:-translate-y-1 transition-transform'/>
            </Link>

            <Link href='https://www.twitch.tv/' target={'_blank'}>
              <FaTwitch size={32} className='hover:-translate-y-1 transition-transform'/>
            </Link>

            <Link href='https://www.instagram.com/' target={'_blank'}>
              <FaInstagram size={32} className='hover:-translate-y-1 transition-transform'/>
            </Link>

            <Link href='https://twitter.com/' target={'_blank'}>
              <FaTwitter size={32} className='hover:-translate-y-1 transition-transform'/>
            </Link>
          </div>
        </div>
      </div>

      <div className='text-center xl:text-start xl:flex xl:flex-col'>
        <Text>
          Desenvolvido por&nbsp;
          <Link href='https://github.com.br/oThinas' target={'_blank'}>
            Thinas
          </Link>
          .&nbsp;
        </Text>
        <Text>
          Projeto fictício sem fins comerciais.
        </Text>
      </div>
    </footer>
  );
}
