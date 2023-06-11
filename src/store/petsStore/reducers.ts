import { IPetStoreAction } from './types'

const initialState = {
    currentPage: 0,
    totalPage: null,
    pets: [],
    stories: [],
    pet: null,
    dataPerPage: 10
}

const petsReducer = (state = initialState, action: IPetStoreAction) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                pets: action.payload.pets,
                totalPage: action.payload.totalPage
            }
        case 'FETCH_PET_DATA':
            return {
                ...state,
                pet: action.payload
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'FETCH_STORIES':
            return {
                ...state,
                stories: action.payload.stories
            }
        default:
            return state
    }
}

export default petsReducer