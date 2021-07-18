import UserContext from "./Context/User";
import Header from "./Header/Header";
import List from "./List";

const App = () => {
  return (
    <UserContext>
      <Header />
      <List />
    </UserContext>
  );
};

export default App;
