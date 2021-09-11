import React, { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import UserDetail from "../usermanagement/UserDetail";
function GroupDetail() {
  const [list, setlist] = useState(false);
  const [Data, setData] = useState([
    {
      name: "noman",
      email: "naumanashraf30@gail.com",
      img: "/images/Ellipse 10.svg",
    },
    {
      name: "noman",
      email: "naumanashraf30@gail.com",
      img: "/images/Ellipse 10.svg",
    },
    {
      name: "noman",
      email: "naumanashraf30@gail.com",
      img: "/images/Ellipse 10.svg",
    },
  ]);
  const handleList = () => {
    setlist(!list);
  };
  console.log(list);
  return (
    <>
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
            <h5 className="d-md-inline-block group-name">ABC Group</h5>
          </div>
          <div
            style={{
              display: "inline-block",
              float: "right",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <button
              className="btn btn-danger user-btn"
              style={{
                color: "#EB5757",
                backgroundColor: "#f9eaea",
                borderColor: "white",
                marginRight: "2rem",
                marginTop: "10px",
              }}
            >
              remove group
            </button>
            <BsFillCaretDownFill
              onClick={handleList}
              style={{
                width: "2rem",
                height: "1.5rem",
                paddingTop: "10px",
                marginRight: "1rem",
                cursor: "pointer",
              }}
            />
          </div>
          <div
            className={`${!list ? "d-none" : ""}  row justify-content-center`}
          >
            {Data.map(({ name, email, img }) => (
              <div style={{ marginLeft: "8rem" }}>
                <UserDetail name={name} email={email} img={img} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-12">
          <hr />
        </div>
      </div>
    </>
  );
}

export default GroupDetail;
