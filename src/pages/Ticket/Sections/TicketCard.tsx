import { Heading, Image, Text } from '../../../components';

import { ITicketFormData } from '../../../interfaces';

import FaviconLight from '../../../../assets/images/mini-favicon-light.svg';
import FaviconDark from '../../../../assets/images/mini-favicon-dark.svg';
import QRCodeLight from '../../../../assets/images/qr-code-light.svg';
import QRCodeDark from '../../../../assets/images/qr-code-dark.svg';

const ticketType = {
  premium: 'Pista Premium',
  regular: 'Pista Comum',
  floor: 'Cadeiras Térreo',
  roof: 'Cadeiras Superiores',
};

export function TicketCard({ data }: { data: ITicketFormData }) {
  return (
    <div className='flex flex-col gap-8 p-8 items-center w-full max-w-3xl rounded-2xl border border-grey dark:border-white'>
      <div className='flex justify-between items-center w-full'>
        <Text bold className='text-base font-logo'>&lt;CodeChella /&gt;</Text>
        <Image
          divClassName='w-8 h-8'
          className='w-8 h-8 md:h-8 xl:h-8'
          source={{
            light: FaviconLight,
            dark: FaviconDark,
          }}
          desc={{
            light: 'Favicon do CodeChella na versão branca',
            dark: 'Favicon do CodeChella na versão escura',
          }}
        />
      </div>
      <div className='flex flex-col xl:flex-row gap-8 w-full'>
        <Image
          divClassName='max-w-[200px] max-h-[200px]'
          className='max-w-[200px] max-h-[200px]'
          source={{
            light: QRCodeLight,
            dark: QRCodeDark,
          }}
          desc={{
            light: 'QR Code com o código de barras do ingresso.',
            dark: 'QR Code com o código de barras do ingresso.',
          }}
        />
        <div className='flex flex-col justify-center items-center xl:items-start gap-4'>
          <Heading size={32} bold heading='h2'>
            {data.fullName}
          </Heading>
          <Text className='text-center xl:text-start'>
            {ticketType[data.ticketType]} <br />
            Dias 11/03 e 12/03 <br />
            Local: São Paulo - SP
          </Text>
        </div>
      </div>
    </div>
  );
}
