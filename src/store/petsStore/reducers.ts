import { IPetStoreAction } from './types'

const initialState = {
    currentPage: 1,
    totalPage: null,
    pets: []
}

const petsReducer = (state = initialState, action: IPetStoreAction) => {
    switch (action.type) {
        case 'SET_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'FETCH_DATA':
            return {
                ...state,
                currentPage: action.payload.currentPage,
                pets: action.payload.pets,
                totalPage: action.payload.totalPage
            }
        default:
            return state
    }
}

export default petsReducer