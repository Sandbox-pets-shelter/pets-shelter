import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import modalsReducer from './modalStore/reducers';
import petsReducer from './petsStore/reducers';

modalsReducer;

export const rootReducer = combineReducers({ petsReducer, modalsReducer });

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
