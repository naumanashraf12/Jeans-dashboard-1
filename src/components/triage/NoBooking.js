import React from "react";
import history from "../../helpers/history";

export default function NoBooking() {
  return (
    <div className="text-center centerFlex" style={{ height: "50vh" }}>
      <div>
        <div className="textColor2 poppinsMd " style={{ fontSize: "20px" }}>
          Please Book an Appointment Before entring into Triage Room
        </div>
        <button
          onClick={() => history.push("/dashboard/book")}
          className="primaryButton"
        >
          Book Appointment{" "}
        </button>
      </div>
    </div>
  );
}
