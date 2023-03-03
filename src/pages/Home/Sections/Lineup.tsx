import { BandList, Heading, LineupHeader, Section } from '../../../components';

import { bandsDays } from '../../../utils/bandsDays';

export function Lineup() {
  return (
    <Section className='gap-12 py-12 xl:flex-col'>
      <Heading heading='h2' bold size={48} font='title' className='text-grey dark:text-white mb-6'>
        /Line-Up/
      </Heading>

      <div className='flex flex-col gap-24'>
        <LineupHeader>Sábado &lt;11/03&gt;</LineupHeader>
        <BandList {...bandsDays[0]} />

        <LineupHeader>Domingo &lt;12/03&gt;</LineupHeader>
        <BandList {...bandsDays[1]} />
      </div>
    </Section>
  );
}
