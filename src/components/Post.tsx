import { formatDate } from '@/helpers/formatDate';
import { IPost } from '@/types/IPost';
import { Button, Card, CardBody } from '@nextui-org/react';
import { TagsIcon } from 'lucide-react';

interface IProps {
  value: IPost;
}

export function Post({ value: { name, abstract, date, tags } }: IProps) {
  return (
    <Card radius='lg'>
      <CardBody>
        <div className='grid grid-cols-12 px-2'>
          <div className='col-span-12 sm:col-span-5'>
            <div className='tracking-tight inline font-semibold from-indigo-500 to-indigo-600 text-[2.5rem] bg-clip-text text-transparent bg-gradient-to-b'>
              {name}
            </div>

            <div className='-mt-2 text-2xl tracking-tight text-slate-600 font-extralight'>
              {formatDate(date, 'DD.MM.YYYY')}
            </div>

            <div className='flex items-center mt-2'>
              <TagsIcon size={50} strokeWidth={0.4} />

              <div className='flex flex-wrap w-3/4 gap-3'>
                {tags.map((tag, index) => (
                  <span
                    key={`tag-${index}`}
                    className='p-1 underline lowercase text-md decoration-2 decoration-indigo-600 underline-offset-8'
                  >
                    {tag.text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className='col-span-12 sm:col-span-7'>
            <p className='my-6 text-lg text-justify text-default-500'>{abstract}</p>

            <div className='flex justify-end'>
              <Button color='success' variant='ghost'>
                Read more
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
