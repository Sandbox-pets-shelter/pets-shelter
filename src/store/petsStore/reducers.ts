import { IPetStoreAction } from './types'

const initialState = {
    currentPage: 0,
    totalPage: null,
    pets: [],
    dataPerPage: 10
}

const petsReducer = (state = initialState, action: IPetStoreAction) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                pets: action.payload.pets
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state
    }
}

export default petsReducer