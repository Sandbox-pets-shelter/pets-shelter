import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


import petsReducer from './petsStore/reducers'

const rootReducer = combineReducers({ petsReducer })

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))