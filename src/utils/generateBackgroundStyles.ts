export function generateBackgroundStyles(key: string) {
  const styles = `bg-${key}-banner-mobile-light md:bg-${key}-banner-tablet-light xl:bg-${key}-banner-desktop-light dark:bg-${key}-banner-mobile-dark dark:md:bg-${key}-banner-tablet-dark dark:xl:bg-${key}-banner-desktop-dark`;
  return { [key]: styles };
}
