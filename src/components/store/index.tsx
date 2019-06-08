import React from "react";
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

export const Context = React.createContext<IStore>({
  get: () => ({}),
  set: () => undefined
});

export { Params, Props, State };
