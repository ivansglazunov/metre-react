import React, { useState } from "react";
import { random } from "lodash";

import { UseMethodContext, useMethod } from "../components/fake-meteor";

let i = 0;
setInterval(() => i++, 1000);

const call = (name, ...args) => {
  const callback =
    typeof args[args.length - 1] === "function" ? args[args.length - 1] : null;
  if (name === "test" && callback)
    setTimeout(() => {
      if (random(0, 3)) callback(null, i);
      else callback("unexpected error", null);
    }, 1000);
};

const Component = () => {
  const [time, setTime] = useState(0);
  const [result, error] = useMethod("test", [time]);

  return (
    <div>
      <div>
        simulation of meteor calls, with 1s delay of response and random errors
      </div>
      <div>error</div>
      {JSON.stringify(error)};<div>result</div>
      {JSON.stringify(result)};
      <div>
        <button onClick={() => setTime(time + 1)}>{time}++</button>
      </div>
    </div>
  );
};

export default () => {
  return (
    <UseMethodContext.Provider value={call}>
      <Component />
    </UseMethodContext.Provider>
  );
};
