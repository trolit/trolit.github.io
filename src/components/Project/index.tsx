import dayjs from 'dayjs';
import { InfoIcon } from 'lucide-react';
import { Card, CardBody, Chip, Divider } from '@nextui-org/react';

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
          <div className='col-span-12'>
            <div className='flex flex-wrap items-center justify-between'>
              <div
                className={`px-4 py-1 rounded-full w-max`}
                style={{ color: language.colorInHex, backgroundColor: `${language.colorInHex}45` }}
              >
                {language.name}
              </div>

              <div className='self-start text-lg text-center sm:text-right'>
                <Chip size='lg' variant='flat'>
                  {isSameYear ? `${startedAtYear}` : `${startedAtYear}/${publishedAtYear}`}
                </Chip>
              </div>
            </div>
          </div>

          <div className={`col-span-9`}>
            <h4 className='text-2xl font-medium'>{name}</h4>

            <Tags identifier={name} value={tags} />
          </div>

          <div className='flex col-span-12 content'>
            {!!description && (
              <div className='mt-5'>
                <div className='text-justify text-md dark:text-white/60'>
                  <InfoIcon size={50} strokeWidth={0.5} className='float-left mr-2' />

                  {description}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='flex w-full mt-2 transition duration-300 ease-in-out justify-evenly opacity-20 hover:opacity-100'>
          <Links identifier={name} value={links} repositoryUrl={repositoryUrl} youTubeId={youTubeId} />

          <div>
            <Divider orientation='vertical' className='border-2 border-teal-400 border-solid' />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
