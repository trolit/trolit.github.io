import { THEME_CLASSNAME } from '@/config';
import { DISPLAY_NAME } from '@/data/user';
import { Divider } from '@nextui-org/react';

export function Signature() {
  return (
    <div>
      <h1
        className={`tracking-tight inline font-semibold ${THEME_CLASSNAME} text-[2.5rem] lg:text-6xl bg-clip-text text-transparent`}
      >
        {DISPLAY_NAME}
      </h1>

      <div className='flex items-center w-full overflow-hidden'>
        <Divider className={`${THEME_CLASSNAME} w-3 ml-1`} />

        <h1 className='inline ml-3 text-2xl font-semibold tracking-tight text-white'>website</h1>

        <Divider className={`${THEME_CLASSNAME} ml-3`} />
      </div>
    </div>
  );
}
