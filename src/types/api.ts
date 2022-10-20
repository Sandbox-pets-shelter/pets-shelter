// TODO: Всё что ниже примеры

export interface IRequestPost<T> {
  config: any
  data: T
  headers: any
  request: XMLHttpRequest
  status: number
  statusTetx: string
}

export interface IHero {
  name: string
  height: string
  mass?: string
  hair_color?: string
  skin_color?: string
  eye_color?: string
  birth_year?: string
  gender?: string
  homeworld: string
  films?: string[]
  species?: string[]
  vehicles?: string[]
  starships?: string[]
  created?: string
  edited?: string
  url: string
}

export interface IHeroesPage {
  count: number
  next: string
  previous: null | string
  results: IHero[]
}

export interface IPlanet {
  climate: string
  created: string
  diameter: string
  edited: string
  films: string[]
  gravity: string
  name: string
  orbital_period: string
  population: string
  residents: string[]
  rotation_period: string
  surface_water: string
  terrain: string
  url: string
}
