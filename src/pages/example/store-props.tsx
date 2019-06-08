import React, { useState } from "react";

import Store from "../../components/store/props";
import Example from "../../components/example/store";

export default () => {
  const [value, set] = useState({});

  return (
    <Store value={() => value} set={data => set(data)}>
      <Example />
    </Store>
  );
};
