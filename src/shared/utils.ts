import { Action } from '@stencil/redux';
import { inject, injectable } from 'inversify';

import { Identifiers } from '../config/constants';
import {
  ActionMap,
  ConfigureStoreFn,
  LodashMapFn
} from '../config/types';

@injectable()
export default class Utilities {
  private _map: LodashMapFn;
  private _configureStore: ConfigureStoreFn;

  constructor(
    @inject(Identifiers.LodashMapFn) map: LodashMapFn,
    @inject(Identifiers.ConfigureStoreFn) configureStore: ConfigureStoreFn
  ) {
    this._map = map;
    this._configureStore = configureStore;
  }

  mapDispatchtoProps(ActionMap: ActionMap) {
    return this._map(
      ActionMap,
      (actionSpace: {
        ACTION: Action
      }) => ({
        [actionSpace.ACTION.name]: actionSpace.ACTION
      })).reduce((acc, current) => ({
      ...acc,
      ...current
    }));
  }

   mapDispatchtoMethods(ctx: any, ActionMap: ActionMap ) {
    const dispatch = this.mapDispatchtoProps(ActionMap);

    Object.keys(dispatch).forEach(
      actionDispatch => ctx[actionDispatch] = dispatch[actionDispatch]
    );
  };

  setupStore(ctx: any, ActionMap: {[key: string]: { ACTION: Action }}, initialState) {
    ctx.store.setStore(this._configureStore(initialState));

    ctx.store.mapStateToProps(ctx, (state) => {
      const {
        count
      } = state;

      return count;
    });

    ctx.store.mapDispatchToProps(ctx, this.mapDispatchtoProps(ActionMap));
  };
};
