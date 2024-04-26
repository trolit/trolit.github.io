import { ReactNode } from 'react';

import { Photo } from '../components';
import { Image, Link } from '@nextui-org/react';

export function renderPhoto(index: number, photo: Photo): ReactNode {
  const { data } = photo;

  const { className, src, description, sourceUrl, showDescription } = data;

  return (
    <div key={index}>
      <Image className={className} src={src} alt={description} aria-placeholder={description} />

      {!!sourceUrl ||
        (showDescription && (
          <div className='text-right'>
            {showDescription ? (
              `${description}`
            ) : (
              <Link isExternal href={sourceUrl} color='secondary'>
                (source)
              </Link>
            )}
          </div>
        ))}
    </div>
  );
}
