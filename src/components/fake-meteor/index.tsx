import withTracker from "./with-tracker";
import useMethod, { Context as UseMethodContext } from "./use-method";

export interface IMethodCall {
  (name: string, ...args: any[]): any;
}

export { withTracker, useMethod, UseMethodContext };
