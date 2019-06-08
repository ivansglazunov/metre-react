import React, { useState } from "react";
import withTracker from "../../simulate";

import { SomePageComponent } from "../../components/example";

export default withTracker(() => {
  const [currentUser, setCurrentUser] = useState(0);

  return {
    currentUser: currentUser,
    setCurrentUser
  };
})(({ currentUser, setCurrentUser }) => {
  const [count, setCount] = useState(0);

  return (
    <SomePageComponent
      currentUser={currentUser}
      setCurrentUser={setCurrentUser}
      count={count}
      setCount={setCount}
    />
  );
});
