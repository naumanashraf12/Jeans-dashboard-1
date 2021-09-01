import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import history from "../../helpers/history";
import HeaderProfileImg from "./HeaderDropDown";
export default function Header({ active, setHandleActive }) {
  const path = useLocation().pathname;

  const [title, setTitle] = useState("Dashboard");
  useEffect(() => {
    switch (path) {
      case "/dashboard/account":
        setTitle("My account");
        break;
      case "/dashboard/usermanagement":
        setTitle("User Management");
        break;

      case "/dashboard/groupmanagement":
        setTitle("Group Management");
        break;
      case "/dashboard/notification":
        setTitle("Notification");
        break;
      case "/dashboard/eventmanagement":
        setTitle("Event Management");
        break;
      default:
        setTitle("Dashboard");
        break;
    }
  }, [path]);

  const role = "patient";
  // main return
  return (
    <div>
      <nav className="flexBetweenCenter dashboardNavBar ">
        {/* SideBarButton */}
        <div className="d-inline d-md-none">
          <div
            onClick={() => setHandleActive(!active)}
            className={
              active
                ? " dashboardNavaBarButton activeSideBar "
                : "dashboardNavaBarButton"
            }
          >
            <div className="dashboardNavBarLine dashboardNavBarLine1"></div>
            <div className="dashboardNavBarLine dashboardNavBarLine2"></div>
            <div className="dashboardNavBarLine dashboardNavBarLine3"></div>
          </div>
        </div>
        <a class="navBrand">{title}</a>

        <div className="flexCenter navIcons">
          <img
            onClick={() => history.push("/dashboard/notification")}
            style={{ width: "18px" }}
            src="/images/noti.png"
            className="icon pointer"
            alt="noit"
          ></img>
          <HeaderProfileImg />
        </div>
      </nav>
    </div>
  );
}
