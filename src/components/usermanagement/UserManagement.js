import React from "react";
import "./usermanagement.css";

const notiData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 1, 1, 1, 1, 1, , 1];

function UserManagement() {
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
              <li className="d-md-inline-block">All</li>
              <li className="d-md-inline-block">Active User</li>
              <li className="d-md-inline-block">Blocked user</li>
              <li className="d-md-inline-block">Removed user</li>
            </ul>
            <hr style={{ marginTop: 0, marginBottom: 0 }} />
          </div>
        </div>
        <div className="row justify-content-between">
          {notiData.map((el) => {
            return (
              <div
                className="col-lg-6  "
                style={{
                  marginTop: "1rem",
                  marginLeft: "0",
                  marginBottom: "1rem",
                  padding: "0",
                }}
              >
                <img
                  style={{ marginLeft: "2rem" }}
                  src="/images/Ellipse 10.svg"
                  alt=""
                />
                <div
                  style={{
                    display: "inline-block",
                    position: "relative",
                    top: "1rem",
                    left: "1rem",
                  }}
                >
                  <span
                    style={{
                      color: "#01676B",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    jhon doe
                  </span>
                  <span style={{ display: "block", color: "#21AA93" }}>
                    username@.asd
                  </span>
                </div>
                <button
                  className="btn btn-danger user-btn"
                  style={{
                    color: "#EB5757",
                    backgroundColor: "#f9eaea",
                    borderColor: "white",
                    marginRight: "2rem",
                  }}
                >
                  remove
                </button>
                <button
                  className="btn btn-warning user-btn2"
                  style={{
                    color: "#F2994A",
                    backgroundColor: "#f7edde",
                    borderColor: "white",
                  }}
                >
                  block
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
