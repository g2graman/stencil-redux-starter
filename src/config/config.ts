
import {Container, ContainerModule, interfaces} from 'inversify';
import 'reflect-metadata';

import map from 'lodash-es/map';

import { configureStore } from "../components/state/store";

import Utilities from "../shared/utils";

import {
  ConfigureStoreFn,
  LodashMapFn
} from "./types";

import { Identifiers } from "./constants";

const containerModule = new ContainerModule(
  (
    bind: interfaces.Bind
  ) => {
      bind<LodashMapFn>(Identifiers.LodashMapFn).toFunction(map);
      bind<ConfigureStoreFn>(Identifiers.ConfigureStoreFn).toFunction(configureStore);
      bind<Utilities>(Identifiers.Utilities).toService(Utilities);
  }
);

let container = new Container({
  autoBindInjectable: true,
  // defaultScope: "Singleton"
});

container.load(containerModule);
export default container;
