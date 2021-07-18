import React, { Component } from "react";

import { ClassContextConsumer } from "./Context/UserClass";

class ClassUser extends Component {
  render() {
    return (
      <ClassContextConsumer>
        {({ user }) => <h2>Navbar{user.name}</h2>}
      </ClassContextConsumer>
    );
  }
}

export default ClassUser;
