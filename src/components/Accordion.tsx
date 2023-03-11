import { forwardRef } from 'react';
import { AccordionItemProps, AccordionContentProps, AccordionTriggerProps } from '@radix-ui/react-accordion';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { twMerge } from 'tailwind-merge';
import { Heading, Link, Paragraph } from '.';

export function Accordion() {
  return (
    <RadixAccordion.Root
      className='flex flex-col gap-2 w-full text-start text-white'
      type='multiple'
    >
      <AccordionItem value='item-1'>
        <AccordionTrigger>
          Quais serão as atrações?
        </AccordionTrigger>
        <AccordionContent>
          Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop.
          {' '}
          <Link href='/#lineup'>
            Confira o line-up em detalhes clicando neste link!
          </Link>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-2'>
        <AccordionTrigger>
          Qual é a classificação etária?
        </AccordionTrigger>
        <AccordionContent>
          A partir de 16 anos, todo mundo pode entrar. De 13 a 15 anos, tem que estar acompanhado dos pais ou responsáveis legais. Menores de 10 anos não podem entrar.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-3'>
        <AccordionTrigger>
          Quais são os setores disponíveis?
        </AccordionTrigger>
        <AccordionContent>
          Pista Premium, Pista Comum, Cadeiras térreo, Cadeiras superiores e Rampas
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-4'>
        <AccordionTrigger>
          Quais são os itens proibidos?
        </AccordionTrigger>
        <AccordionContent>
          Garrafas, latas, bebidas, utensílios de armazenagem, embalagens rígidas com tampa, capacetes, cadeiras ou bancos, armas de fogo e armas brancas, objetos pontiagudos, cortantes e/ou perfurantes, correntes e cinturões, fogos de artifício, objetos de vidro, substâncias inflamáveis, cigarro eletrônico, corrosivas e ou tóxicas, revistas, jornais, livros e copo térmico ou similares.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-5'>
        <AccordionTrigger>
          Quem tem direito a meia-entrada?
        </AccordionTrigger>
        <AccordionContent>
          De acordo com a Lei Federal, têm direito ao benefício da meia-entrada aqueles que preencherem os requisitos e apresentarem os documentos comprobatórios.
        </AccordionContent>
      </AccordionItem>
    </RadixAccordion.Root>
  );
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(({ children, className, ...props }, fowardedRef) => {
  return (
    <RadixAccordion.Item
      className={twMerge(` ${className || ''}`)}
      {...props}
      ref={fowardedRef}
    >
      {children}
    </RadixAccordion.Item>
  );
});

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(({ children, className, ...props }, fowardedRef) => {
  return (
    <RadixAccordion.Header className='flex justify-between p-4 bg-blue dark:bg-blue-dark'>
      <RadixAccordion.Trigger
        className={twMerge(`flex group items-center text-start ${className || ''}`)}
        {...props}
        ref={fowardedRef}
      >
        <Heading heading='h3' size={32} bold>
          {children}
        </Heading>
        <ChevronDownIcon
          className='ease-linear transition-transform duration-75 group-data-[state=open]:rotate-180'
          aria-hidden
          width={32}
          height={32}
        />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
});

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(({ children, className, ...props }, forwardRef) => {
  return (
    <RadixAccordion.Content
      className={twMerge(`mb-4 p-4 bg-blue-light overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp text-grey
        ${className || ''}`)}
      {...props}
      ref={forwardRef}
    >
      <Paragraph className='leading-10'>
        {children}
      </Paragraph>
    </RadixAccordion.Content>
  );
});
