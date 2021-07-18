import React, { useContext } from "react";

import { userContext } from "../Context/UserClass";

const Header = () => {
  const [user] = useContext(userContext);

  return (
    <div>
      <h1>Header</h1>

      <h2>{user.name}</h2>
    </div>
  );
};

export default Header;
