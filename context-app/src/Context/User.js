import React, { createContext, useState } from "react";

export const Context = createContext();

const UserContext = (props) => {
  const [data, setData] = useState({
    name: "Wokhrux",
    age: 19,   
    jobs: "developer",
  });

  return (
    <Context.Provider value={{ user: data, setUser: setData }}>
      {props.children}
    </Context.Provider>
  );
};

export default UserContext;
