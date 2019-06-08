import React, { useState } from "react";

import { IProps as IBaseProps, Context } from "./";

export interface IProps extends IBaseProps {}

export const Provider = ({ context, default: def = {}, children }: IProps) => {
  const [value, set] = useState(def);
  const ResultContext = context || Context;
  return (
    <ResultContext.Provider
      value={{ get: () => value, set: data => set({ ...data }) }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export default Provider;
