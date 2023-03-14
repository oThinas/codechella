import { ReactNode, useState } from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';
import { ArrowRightIcon, ReloadIcon } from '@radix-ui/react-icons';
import { twMerge } from 'tailwind-merge';

import { Button, Text } from '../../../components';

import { ITicketFormData } from '../../../interfaces';

export function TicketForm({ dataSubmit }: { dataSubmit: (data: ITicketFormData) => void }) {
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ITicketFormData>();

  function onSubmit(data: ITicketFormData) {
    setSubmitting(true);
    setTimeout(() => {
      dataSubmit(data);
      setSubmitting(false);
    }, 2000);
  }

  function isDateAtLeast13YearsAgo(dateString: string) {
    const date = new Date(dateString);
    const thirteenYearsAgo = new Date();
    thirteenYearsAgo.setFullYear(thirteenYearsAgo.getFullYear() - 13);

    return date <= thirteenYearsAgo;
  }

  function hasValidName(fullName: string) {
    const words = fullName.trim().split(' ');
    if (words.length < 2) {
      return false;
    }

    for (const word of words) {
      if (word.length < 2) {
        return false;
      }
    }

    return true;
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8 w-full'>
      <Label>
        <Text size={32} bold>
          Nome completo:
        </Text>
        <Input
          type='text'
          register={register}
          name='fullName'
          rules={{ required: true, maxLength: 100, validate: (value: string) => hasValidName(value) }}
          className={errors.fullName ? 'ring-2 ring-red dark:ring-grey' : ''}
        />
        {errors.fullName && <Text className='text-red dark:text-grey'>Nome inválido</Text>}
      </Label>

      <Label>
        <Text size={32} bold>
          Email:
        </Text>
        <Input
          type='email'
          name='email'
          register={register}
          rules={{ required: true, minLength: 6, maxLength: 100 }}
          className={errors.email ? 'ring-2 ring-red dark:ring-grey' : ''}
        />
        {errors.email && <Text className='text-red dark:text-grey'>Email inválido</Text>}
      </Label>

      <div className='w-full flex flex-col xl:flex-row gap-8 xl:gap-6 xl:justify-center'>
        <Label>
          <Text size={32} bold>
              Tipo de ingresso:
          </Text>
          <select
            defaultValue=''
            className={`font-body text-grey w-full h-12 px-2 rounded-lg focus-within:ring-2 ring-blue outline-none
                ${errors.ticketType ? 'ring-2 ring-red dark:ring-grey' : ''}`}
            {...register('ticketType', { required: true })}
          >
            <option value='' disabled>Tipo de ingresso</option>
            <option value='premium'>Pista Premium</option>
            <option value='regular'>Pista Regular</option>
            <option value='floor'>Cadeiras Térreo</option>
            <option value='roof'>Cadeiras Superior</option>
          </select>
          {errors.ticketType && <Text className='text-red dark:text-grey'>Selecione um tipo de ingresso</Text>}
        </Label>

        <Label>
          <Text size={32} bold>
              Data de nascimento:
          </Text>
          <Input
            type='date'
            name='dateOfBirth'
            register={register}
            rules={{ required: true, valueAsDate: true, validate: (value: string) => isDateAtLeast13YearsAgo(value) }}
            className={errors.dateOfBirth ? 'ring-2 ring-red dark:ring-grey' : ''}
          />
          {errors.dateOfBirth && <Text className='text-red dark:text-grey'>Data inválida</Text>}
        </Label>
      </div>

      <Button
        type='submit'
        disabled={submitting}
        icon={submitting ? (<ReloadIcon className='animate-spin' width={32} height={32}/>) : (<ArrowRightIcon width={32} height={32} />)}
        className='max-w-xs w-80 self-center'
      >
        Enviar
      </Button>
    </form>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <label className='flex flex-1 flex-col gap-2'>
      {children}
    </label>
  );
}

interface IInputProps {
  name: 'email' | 'fullName' | 'ticketType' | 'dateOfBirth',
  rules: object,
  register: UseFormRegister<ITicketFormData>,
  type: string,
  className?: string,
}

function Input(props: IInputProps) {
  return (
    <input
      type={props.type}
      className={twMerge(`font-body w-full h-12 px-2 rounded-lg focus-within:ring-2 ring-blue dark:ring-blue-dark outline-none text-grey ${props.className || ''}`)}
      {...props.register(props.name, props.rules)}
    />
  );
}
