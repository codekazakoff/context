import React, { useContext } from "react";

import { Context } from "../Context/User";

const Header = () => {
  const { user } = useContext(Context);

  return (
    <div>
      <h1>Header</h1>

      <h2>{user.name}</h2>
    </div>
  );
};

export default Header;
