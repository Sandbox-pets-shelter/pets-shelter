export interface Image {
    image: string
}

export interface ICard {
    age: string
    breed: string
    chip: string
    color: string
    draft: string
    gender: string
    history: string
    id: number
    kind: string
    name: string
    parasite: string
    reproduce: string
    sterile: string
    story: string
    vaccine: string
    liked?: boolean
    images?: string[]
}

// export interface ICard {
//     key: number,
//     name: string,
//     age: string,
//     descr: string,
//     liked: boolean,
//     shelter: string,
//     gender: string,
//     size: string,
//     color: string,
//     type: string,
//     family: string,
//     history: string,
//     chipped: boolean,
//     vaccinated: boolean,
//     sterilized: boolean,
//     passport: boolean,
//     treated: boolean,
//     src: Image[]
// }