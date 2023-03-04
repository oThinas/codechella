import { ImgHTMLAttributes } from 'react';
import { IFilter } from './IFilter';

export interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  source: { light: string; dark: string };
  desc: { light: string; dark: string };
  isBackground?: boolean;
  filter?: IFilter;
}
