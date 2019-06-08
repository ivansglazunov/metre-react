import React, { useState } from "react";

import Store from "../components/store/props";
import { StoreExample } from "../components/example";

export default () => {
  const [value, set] = useState({});

  return (
    <Store get={() => value} set={data => set(data)}>
      <StoreExample />
    </Store>
  );
};
