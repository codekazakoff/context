// useState with Context

// import UserContext from "./Context/User";
// import Header from "./Header/Header";
// import List from "./List";

// const App = () => {
//   return (
//     <UserContext>
//       <Header />
//       <List />
//     </UserContext>
//   );
// };

// export default App;

// class Components with Context

import React, { Component } from "react";
import ClassUser from "./ClassUser";
import { ClassContextProvider } from "./Context/UserClass";
class App extends Component {
  state = {
    data: {
      name: "jon",
      age: 22,
    },
  };
  render() {
    return (
      <ClassContextProvider value={[this.state.data]}>
        <ClassUser />
      </ClassContextProvider>
    );
  }
}

export default App;
