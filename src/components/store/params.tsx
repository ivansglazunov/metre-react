import * as jsonpack from "jsonpack/main";
import * as _ from "lodash";
import * as queryString from "query-string";
import React, { useEffect } from "react";
import { withRouter } from "react-router";

import { Context, IProps as IBaseProps } from "./";

export interface IProps extends IBaseProps {
  name: string;

  match: any;
  location: any;
  history: any;
}

export const getValue = (history, name) => {
  const search = queryString.parse(_.get(history, "location.search"));
  const _packed = _.get(search, name);
  const value = _packed ? jsonpack.unpack(_packed) : {};
  return value;
};

export const setValue = (history, name, data) => {
  const search = queryString.parse(_.get(history, "location.search"));
  const _packed = _.get(search, name);
  const value = _packed ? jsonpack.unpack(_packed) : {};
  const newSearch = queryString.stringify({
    ...search,
    [name]: jsonpack.pack(_.defaults(data, value))
  });
  history.push({
    search: "?" + newSearch
  });
};

export const Component = ({
  history,
  name,
  context,
  default: def,
  children
}: IProps) => {
  const ResultContext = context || Context;

  useEffect(() => {
    const value = getValue(history, name);
    setValue(history, name, { ...def, ...value });
  });
  return (
    <ResultContext.Provider
      value={{
        get: () => getValue(history, name),
        set: data => setValue(history, name, data)
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const Provider = withRouter(Component);

export default Provider;
