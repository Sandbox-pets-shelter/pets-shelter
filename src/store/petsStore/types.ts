import { IPet } from 'types/IPet'

export interface IPetStoreAction {
    type: string,
    payload: IPetReducer
}

export interface IPetReducer {
    currentPage: number,
    pets: IPet[],
    pet: IPet,
    totalPage: number
}

export interface IPetStore {
    petsReducer: IPetReducer
}