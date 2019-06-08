import React from "react";

import { IProps as IBaseProps, IStore, Context } from "./";

export interface IProps extends IBaseProps, IStore {}

export const Provider = ({
  set,
  get,
  context,
  default: def,
  children
}: IProps) => {
  const ResultContext = context || Context;
  return (
    <ResultContext.Provider value={{ get, set }}>
      {children}
    </ResultContext.Provider>
  );
};

export default Provider;
