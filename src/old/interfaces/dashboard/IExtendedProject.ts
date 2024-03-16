import { IProject } from './IProject';

export interface IExtendedProject extends IProject {
  address: string;

  months: number;
}
