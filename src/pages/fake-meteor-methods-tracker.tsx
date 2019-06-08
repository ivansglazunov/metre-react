import React, { useState } from "react";

import {
  MethodsTracker,
  UseMethodContext,
  useMethod
} from "../components/fake-meteor";

const call = (name, x, callback) => {
  setTimeout(() => callback(null, x + 1), 1000);
};

const Methods = ({ x, render }) => {
  const [result] = useMethod("test", [x]);

  return (
    <>
      {render({
        a: result
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
      <div>simulation of tracker depended from methods calls</div>
      <div>x sended to method</div>
      <div>a getting from method, with 1s pseudo network delay</div>
      <div>y sended to tracker</div>
      <div>b getting from tracker</div>
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
        Methods={Methods}
        tracker={tracker}
        render={render}
        x={x}
        y={y}
        Buttons={
          <>
            <button onClick={() => setX(x + 1)}>x({x})++</button>
            <button onClick={() => setY(y + 1)}>y({y})++</button>
          </>
        }
      />
    </UseMethodContext.Provider>
  );
};
