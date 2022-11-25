export interface IReferenceItem {
  match?: string | RegExp;

  author?: string;

  title: string;

  excludeFromReferencesComponent?: boolean;

  src: string;
}
