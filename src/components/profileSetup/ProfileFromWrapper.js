import React from "react";
import Profile from "../../views/profile/Profile";

export default function ProfileFromWrapper({ handleNext }) {
  return (
    <div className="profileFormBg ">
      <div className="centerFlex mb-3">
        <img src="/images/logo.svg" alt="logo" className="logo"></img>
      </div>

      <Profile handleNext={handleNext} />
    </div>
  );
}
