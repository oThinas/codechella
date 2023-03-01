import { Text } from './Text';

export function Banner() {
  return (
    <div
      className='h-[270px] md:h-[384px] xl:h-[407px] bg-cover text-center flex items-center justify-center
      bg-banner-mobile-light md:bg-banner-tablet-light xl:bg-banner-desktop-light
      dark:bg-banner-mobile-dark dark:md:bg-banner-tablet-dark dark:xl:bg-banner-desktop-dark'
    >
      <Text asChild size={32} type='title' className='text-grey dark:text-white max-w-[271px]'>
        <h1>
          Boas-vindas ao #CodeChella2023!
        </h1>
      </Text>
    </div>
  );
}
