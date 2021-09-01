import React, { useEffect, useRef } from "react";

export default function ClickAwayListener({ children, onClickAway }) {
  const elem = useRef();

  // checking if the event is triggered inside from the component
  const lisnterHandler = (event) => {
    var isClickInsideElement = elem.current?.contains(event.target);
    if (!isClickInsideElement) {
      onClickAway();
    }
  };
  // adding event listener and removing it on unmount
  useEffect(() => {
    document.addEventListener("click", lisnterHandler);
    return () => {
      document.removeEventListener("click", lisnterHandler);
    };
  }, []);

  // main return
  return <div ref={elem}>{children}</div>;
}
