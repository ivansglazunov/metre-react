import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <div>
        <Link to="/store-params">/store-params</Link>
      </div>
      <div>
        <Link to="/store-props">/store-props</Link>
      </div>
      <div>
        <Link to="/store-state">/store-state</Link>
      </div>
      <div>
        <Link to="/fake-meteor-use-method">/fake-meteor-use-method</Link>
      </div>
      <div>
        <Link to="/fake-meteor-with-tracker">/fake-meteor-with-tracker</Link>
      </div>
      <div>
        <Link to="/fake-meteor-methods-tracker">
          /fake-meteor-methods-tracker
        </Link>
      </div>
      <div>
        <Link to="/example">/example</Link>
      </div>
    </>
  );
};
