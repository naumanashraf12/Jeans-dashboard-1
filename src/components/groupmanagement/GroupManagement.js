import React from "react";
import "./GroupManagement.css";
const notiData = [{}, {}, {}];

function GroupManagement() {
  return (
    <div>
      <div className=" noti-body" style={{ backgroundColor: "white" }}>
        <div className="row justify-content-between">
          <div className="col-md-12">
            <ul className="noti-ul">
              <li style={{ display: "inline-block" }}>All</li>
              <li style={{ display: "inline-block" }}>Active User</li>
              <li style={{ display: "inline-block" }}>removed groups</li>
              <li style={{ display: "inline-block" }}>Removed user</li>
            </ul>
            <hr style={{ marginTop: 0, marginBottom: 0 }} />
          </div>
        </div>

        {notiData.map((el) => {
          return (
            <div className="row">
              <div className="col-12 group-list justify-content-between align-items-center">
                <div style={{ display: "inline-block" }}>
                  <img
                    src="/images/ellipse 12.svg"
                    style={{ marginLeft: "4rem" }}
                    alt=""
                  />
                  <img
                    src="/images/ellipse 12.svg"
                    alt=""
                    className="img-over"
                  />
                  <img
                    src="/images/ellipse 12.svg"
                    alt=""
                    className="img-over2"
                  />
                  <h5 className="d-md-inline-block group-name">ABC Group</h5>
                </div>
                <div
                  style={{
                    display: "inline-block",
                    float: "right",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button
                    className="btn btn-danger user-btn"
                    style={{
                      color: "#EB5757",
                      backgroundColor: "#f9eaea",
                      borderColor: "white",
                      marginRight: "2rem",
                    }}
                  >
                    remove group
                  </button>
                  <img
                    src="/images/arrowDown.png"
                    className={"group-downicon"}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12">
                <hr />
              </div>
            </div>
          );
        })}
        <div className="row">
          <div className="col-12 group-list justify-content-between align-items-center">
            <div style={{ display: "inline-block" }}>
              <img
                src="/images/ellipse 12.svg"
                style={{ marginLeft: "4rem" }}
                alt=""
              />
              <img src="/images/ellipse 12.svg" alt="" className="img-over" />
              <img src="/images/ellipse 12.svg" alt="" className="img-over2" />
              <h5 className="d-md-inline-block group-name mt-sm-0">
                ABC Group
              </h5>
            </div>
            <div
              style={{
                display: "inline-block",
                float: "right",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                className="btn btn-danger user-btn"
                style={{
                  color: "#EB5757",
                  backgroundColor: "#f9eaea",
                  borderColor: "white",
                  marginRight: "2rem",
                }}
              >
                remove group
              </button>
              <img
                src="/images/arrowRight2.png"
                className={"group-downicon"}
                alt=""
              />
            </div>
          </div>
          {notiData.map((el) => {
            return (
              <div className="col-md-12 " style={{ textAlign: "center" }}>
                <img src="/images/Ellipse 10.svg" alt="" />
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
                  }}
                >
                  remove user
                </button>
                <button
                  className="btn btn-warning user-btn2"
                  style={{
                    color: "#F2994A",
                    backgroundColor: "#f7edde",
                    borderColor: "white",
                  }}
                >
                  block user
                </button>
              </div>
            );
          })}
          <div className="col-12">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupManagement;
