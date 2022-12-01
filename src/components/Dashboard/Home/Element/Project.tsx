import { IProject } from '@/interfaces/dashboard/IProject';
import { Element } from '.';

interface IProps {
  item: IProject;
}
export function ProjectElement({ item }: IProps) {
  const { name } = item;

  return <Element type='Project' text={name} />;
}
