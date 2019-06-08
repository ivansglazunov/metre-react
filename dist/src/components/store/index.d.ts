import Params from "./params";
import Props from "./props";
import State from "./state";
export interface IProps {
  context?: any;
  children?: any;
  default?: any;
  [key: string]: any;
}
export interface IValue {
  value: any;
  set: (merge: any) => void;
}
export declare const Context: any;
export { Params, Props, State };
