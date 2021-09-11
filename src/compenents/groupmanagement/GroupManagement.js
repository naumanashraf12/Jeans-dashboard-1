import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AllGroups from "./AllGroups";

import "./GroupManagement.css";

function GroupManagement(props) {
  const [Active, setActive] = useState("all");
  const history = useHistory();
  const {
    match: { path },
  } = props;
  const search = props.location.search;
  console.log(search);
  const query = new URLSearchParams(search);
  const activeQuery = query.get("current");
  console.log(activeQuery);
  useEffect(() => {
    if (activeQuery) {
      setActive(activeQuery);
    } else {
      history.push(`${path}?current=all`);
    }
  }, []);

  const activeHandle = (val) => {
    setActive(val);
    history.push(`${path}?current=${val}`);
  };

  console.log(search);
  return (
    <div>
      <div className=" noti-body" style={{ backgroundColor: "white" }}>
        <div className="row justify-content-between">
          <div className="col-md-12">
            <ul className="noti-ul">
              <li
                className={` ${
                  Active === "all" ? "activeli" : ""
                } d-md-inline-block`}
                onClick={() => {
                  activeHandle("all");
                }}
              >
                All
              </li>

              <li
                className={` ${
                  Active === "removed" ? "activeli" : ""
                } d-md-inline-block`}
                onClick={() => {
                  activeHandle("removed");
                }}
              >
                removed groups
              </li>
            </ul>
            <hr style={{ marginTop: 0, marginBottom: 0 }} />
          </div>
          <AllGroups active={Active} />
        </div>
      </div>
    </div>
  );
}

export default GroupManagement;
