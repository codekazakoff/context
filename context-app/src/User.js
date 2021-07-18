import React, { useContext } from "react";

import { Context } from "./Context/User";

const User = () => {
  const { user, setUser } = useContext(Context);

  console.log(user);

  return (
    <div>
      <button onClick={() => setUser((prev) => ({ ...prev, name: "ali" }))}>
        Change Name Ali
      </button>
      <button onClick={() => setUser((prev) => ({ ...prev, name: "Wokhrux" }))}>
        Change Name Wokhrux
      </button>
    </div>
  );
};

export default User;
