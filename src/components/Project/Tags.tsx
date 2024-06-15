import { Card, CardBody } from '@nextui-org/react';

interface IProps {
  identifier: string | number;

  value: string[];
}

export function Tags({ identifier, value }: IProps) {
  return (
    <Card shadow='sm'>
      <CardBody>
        <div className='grid grid-cols-12 px-2 gap-y-2'>
          {value.map((tag, index) => (
            <div key={`${identifier}-tag-${index}`} className='col-span-3 text-center text-tiny text-slate-600'>
              {tag}
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
