import React, { createContext, useContext, useState } from "react";

export const CounterContext = createContext();
export const useCounter = () => {
  useContext(CounterContext);
};
const CounterContextProvider = (props) => {
  const [Counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(Counter + 1);
  };
  const decreaseCounter = () => {
    setCounter(Counter - 1);
  };
  const values = {
    Counter,
    increaseCounter,
    decreaseCounter,
  };

  return (
    <CounterContext.Provider value={values}>
      {props.children}
    </CounterContext.Provider>
  );
};
export default CounterContextProvider;
