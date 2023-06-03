import { IPet } from 'types/IPet'

export interface FetchedData {
    total: number,
    data: IPet[],
    pageable: Pageable
}

export interface Pageable {
    size: number,
    page: number
}

export interface IPetStoreAction {
    type: string,
    payload: IPetReducer
}

export interface IPetReducer {
    currentPage: number,
    pets: IPet[],
    totalPage: number
}

export interface IPetStore {
    petsReducer: IPetReducer
}