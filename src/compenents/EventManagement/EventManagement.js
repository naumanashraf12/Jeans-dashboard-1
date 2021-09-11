import React from "react";
import "./eventmanagement.css";

function EventManagement() {
  const ar = [1, 2, 4, 12, 12, 2];
  return (
    <div>
      <div
        className="row noti-body"
        style={{ margin: "0 0 2rem 0", padding: "0", overflow: "hidden" }}
      >
        <div className="col-md-12">
          <table
            className="table table-borderless table-striped"
            style={{ textAlign: "center" }}
          >
            <thead>
              <tr>
                <th className="event-title">Created by</th>
                <th className="event-title">Event Date</th>
                <th className="event-title">Event Time</th>
                <th className="event-title">Event Title</th>
                <th className="event-title">Actions</th>
              </tr>
            </thead>

            <tbody className="event-table-body">
              {ar.map((map) => {
                return (
                  <tr>
                    <td className="table-data">
                      <div>
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
                      </div>
                    </td>
                    <td className="table-data"> 1/2/1999</td>
                    <td className="table-data"> 34:32:1</td>
                    <td className="table-data"> meetings</td>
                    <td className="table-data">
                      <button
                        className="btn btn-danger event-btn"
                        style={{
                          color: "#EB5757",
                          backgroundColor: "#f9eaea",
                          borderColor: "white",
                        }}
                      >
                        remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EventManagement;
