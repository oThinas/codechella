import { Heading } from '.';

export function Banner() {
  return (
    <div
      className='h-[270px] md:h-[384px] xl:h-[407px] bg-cover text-center flex items-center justify-center
      bg-banner-mobile-light md:bg-banner-tablet-light xl:bg-banner-desktop-light
      dark:bg-banner-mobile-dark dark:md:bg-banner-tablet-dark dark:xl:bg-banner-desktop-dark'
    >
      <Heading heading='h1' type='title' size={32} className='text-grey dark:text-white max-w-[271px]'>
        Boas-vindas ao #CodeChella2023!
      </Heading>
    </div>
  );
}
