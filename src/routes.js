import React from "react";
import { Route, Switch } from "react-router";

import Analitics from "./analitics";

import "./styles.css";
import "normalize.css";

import Example from "./pages/example/index";
import storeParams from "./pages/example/store-params";
import storeProps from "./pages/example/store-props";
import storeState from "./pages/example/store-state";

export const routes = (
  <Switch>
    <Route path="/store-params" component={storeParams} />
    <Route path="/store-props" component={storeProps} />
    <Route path="/store-state" component={storeState} />
    <Route component={Example} />
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
