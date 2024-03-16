import { Base } from './Base';
import { IPhoto } from '../interfaces';
import { PHOTO_COMPONENT_KEY } from '../config';

export class Photo extends Base<IPhoto> {
  protected key: string = PHOTO_COMPONENT_KEY;
}
