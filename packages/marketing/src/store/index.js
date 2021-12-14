import { createStore,  applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

import rootReducer from '../reducer';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(thunk))
);