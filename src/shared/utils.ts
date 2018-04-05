import { Action } from '@stencil/redux';

import { inject, injectable } from 'inversify';
import { Identifiers } from '../config/constants';

import {
  ActionMap,
  ConfigureStoreFn,
  LodashMapFn,
} from '../config/types';

import { MyApp } from '../components/my-app/my-app';

@injectable()
export default class Utilities {
  @inject(Identifiers.LodashMapFn) private readonly _map: LodashMapFn;
  @inject(Identifiers.ConfigureStoreFn) private readonly _configureStore: ConfigureStoreFn;

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

   mapDispatchtoMethods(ctx: MyApp, ActionMap: ActionMap ) {
    const dispatch = this.mapDispatchtoProps(ActionMap);

    Object.keys(dispatch).forEach(
      actionDispatch => ctx[actionDispatch] = dispatch[actionDispatch]
    );
  };

  setupStore(ctx: MyApp, ActionMap: ActionMap, initialState) {
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
