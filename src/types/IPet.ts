import { Shelter } from './IShelter';

export enum Category {
  cats,
  kitten,
  dogs,
  puppies,
  other
}

export enum Gender {
  MALE = 'Мальчик',
  FEMALE = 'Девочка'
}

export enum Character {
  CALM = 'спокойный',
  ACTIVE = 'активный'
}

export enum Size {
  SMALL = 'маленький',
  AVERAGE = 'средний',
  BIG = 'большой'
}

export enum Wool {
  WITHOUT = 'Бесшерстный',
  SHORT = 'Короткошерстный',
  MEDIUM = 'Среднешерстный',
  LONG = 'Длинношерстный'
}

export enum Med {
  VET_PASSPORT = 'Есть ветпаспорт',
  STERILIZED = 'Стерилизован',
  VACCINATED = 'Вакцинирован',
  CHIPPED = 'Чипирован',
  TREATED_FOR_PARASITES = 'Обработан от паразитов'
}

export interface IPetPhoto {
  id: number;
  link: string;
}

export interface IPet {
  id: number;
  name: string;
  age: string;
  category: keyof typeof Category;
  found: boolean;
  liked: boolean;
  help: boolean;
  gender: keyof typeof Gender;
  character: keyof typeof Character;
  med: (keyof typeof Med)[];
  size: keyof typeof Size;
  wool: keyof typeof Wool;
  history: string;
  video: string;
  color: string;
  home: string;
  photos: IPetPhoto[];
  shelter: Shelter;
}
