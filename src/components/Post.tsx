import { THEME_CLASSNAME, UNDERLINE_CLASSNAME } from '@/config';
import { formatDate } from '@/helpers/formatDate';
import { IPost } from '@/types/IPost';
import { Button, Card, CardBody } from '@nextui-org/react';
import { TagsIcon } from 'lucide-react';

interface IProps {
  value: IPost;

  onPress: () => void;
}

export function Post({ value: { name, abstract, date, tags }, onPress }: IProps) {
  return (
    <Card radius='lg'>
      <CardBody>
        <div className='grid grid-cols-12 px-2'>
          <div className='col-span-12 sm:col-span-5'>
            <div
              className={`tracking-tight inline font-semibold ${THEME_CLASSNAME} text-[2.5rem] bg-clip-text text-transparent bg-gradient-to-b`}
            >
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
                    className={`p-1 underline lowercase text-md underline-offset-8 ${UNDERLINE_CLASSNAME}`}
                  >
                    {tag.text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-between col-span-12 pl-2 sm:col-span-7'>
            <p className='my-6 text-lg text-justify text-default-500'>{abstract}</p>

            <div className='flex justify-end'>
              <Button className={`${THEME_CLASSNAME} text-white`} onPress={onPress}>
                Read more
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
