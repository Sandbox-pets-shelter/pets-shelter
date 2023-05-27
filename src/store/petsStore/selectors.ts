import { IPetStore } from './types'

export const selectPets = (state: IPetStore) => state.petsReducer.pets
export const selectTotalPages = (state: IPetStore) => state.petsReducer.totalPage
export const selectCurrentPages = (state: IPetStore) => state.petsReducer.currentPage