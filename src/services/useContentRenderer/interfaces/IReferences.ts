import { IReferenceItem } from './IReferenceItem';

export interface IReferences {
  items: IReferenceItem[];

  renderInParagraphs: boolean;

  renderAtTheEnd: boolean;
}
