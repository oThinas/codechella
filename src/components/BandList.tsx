import { Text } from '.';

import { IBandList } from '../interfaces';

import { convertObjectToArray } from '../utils';

export function BandList(bands: IBandList) {
  const bandsInArray: IBandList = convertObjectToArray(bands);

  return (
    <ul
      className='flex flex-col xl:flex-row xl:flex-wrap xl:justify-center items-center gap-8 text-center text-grey dark:text-white'
    >
      {
        bandsInArray.map((band, index) => {
          if (!Array.isArray(band.items)) {
            return (
              <li key={index} className='w-full'>
                <Text
                  size={band.size}
                  bold={band.weight === 'bold'}
                  extraBold={band.weight === 'extraBold'}
                >
                  {band.items}
                </Text>
              </li>
            );
          }

          return (
            <div key={index} className='flex flex-col md:flex-row gap-4 md:gap-8 items-center'>
              {band.items.map((item, index) => (
                <li key={index}>
                  <Text
                    size={band.size}
                    bold={band.weight === 'bold'}
                    extraBold={band.weight === 'extraBold'}
                  >
                    {item}
                  </Text>
                </li>
              ))}
            </div>
          );
        })
      }
    </ul>
  );
}
