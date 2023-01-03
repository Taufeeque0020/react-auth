// import React, { useState } from "react";
// import Context from "./context";

// const TokenProvider = (props) => {
//   const [token, setToken] = useState([]);
  
  
//   const addTokenHandler = (id) => {
//     setToken((prevToken) => {
//       return [prevToken, id];
//     });
//     console.log(token);
//   };
  
//   const removeTokenHandler = () => {};
  
//   let context = {
//     tokens: token,
//     addToken: addTokenHandler,
//     removeToken: removeTokenHandler,
//   };

//   return <Context.Provider value={context}>{props.children}</Context.Provider>;
// };

// export default TokenProvider;
