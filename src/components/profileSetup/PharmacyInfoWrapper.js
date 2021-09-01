import React from "react";
import PharmacyInfo from "../../views/pharmacyInfo/pharmacyInfo";

export default function PharmacyInfoWrapper({ handleNext }) {
  return (
    <div>
      <PharmacyInfo handelNext={handleNext} />
    </div>
  );
}
