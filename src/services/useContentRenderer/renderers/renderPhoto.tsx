import { ReactNode } from 'react';

import { Photo } from '../components';
import { Image, Link } from '@nextui-org/react';

export function renderPhoto(index: number, photo: Photo): ReactNode {
  const { data } = photo;

  const { className, src, description, sourceUrl } = data;

  return (
    <div key={index}>
      <Image className={className} src={src} alt={description} aria-placeholder={description} />

      {!!sourceUrl && (
        <div className='text-right'>
          <Link isExternal href={sourceUrl} color='secondary'>
            (source)
          </Link>
        </div>
      )}
    </div>
  );
}
