import { combineReducers } from 'redux';
import get from 'lodash-es/get';

import initialState, {COUNT_STATE} from './state';
import { TypeKeys, ActionTypes } from './actions';
import {Action} from "@stencil/redux";

const reduceIncrement = (state: COUNT_STATE = initialState) => ({
  ...state,
  count: (state.count || 0 ) + 1
});

const reduceDecrement = (state: COUNT_STATE = initialState) => ({
  ...state,
  count: (state.count || 0 ) - 1
});

const REDUCER_MAP = {
  [TypeKeys.INCREMENT]: reduceIncrement,
  [TypeKeys.DECREMENT]: reduceDecrement,
};

const countReducer = (state: COUNT_STATE = initialState, action: ActionTypes) => {
  let actionHandler = <Action> get(REDUCER_MAP, action.type);

  if (actionHandler) {
    return actionHandler(state) as COUNT_STATE;
  }

  return state;
};

export default combineReducers({
  count: countReducer
});
