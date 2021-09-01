import React, { useEffect } from "react";
import history from "./history";

export default function AuthRedirectionWrapper({ auth, children }) {
  useEffect(() => {
    auth !== null && history.push("/dashboard");
  }, []);
  return <>{children}</>;
}
