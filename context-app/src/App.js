import { createContext, useState } from "react";
import User from "./User";

export const Context = createContext();

const App = () => {
  const [data, setData] = useState({
    name: "Wokhrux",
    age: 19,
    jobs: "developer",
  });

  return (
    <Context.Provider value={{ user: data, setUser: setData }}>
      <User />
    </Context.Provider>
  );
};

export default App;
