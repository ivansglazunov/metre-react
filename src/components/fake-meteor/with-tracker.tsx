import React from "react";

export default <IResult extends any, IProps extends any>(
  generator: (props: IProps) => IResult
) => {
  return (Component: React.ComponentType<IResult>) => {
    return (props: IProps) => {
      return <Component {...props} {...generator(props)} />;
    };
  };
};
