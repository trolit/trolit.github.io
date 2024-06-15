import dayjs from 'dayjs';
import { InfoIcon } from 'lucide-react';
import { Card, CardBody, Divider } from '@nextui-org/react';

import { Tags } from './Tags';
import { Links } from './Links';
import { IProject } from '@/types/IProject';

interface IProps {
  value: IProject;
}

export function Project({
  value: { name, language, tags, links, description, startedAt, repositoryUrl, estimatedDurationInMonths, youTubeId },
}: IProps) {
  const startedAtYear = dayjs(startedAt).year();
  const publishedAt = dayjs(startedAt).add(estimatedDurationInMonths, 'months');
  const publishedAtYear = publishedAt.year();
  const isSameYear = startedAtYear === publishedAtYear;

  return (
    <Card>
      <CardBody>
        <div className='grid h-full grid-cols-12 gap-3 px-2'>
          <div
            className='flex items-center justify-center col-span-4 text-xl rounded-sm'
            style={{ color: language.colorInHex, backgroundColor: `${language.colorInHex}70` }}
          >
            <div className={`px-4 py-1 rounded-full w-max`}>{language.name}</div>
          </div>

          <div className='flex items-center justify-center col-span-5 p-2 text-white rounded-sm bg-emerald-600'>
            <h4 className='text-2xl font-medium '>{name}</h4>
          </div>

          <div className='flex items-center justify-center col-span-3 text-lg text-white bg-indigo-700'>
            {isSameYear ? `${startedAtYear}` : `${startedAtYear}/${publishedAtYear}`}
          </div>

          <div className='col-span-12'>
            <Tags identifier={name} value={tags} />
          </div>

          {!!description && (
            <div className={`flex col-span-12`}>
              <div className='text-justify text-md dark:text-white/60'>
                <InfoIcon size={50} strokeWidth={0.5} className='float-left mr-2' />

                {description}
              </div>
            </div>
          )}

          <div className='flex w-full col-span-12 mt-2 transition duration-300 ease-in-out justify-evenly opacity-20 hover:opacity-100'>
            <Links identifier={name} value={links} repositoryUrl={repositoryUrl} youTubeId={youTubeId} />

            <div>
              <Divider orientation='vertical' className='border-2 border-teal-400 border-solid' />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
