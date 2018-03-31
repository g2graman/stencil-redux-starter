import { INCREMENT } from './increment';
import { DECREMENT } from './decrement';

export enum TypeKeys {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export type ActionTypes = {
  type: TypeKeys
};

export default {
  INCREMENT,
  DECREMENT,
}
