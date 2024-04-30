import { Link } from '@nextui-org/react';
import { ISoundtrack } from '@/types/ISoundtrack';
import { getYouTubeUrl } from '@/helpers/getYouTubeUrl';

interface IProps {
  value: ISoundtrack;
}

export function Soundtrack({ value: { title, authors, youtubeId } }: IProps) {
  return (
    <Link
      isExternal
      className={`h-full justify-center flex flex-col text-xl bg-slate-800/[.8] text-white p-4 rounded-xl`}
      href={getYouTubeUrl(youtubeId).toString()}
    >
      {title}

      <div className='flex gap-2 mt-2 text-sm'>
        {authors.map((author, index) => (
          <span key={index} className={`bg-gray-500/[.3] rounded-xl p-2`}>
            {author}
          </span>
        ))}
      </div>
    </Link>
  );
}
