import React, { lazy, Suspense, useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./layout.css";
import Header from "../Header/Header";
import SideBar from "../Sidebar/Sidebar";
import Loading from "../Loading";
const DashboardMain = lazy(() => import("../dashboardmain/DashboardMain"));
const EventManagement = lazy(() =>
  import("../EventManagement/EventManagement")
);
const GroupManagement = lazy(() =>
  import("../groupmanagement/GroupManagement")
);
const MyAccount = lazy(() => import("../myAccount/MyAccount"));
const Notifications = lazy(() => import("../notifications/Notifications"));
const UserManagement = lazy(() => import("../usermanagement/UserManagement"));

function Layout() {
  const [active, setHandleActive] = useState(false);
  return (
    <div className="dashboardMainDiv">
      <SideBar active={active} setHandleActive={setHandleActive} />
      <div className="headerSec">
        <Header active={active} setHandleActive={setHandleActive} />
        <Switch>
          <div className="contentMainSec" id="contentSec">
            <Suspense fallback={Loading}>
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
                oute
              ></Route>
              <Route
                path="/dashboard/eventmanagement"
                component={EventManagement}
              ></Route>
              <Route
                exact
                path="/dashboard/main"
                component={DashboardMain}
              ></Route>
            </Suspense>
          </div>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
