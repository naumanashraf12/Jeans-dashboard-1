import React, { createContext, useContext, useState } from "react";
export const AuthContext = createContext();
export const useAuth = () => {
  useContext(AuthContext);
};
const AuthContextProvider = (props) => {
  const [Auth, setAuth] = useState("Admin");

  return (
    <AuthContext.Provider value={{ Auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
