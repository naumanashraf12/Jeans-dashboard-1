import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { BsBoxArrowInRight } from "react-icons/bs";
export default function Header({ active, setHandleActive }) {
  const path = useLocation().pathname;
  const history = useHistory();

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
        setTitle("Room Management");
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

        <div className="flexCenter navIcons" style={{ cursor: "pointer" }}>
          <span style={{ color: "red" }}> logout</span>
          <BsBoxArrowInRight
            style={{ width: "3rem", height: "2rem", color: "red" }}
          />
        </div>
      </nav>
    </div>
  );
}
