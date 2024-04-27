import { Soundtrack } from '@/components/Soundtrack';
import { Layout } from '@/components/common/Layout';
import { SORTED_SOUNDTRACKS } from '@/data/soundtracks';

export function Soundtracks() {
  return (
    <Layout>
      <div className='grid grid-cols-12 gap-4 px-4'>
        {SORTED_SOUNDTRACKS.map((soundtrack, index) => (
          <div key={`soundtrack-${index}`} className='h-full col-span-12 md:col-span-4'>
            <Soundtrack value={soundtrack} />
          </div>
        ))}
      </div>
    </Layout>
  );
}
