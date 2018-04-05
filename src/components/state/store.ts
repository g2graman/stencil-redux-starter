import { createStore, applyMiddleware, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import logger from 'redux-logger';

import rootReducer from './reducers';
import { CountState } from './state';

export const configureStore = (preloadedState: CountState) => createStore(
  rootReducer as Reducer<CountState>,
  preloadedState,
  composeWithDevTools({})(applyMiddleware(logger))
);
