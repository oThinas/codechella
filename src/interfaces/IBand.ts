import { ITextProps } from '.';

interface IBandItem {
  items: string[] | string;
  size: ITextProps['size'];
  weight: 'medium' | 'bold' | 'extraBold'
}

export type IBandList = IBandItem[];
