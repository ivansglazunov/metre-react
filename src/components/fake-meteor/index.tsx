import withTracker from "./with-tracker";
import useMethod, { Context as UseMethodContext } from "./use-method";
import MethodsTracker from "./methods-tracker";

export interface IMethodCall {
  (name: string, ...args: any[]): any;
}

export interface IMethodsResults {
  [key: string]: [any, any];
}
export interface ITrackerResults {
  [key: string]: any;
}

export interface IMethodsTrackerProps<IProps> {
  Methods: React.ComponentType<any>;
  tracker: (props: IProps) => ITrackerResults;
  render: React.ComponentType<any>;
  [prop: string]: any;
}

export { withTracker, useMethod, UseMethodContext, MethodsTracker };
