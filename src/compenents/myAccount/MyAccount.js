import React from "react";
import "./myAccount.css";

const notiData = [
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "move to archive",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "move to archive",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "move to archive",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "move to archive",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "move to archive",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "move to archive",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "move to archive",
  },
  {
    data: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sadsad sadsadas asdasdsa asdsadsaads asdasdsa sadasdsad sadsadas asdsad  saiodjiosahjdfisa",
    btnData: "move to archive",
  },
];
function MyAccount() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12 align-items-center">
          <img src="/images/accountPic.svg" />
          <div
            style={{
              display: "inline-block",
              position: "relative",
              top: "1rem",
              left: "1rem",
              textAlign: "center",
            }}
          >
            <h4 className="profile-title">John Doe</h4>
            <span className="date">Last updated 02/06/2021</span>
          </div>
          <div
            style={{
              display: "inline-block",
              position: "relative",
              top: "1rem",
              left: "4rem",
              textAlign: "center",
            }}
          >
            <button className="btn btn-primary acc-btn">
              upload profile picture
            </button>
            <button className="btn btn-primary acc-btn2">Edit name</button>
          </div>
        </div>
      </div>
      <div className="row noti-body" style={{ margin: "2rem 0 2rem 0" }}>
        <div style={{ padding: "0", width: "100%" }}>
          <form
            className="d-sm-flex justify-content-between align-items-center "
            action="submit"
          >
            <div className="w-75">
              <input
                className="w-100"
                type="password"
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
                update passward
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" noti-body" style={{ backgroundColor: "white" }}>
        <div className="row ">
          <div className="col-12 ml-4 mt-4">
            <h4 className="acc-title">Activity Log</h4>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-md-12">
            <ul className="noti-ul ml-6">
              <li
                className="d-md-inline-block ml-6 ml-sm-0"
                style={{ width: "5rem", marginLeft: "6rem" }}
              >
                All
              </li>
              <li
                className="d-md-inline-block  ml-sm-0"
                style={{ width: "5rem", marginLeft: "6rem" }}
              >
                Archive
              </li>
              <li
                className="d-md-inline-block ml-6 ml-sm-0"
                style={{
                  marginLeft: "4rem",
                  marginRight: "1.5rem",
                }}
              >
                Move all to Archive
              </li>
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
    </div>
  );
}

export default MyAccount;
