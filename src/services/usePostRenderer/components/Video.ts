import { Base } from './Base';
import { IVideo } from '../interfaces';
import { VIDEO_COMPONENT_KEY } from '../config';

export class Video extends Base<IVideo> {
  protected key: string = VIDEO_COMPONENT_KEY;
}
