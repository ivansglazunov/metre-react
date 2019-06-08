import React, { useState, useEffect } from "react";

import { withTracker } from "../../components/fake-meteor";

export default withTracker(() => {
  const [i, setI] = useState(0);

  useEffect(() => {
    setTimeout(() => setI(i + 1), 1000);
  }, [i, setI]);

  return { i };
})(({ i }) => {
  return <div>{i}</div>;
});
