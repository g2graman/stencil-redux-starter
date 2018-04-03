import { Action } from "@stencil/redux";
import { map } from 'lodash-es';
import { configureStore } from "../components/state/store";

export type LodashMapFn = typeof map;
export type ConfigureStoreFn = typeof configureStore;

export type ActionMap = {[key: string]: { ACTION: Action }};
