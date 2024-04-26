import { ReactNode } from 'react';

import { Photo } from '../components';
import { Image, Link } from '@nextui-org/react';

export function renderPhoto(index: number, photo: Photo): ReactNode {
  const { data } = photo;

  const { height, width, className, src, description, sourceUrl, showDescription } = data;

  return (
    <div key={index}>
      <div className='flex flex-col items-center justify-center'>
        <Image
          width={width}
          height={height}
          loading='lazy'
          className={className}
          src={src}
          alt={description}
          aria-placeholder={description}
        />

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
    </div>
  );
}
