import { IProject } from '@/types/IProject';
import { Button, Card, CardBody, CardFooter, Chip, Divider, Image, Link } from '@nextui-org/react';
import { Tags } from './Tags';
import { Links } from './Links';
import dayjs from 'dayjs';
import { GitBranchIcon, InfoIcon } from 'lucide-react';
import { getYouTubeUrl } from '@/helpers/getYouTubeUrl';
import { THEME_CLASSNAME } from '@/config';

interface IProps {
  value: IProject;
}

export function Project({
  value: {
    sideImage,
    name,
    language,
    tags,
    links,
    description,
    startedAt,
    repositoryUrl,
    estimatedDurationInMonths,
    youTubeId,
    youTubeVideoInSeparateLine,
  },
}: IProps) {
  let duration = `${estimatedDurationInMonths} month${estimatedDurationInMonths > 1 ? 's' : ''}`;

  const startedAtYear = dayjs(startedAt).year();
  const publishedAt = dayjs(startedAt).add(estimatedDurationInMonths, 'months');
  const publishedAtYear = publishedAt.year();
  const isSameYear = startedAtYear === publishedAtYear;

  if (estimatedDurationInMonths > 12) {
    duration = `${dayjs(publishedAt).diff(startedAt, 'year', true).toFixed(2)} year(s)`;
  }

  const innerGridStructure = youTubeId && !youTubeVideoInSeparateLine ? `col-span-12 lg:col-span-6` : `col-span-12`;

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

              <div className='self-start px-2 py-2 text-lg text-center sm:text-right sm:py-0'>
                {isSameYear ? `${startedAtYear}` : `${startedAtYear}/${publishedAtYear}`}

                <Divider className='my-1' />

                <Chip size='md' variant='flat'>
                  {duration}
                </Chip>
              </div>
            </div>
          </div>

          <div className={`${innerGridStructure}`}>
            <h4 className='text-2xl font-medium'>{name}</h4>

            <Tags identifier={name} value={tags} />

            {!!description && (
              <div className='mt-5'>
                {sideImage && (
                  <div className='float-left mr-5'>
                    <Image className='object-fill' width={200} alt='NextUI hero Image' src={sideImage} />
                  </div>
                )}

                <div className='text-justify text-md dark:text-white/60'>
                  <InfoIcon size={50} strokeWidth={0.5} className='float-left mr-2' />

                  {description}
                </div>
              </div>
            )}
          </div>

          {youTubeId && (
            <div className={`flex ${innerGridStructure} items-center pl-2`}>
              <iframe
                className='w-full border-slate-600/[.4] border-3 rounded-xl aspect-video'
                src={getYouTubeUrl(youTubeId, { embed: true }).toString()}
              />
            </div>
          )}
        </div>
      </CardBody>

      <CardFooter>
        <div className='flex items-end justify-between w-full gap-2 px-2'>
          <div>{!!links.length && <Links identifier={name} value={links} />}</div>

          {!!repositoryUrl && (
            <Button
              as={Link}
              isExternal
              href={repositoryUrl}
              className={`${THEME_CLASSNAME} text-white`}
              startContent={<GitBranchIcon size={20} />}
            >
              repository
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
