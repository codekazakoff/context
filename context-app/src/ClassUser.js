import React, { Component } from "react";

import { ClassUserContext } from "./Context/UserClass";

class ClassUser extends Component {
  static contextType = ClassUserContext;
  render() {
    console.log(this.context);
    return (
      <div>
        Navbar
        {this.context.name}
      </div>
    );
  }
}

export default ClassUser;
