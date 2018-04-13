import 'reflect-metadata';
import { Container } from 'inversify';

import { map } from 'lodash-es';

import { configureStore } from '../components/state/store';

import Utilities from '../shared/utils';

import {
  ConfigureStoreFn,
  LodashMapFn
} from './types';

import { Identifiers } from './constants';

let container = new Container();

container.bind<LodashMapFn>(Identifiers.LodashMapFn).toFunction(map);
container.bind<ConfigureStoreFn>(Identifiers.ConfigureStoreFn).toFunction(configureStore);
container.bind<Utilities>(Identifiers.Utilities).to(Utilities);

export default container;
