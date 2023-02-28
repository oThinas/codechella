import { ImgHTMLAttributes } from 'react';

import DarkLogo from '../../assets/images/DarkLogo.png'; // TODO: corrigir a imagem
import LightLogo from '../../assets/images/LightLogo.png';

export function Logo({ version, ...props }: {  version: 'dark' | 'light' } & ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={version === 'dark' ? DarkLogo : LightLogo}
      alt='<CodeChellea /> (Logo do CodeChella na versão escura)'
      {...props}
    />
  );
}
