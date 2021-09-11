import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import All from "./All";

import "./usermanagement.css";

function UserManagement(props) {
  console.log(props);
  const path = props.match.path;
  const search = props.location.search;
  const history = useHistory();
  const [active, setActive] = useState("all");
  const query = new URLSearchParams(search);
  const queryActive = query.get("active");

  useEffect(() => {
    if (queryActive) {
      setActive(queryActive);
    } else {
      history.push(`${path}?active=all`);
    }
  }, []);

  const handleActive = (val) => {
    setActive(val);
    history.push(`${path}?active=${val}`);
  };
  return (
    <div>
      <div
        className="row noti-body"
        style={{ margin: "0 0 2rem 0", padding: "0", overflow: "hidden" }}
      >
        <div style={{ padding: "0", width: "100%" }}>
          <form
            className="d-sm-flex justify-content-between align-items-center "
            action="submit"
          >
            <div className="w-75">
              <input
                name="newEmail"
                className="w-100"
                placeholder="New User Email Address"
                type="text"
                style={{
                  marginLeft: "1rem",
                  height: "3rem",
                  border: "none",
                }}
              />
            </div>
            <div style={{ textAlign: "end" }}>
              <button
                className="btn btn-primary mr-2 mr-md-0"
                style={{
                  marginLeft: "auto",
                  height: "100%",
                  backgroundColor: "#00028C",
                  width: "17rem",
                  height: "3rem",
                }}
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className=" noti-body overflow-hidden"
        style={{ backgroundColor: "white" }}
      >
        <div className="row justify-content-between">
          <div className="col-md-12">
            <ul className="noti-ul">
              <li
                className={` ${
                  active === "all" ? "activeli" : ""
                } d-md-inline-block`}
                style={{ cursor: "pointer" }}
                onClick={() => handleActive("all")}
              >
                All
              </li>
              <li
                className={` ${
                  active === "active" ? "activeli" : ""
                } d-md-inline-block`}
                onClick={() => handleActive("active")}
              >
                Active User
              </li>
              <li
                className={` ${
                  active === "blocked" ? "activeli" : ""
                } d-md-inline-block`}
                onClick={() => handleActive("blocked")}
              >
                Blocked USer
              </li>
              <li
                className={` ${
                  active === "remove" ? "activeli" : ""
                } d-md-inline-block`}
                onClick={() => handleActive("remove")}
              >
                Remove User
              </li>
            </ul>
            <hr style={{ marginTop: 0, marginBottom: 0 }} />
          </div>
        </div>

        <div className="row justify-content-between">
          <All active={active} />
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
