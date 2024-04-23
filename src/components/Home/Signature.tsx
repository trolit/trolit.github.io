import { DISPLAY_NAME } from '@/data/user';
import { Divider } from '@nextui-org/react';

export function Signature() {
  return (
    <div>
      <h1 className='tracking-tight inline font-semibold from-[#EC8212] to-[#D47510] text-[2.5rem] lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b'>
        {DISPLAY_NAME}
      </h1>

      <div className='flex items-center w-full overflow-hidden'>
        <Divider className='w-3 ml-1 bg-orange-500' />

        <h1 className='inline ml-3 text-2xl font-semibold tracking-tight'>website</h1>

        <Divider className='ml-3 bg-orange-500' />
      </div>
    </div>
  );
}
