import { Element } from '.';
import { ITrack } from '@/interfaces/dashboard/ITrack';
import { tracksNavigationItem } from '@/assets/data/dashboard';

interface IProps {
  item: ITrack;
}

export function TrackElement({ item }: IProps) {
  const { title } = item;

  return <Element icon={tracksNavigationItem.icon} text={title} />;
}
