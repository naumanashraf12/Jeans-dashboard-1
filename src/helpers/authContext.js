import { createContext } from "react";

const authContext = createContext({
  auth: null,
  setAuth: (auth) => {},
  isLoading: false,
  setIsLoading: (state) => {},
  socket: null,
});

export default authContext;
