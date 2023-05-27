import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'

import petsReducer from './petsStore/reducers'
import { IPetReducer } from './petsStore/types'

const rootReducer = combineReducers({ petsReducer })

export const store = createStore(rootReducer, applyMiddleware(thunk))