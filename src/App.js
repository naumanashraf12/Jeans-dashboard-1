import jwtDecode from "jwt-decode";
import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import history from "./helpers/history";
import AuthContext from "./helpers/authContext";
import AxiosBase from "./config/AxiosBase";
import { headers } from "./helpers/helpers";
import { io } from "socket.io-client";
import { ToastContainer } from "react-toastify";
// toast css
import "react-toastify/dist/ReactToastify.css";
import {
  addUserEvent,
  deleteUserEvent,
  triageRoomCloses,
  triageRoomDelete,
  useNotifyTriageRoomOpen,
} from "./helpers/socketEvents";
import Loginpage from "./components/LoginPage/Loginpage";
// lazy imports of pages

// containers imports
const Layout = lazy(() => import("./containers/Layout/Layout"));

// loading
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// main app fun

function App() {
  //   socket ref
  const socket = useRef(null);
  // states
  const [auth, setAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.jwtToken;
  const triageNotification = useNotifyTriageRoomOpen();
  // to check token and get user
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        localStorage.removeItem("authToken");
        // logout
        setAuth(null);
        history.push("/");
      }

      getUser();
    } else {
      getUser();
    }
  }, [token]);

  // get user
  const getUser = async () => {
    setIsLoading(true);
    try {
      headers();
      const res = await AxiosBase.get("/user/me");
      const userData = res?.data;

      if (userData !== undefined && userData !== null) {
        setAuth(userData);
        if (!userData.isProfileCompleted) {
          // userData.role === "patient" && history.push("/profile-setup");
        }
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  // connecting to sockets for doctor only
  useEffect(() => {
    if (auth !== null && auth?.role === "doctor") {
      // init sockets
      socket.current = io(process.env.REACT_APP_SOCKET_URL, {
        path: "/socket/socket.io/",
      });
      addUserEvent(socket.current, auth);
      triageNotification(socket.current);
      triageRoomCloses(socket.current);

      return () => {
        deleteUserEvent(socket.current);
        socket.current.removeAllListeners();
      };
    }
  }, [auth]);

  // main return
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        isLoading,
        setIsLoading,
        socket: socket.current,
      }}
    >
      <Suspense fallback={loading}>
        <Switch>
          <Route path="/login" component={Loginpage}></Route>
          <Route path="/" component={Layout}></Route>
        </Switch>
      </Suspense>
      <ToastContainer />
    </AuthContext.Provider>
  );
}

export default App;
