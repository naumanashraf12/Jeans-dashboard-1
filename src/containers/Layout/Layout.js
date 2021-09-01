import React, { useState, Suspense, lazy, useEffect, useContext } from "react";
import { Route } from "react-router-dom";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

import authContext from "../../helpers/authContext";
import history from "../../helpers/history";
import "./layout.css";

// lazy imports

const Dashboard = lazy(() => import("../../views/dashboard/Dashboard"));
const EventManagement = lazy(() =>
  import("../../components/EventManagement/EventManagement")
);
const GroupManagement = lazy(() =>
  import("../../components/groupmanagement/GroupManagement")
);
const MyAccount = lazy(() => import("../../components/myAccount/MyAccount"));
const Notifications = lazy(() =>
  import("../../components/notifications/Notifications")
);
const UserManagement = lazy(() =>
  import("../../components/usermanagement/UserManagement")
);

export default function Layout() {
  const [active, setHandleActive] = useState(false);

  // loading
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );

  const { auth, isLoading } = useContext(authContext);

  // redirecting unAuthorized user
  useEffect(() => {
    isLoading || (auth === null && history.push("/"));
    return () => {};
  }, [isLoading, history]);

  // main retrun
  return (
    <div className="dashboardMainDiv">
      <Sidebar active={active} setHandleActive={setHandleActive} />
      <div className="headerSec">
        <Header active={active} setHandleActive={setHandleActive} />
        <div className="contentMainSec" id="contentSec">
          <Suspense fallback={loading}>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route
              path="/dashboard/notification"
              component={Notifications}
            ></Route>
            <Route
              exact
              path="/dashboard/account"
              component={MyAccount}
            ></Route>
            <Route
              path="/dashboard/usermanagement"
              component={UserManagement}
            ></Route>
            <Route
              path="/dashboard/groupmanagement"
              component={GroupManagement}
            ></Route>
            <Route
              path="/dashboard/eventmanagement"
              component={EventManagement}
            ></Route>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
