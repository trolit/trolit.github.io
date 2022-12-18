import { formatDate } from '@/helpers/formatDate';

interface IProps {
  value: string;

  format?: string;
}

export function FormattedDate({ value, format }: IProps) {
  return <>{formatDate(value, format)}</>;
}
