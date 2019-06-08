import React from "react";
import { Route, Switch } from "react-router";

import Analitics from "./analitics";

import "./styles.css";
import "normalize.css";

import index from "./pages/index";
import storeParams from "./pages/store-params";
import storeProps from "./pages/store-props";
import storeState from "./pages/store-state";
import fakeMeteor from "./pages/fake-meteor-use-method";
import withTracker from "./pages/fake-meteor-with-tracker";
import example from "./pages/example";
import fakeMeteorMethodsTracker from "./pages/fake-meteor-methods-tracker";

export const routes = (
  <Switch>
    <Route path="/store-params" component={storeParams} />
    <Route path="/store-props" component={storeProps} />
    <Route path="/store-state" component={storeState} />
    <Route path="/fake-meteor-use-method" component={fakeMeteor} />
    <Route path="/fake-meteor-with-tracker" component={withTracker} />
    <Route
      path="/fake-meteor-methods-tracker"
      component={fakeMeteorMethodsTracker}
    />
    <Route path="/example" component={example} />
    <Route component={index} />
  </Switch>
);

export default class Routes extends React.Component {
  render() {
    return (
      <>
        <Analitics />
        {routes}
      </>
    );
  }
}
