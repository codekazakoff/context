import React, { useContext } from "react";

import { Context } from "./App";

const User = () => {
  const { user, setUser } = useContext(Context);

  console.log(user);

  return (
    <div>
      <p>{user.name}</p>

      <button onClick={() => setUser((prev) => ({ ...prev, name: "ali" }))}>
        Change User
      </button>
    </div>
  );
};

export default User;
