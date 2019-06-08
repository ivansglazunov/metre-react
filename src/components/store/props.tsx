import React from "react";

import { IProps as IBaseProps, Context } from "./";

export interface IProps extends IBaseProps {
  set?: (merge: any) => void;
  value?: () => any;
}

export const Provider = ({
  set,
  value,
  context,
  default: def,
  children
}: IProps) => {
  const ResultContext = context || Context;
  return (
    <ResultContext.Provider value={{ value, set }}>
      {children}
    </ResultContext.Provider>
  );
};

export default Provider;
