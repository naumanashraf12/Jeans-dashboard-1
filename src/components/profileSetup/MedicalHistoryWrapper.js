import React from "react";
import MedicalHistory from "../../views/medicalHistory/medicalHistory";

export default function MedicalHistoryWrapper({ handleNext }) {
  return (
    <div className="profileFormBg medicalHistoryWrapper ">
      <div className="centerFlex mb-3">
        <img src="/images/logo.svg" alt="logo" className="logo"></img>
      </div>
      <h4 className="my-3 text-center">Medical History Information</h4>
      <MedicalHistory handleNext={handleNext} />
    </div>
  );
}
