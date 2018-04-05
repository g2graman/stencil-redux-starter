import { createStore, applyMiddleware, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import logger from 'redux-logger';

import rootReducer from './reducers';
import { COUNT_STATE } from './state';

export const configureStore = (preloadedState: COUNT_STATE) => createStore(
  rootReducer as Reducer<COUNT_STATE>,
  preloadedState,
  composeWithDevTools({})(applyMiddleware(logger))
);
