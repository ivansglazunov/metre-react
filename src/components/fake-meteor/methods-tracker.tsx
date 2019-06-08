import React from "react";
import { IMethodsTrackerProps } from "./index";
import withTracker from "./with-tracker";

const Tracked = withTracker<any, any>(({ tracker, ...props }) => {
  return { tracker: tracker(props) };
})(({ render: Component, ...props }) => {
  return <Component {...props} />;
});

export default ({
  methods: Methods,
  tracker,
  ...props
}: IMethodsTrackerProps<any>) => {
  return (
    <Methods
      {...props}
      render={methods => {
        return <Tracked methods={methods} tracker={tracker} {...props} />;
      }}
    />
  );
};
