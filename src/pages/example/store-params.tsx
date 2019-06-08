import React from "react";

import Store from "../../components/store/params";
import { StoreExample } from "../../components/example";

export default () => {
  return (
    <Store name="store">
      <StoreExample />
    </Store>
  );
};
