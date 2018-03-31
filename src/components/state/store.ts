import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers';
import { COUNT_STATE } from './state';

export const configureStore = (preloadedState: COUNT_STATE) =>
  createStore(rootReducer, preloadedState, applyMiddleware(logger));
