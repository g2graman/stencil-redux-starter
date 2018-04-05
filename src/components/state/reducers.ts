import { combineReducers } from 'redux';
import get from 'lodash-es/get';

import initialState, { CountState } from './state';
import { TypeKeys, ActionTypes } from './actions';
import { Action } from '@stencil/redux';

const reduceIncrement = (state: CountState = initialState) => ({
  ...state,
  count: (state.count || 0) + 1
});

const reduceDecrement = (state: CountState = initialState) => ({
  ...state,
  count: (state.count || 0) - 1
});

const REDUCER_MAP = {
  [TypeKeys.INCREMENT]: reduceIncrement,
  [TypeKeys.DECREMENT]: reduceDecrement
};

const countReducer = (state: CountState = initialState, action: ActionTypes) => {
  let actionHandler = get(REDUCER_MAP, action.type) as Action;

  if (actionHandler) {
    return actionHandler(state) as CountState;
  }

  return state;
};

export default combineReducers({
  count: countReducer
});
