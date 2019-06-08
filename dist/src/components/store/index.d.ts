/// <reference types="react" />
import Params from "./params";
import Props from "./props";
import State from "./state";
export interface IProps {
  context?: any;
  default?: any;
  children: JSX.Element;
  [key: string]: any;
}
export interface IStore {
  get: () => any;
  set: (data: any) => void;
}
export declare const Context: any;
export { Params, Props, State };
