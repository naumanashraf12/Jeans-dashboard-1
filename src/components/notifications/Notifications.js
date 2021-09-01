import React from "react";
import "./notification.css";

const notiData = [
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "read as mark",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "read as mark",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "read as mark",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "read as mark",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "read as mark",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "read as mark",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "read as mark",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "read as mark",
  },
];

function Notifications() {
  return (
    <div className=" noti-body" style={{ backgroundColor: "white" }}>
      <div className="row justify-content-between">
        <div className="col-md-12">
          <ul className="noti-ul">
            <li style={{ display: "inline-block" }}>Notification type 1</li>
            <li style={{ display: "inline-block" }}>Notification type 2</li>
            <li style={{ display: "inline-block" }}>Notification type 3</li>
          </ul>
          <hr style={{ marginTop: 0, marginBottom: 0 }} />
        </div>
      </div>
      {notiData.map((el) => {
        return (
          <div className="row justify-content-between mt-4">
            <div className="col-md-5" style={{ marginLeft: "3rem" }}>
              <p className="noti-data">{el.data}</p>
            </div>
            <div className="col-md-4" style={{ textAlign: "right" }}>
              {" "}
              <button
                className="btn btn-primary d-inline-block"
                style={{
                  marginRight: "3rem",
                  backgroundColor: "#f5f8fa",
                  color: "#00028C",
                  border: "none",
                  borderRadius: "1rem",
                  borderColor: "white",
                }}
              >
                {el.btnData}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Notifications;
