import React, { useState } from "react";

import {
  MethodsTracker,
  UseMethodContext,
  useMethod
} from "../components/fake-meteor";

const call = (name, callback) => {
  callback(null, 1);
};

const Methods = ({ x, render }) => {
  const [result] = useMethod("test");

  return (
    <>
      {render({
        a: x + 1
      })}
    </>
  );
};
const tracker = ({ y, methods: { a } }) => {
  return {
    b: a + y + 1
  };
};
const render = ({ x, y, Buttons, methods: { a }, tracker: { b } }) => {
  return (
    <div>
      <div>props {Buttons}</div>
      <div>
        methods a({a}) = (x({x}) + 1)
      </div>
      <div>
        tracker b({b}) = (a({a}) + y({y}) + 1)
      </div>
    </div>
  );
};

export default () => {
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);

  return (
    <UseMethodContext.Provider value={call}>
      <MethodsTracker
        methods={Methods}
        tracker={tracker}
        render={render}
        x={x}
        y={y}
        Buttons={
          <>
            <button onClick={() => setX(x + 1)}>x({x})++</button>
            <button onClick={() => setY(y + 1)}>x({y})++</button>
          </>
        }
      />
    </UseMethodContext.Provider>
  );
};
