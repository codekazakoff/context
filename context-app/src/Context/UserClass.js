import { createContext } from "react";

export const ClassUserContext = createContext();

export const ClassContextProvider = ClassUserContext.Provider;

export const ClassContextConsumer = ClassUserContext.Consumer;

//   render() {
//     return (
//       <userContext.Provider value={"Hello"}>
//         {this.props.children}
//       </userContext.Provider>
//     );
//   }
// }
// export default ClassContext;
