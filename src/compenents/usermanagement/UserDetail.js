import React from "react";

function UserDetail(props) {
  const { name, email, img } = props;
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
      <img style={{ marginLeft: "2rem" }} src={img} alt="" />
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
          {name}
        </span>
        <span style={{ display: "block", color: "#21AA93" }}>{email}</span>
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
}

export default UserDetail;
