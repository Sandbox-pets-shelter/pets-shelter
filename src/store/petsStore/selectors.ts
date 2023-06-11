import { IPetStore } from './types'

export const selectPets = (state: IPetStore) => state.petsReducer.pets
export const selectPet = (state: IPetStore) => state.petsReducer.pet
export const selectTotalPages = (state: IPetStore) => state.petsReducer.totalPage
export const selectCurrentPage = (state: IPetStore) => state.petsReducer.currentPage
export const selectStories = (state: IPetStore) => state.petsReducer.stories