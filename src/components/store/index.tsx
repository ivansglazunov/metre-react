import React from "react";

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

export const Context = React.createContext<any>({});
