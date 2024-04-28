interface IProps {
  identifier: string | number;

  value: string[];
}

export function Tags({ identifier, value }: IProps) {
  return (
    <div className='flex flex-wrap gap-3 gap-y-1 text-small text-slate-600'>
      {value.map((tag, index) => (
        <div key={`${identifier}-tag-${index}`}>{tag}</div>
      ))}
    </div>
  );
}
