import { Action } from '@stencil/redux';

import map from 'lodash.map';

import { configureStore } from '../components/state/store';

export const mapDispatchtoProps = function mapDispatchtoProps(ActionMap: {[key: string]: { ACTION: Action }}){
  return map(
    ActionMap,
    (actionSpace: {
      ACTION: Action
    }) => ({
      [actionSpace.ACTION.name]: actionSpace.ACTION
    })).reduce((acc, current) => ({
    ...acc,
    ...current
  }));
};

export const mapDispatchtoMethods = function mapDispatchtoMethods(ctx: any, ActionMap: {[key: string]: { ACTION: Action }}) {
  const dispatch = mapDispatchtoProps(ActionMap);

  Object.keys(dispatch).forEach(
    actionDispatch => ctx[actionDispatch] = dispatch[actionDispatch]
  );
};

export const setupStore = function setupStore(ctx: any, ActionMap: {[key: string]: { ACTION: Action }}, initialState) {
  ctx.store.setStore(configureStore(initialState));

  ctx.store.mapStateToProps(ctx, (state) => {
    const {
      count
    } = state;

    return count;
  });

  ctx.store.mapDispatchToProps(ctx, mapDispatchtoProps(ActionMap));
};
