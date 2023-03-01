import { HTMLAttributes } from 'react';
import { ITextProps } from '../interfaces';
import { Text } from './Text';

export function Paragraph(props: ITextProps & HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Text asChild {...props}>
      <p>
        {props.children}
      </p>
    </Text>
  );
}
