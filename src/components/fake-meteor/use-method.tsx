import React, { useEffect, useState, useContext } from "react";
import { isEqual } from "lodash";

import { IMethodCall } from "./index";

export const defaultMethodCall = (name, ...args) => null;
export const defaultArgs = [];

export const Context = React.createContext<IMethodCall>(defaultMethodCall);

export default (
  name: string,
  args: any[] = defaultArgs,
  PropsContext?: React.Context<IMethodCall>
) => {
  const [error, setError] = useState(null);
  const [prevName, setPrevName] = useState();
  const [prevArgs, setPrevArgs] = useState<any[]>();
  const [result, setResult] = useState();

  const call = useContext<IMethodCall>(PropsContext || Context);

  useEffect(() => {
    if (name !== prevName || !isEqual(args, prevArgs)) {
      setPrevArgs(args);
      setPrevName(name);
      call(name, ...args, (error, result) => {
        setError(error);
        setResult(result);
      });
    }
  }, [name, args, prevName, setPrevName, prevArgs, setPrevArgs, call]);

  return [error, result];
};
