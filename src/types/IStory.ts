import { IPetPhoto } from './IPet';

export interface IStory {
  id: number;
  name: string;
  text: string;
  date: string;
  view: number;
  photos: IPetPhoto[];
}
