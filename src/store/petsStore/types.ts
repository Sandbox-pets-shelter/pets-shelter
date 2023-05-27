import { IPet } from 'types/IPet'

export interface IIncomeObj {
    total: number,
    content: [],
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