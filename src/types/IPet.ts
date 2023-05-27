export enum Category {
    cats,
    kitten,
    dogs,
    puppies,
    other
}

export enum Gender {
    male,
    female
}

export enum Character {
    calm,
    active
}

export enum Size {
    small,
    average,
    big
}

export enum Wool {
    without,
    short,
    medium,
    long
}

export interface IPet {
    id: number
    name: string
    age: string
    category: Category
    found: boolean
    liked: boolean
    help: boolean
    gender: Gender
    character: Character
    med: boolean
    size: Size
    wool: Wool
    history: string
    video: string
    color: string
    home: string
    photos: string[]
    shelter: number
}