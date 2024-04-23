import { getGitHubUrl } from '@/helpers/getGitHubUrl';
import { Link } from '@nextui-org/react';

export function Footer() {
  const { hostname, pathname, href } = getGitHubUrl();

  return (
    <div className='grid items-end flex-grow grid-cols-2 pb-2 sm:pb-0'>
      <div className='ml-1'>
        <blockquote className='max-w-[460px] p-4 border-s-4 border-orange-500 bg-orange-600/[.25] rounded-r-2xl text-white'>
          <p className='italic text-md'>I have not failed. I just found 10,000 ways that won't work.</p>

          <p className='text-right underline decoration-4 decoration-orange-700'>Thomas Edison</p>
        </blockquote>
      </div>

      <div className='flex justify-end'>
        <Link isExternal showAnchorIcon href={href} color='warning'>
          {hostname}
          {pathname}
        </Link>
      </div>
    </div>
  );
}
