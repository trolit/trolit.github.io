import { IReferenceItem } from './IReferenceItem';

export interface IReferences {
  items: IReferenceItem[];

  renderInText: boolean;

  renderAtTheEnd: boolean;
}
