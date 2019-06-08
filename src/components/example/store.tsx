import React, { useContext, useEffect } from "react";

import Example from ".";
import { Context } from "../store";

export default () => {
  const { value: get, set } = useContext(Context);
  const value = get();

  useEffect(() => {
    if (typeof value.currentUser !== "number")
      set({ ...value, currentUser: 0 });
    if (typeof value.count !== "number") set({ ...value, count: 0 });
  });

  return (
    <Example
      currentUser={value.currentUser}
      setCurrentUser={currentUser => set({ ...value, currentUser })}
      count={value.count}
      setCount={count => set({ ...value, count })}
    />
  );
};
