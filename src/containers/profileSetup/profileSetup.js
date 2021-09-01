import React, { useState } from "react";
import ConsentForm from "../../components/modal/consentForm/consentForm";
import MedicalHistoryWrapper from "../../components/profileSetup/MedicalHistoryWrapper";
import PharmacyInfoWrapper from "../../components/profileSetup/PharmacyInfoWrapper";
import ProfileFromWrapper from "../../components/profileSetup/ProfileFromWrapper";
import WelcomePage from "../../components/profileSetup/WelcomePage";
import history from "../../helpers/history";
import "./profileSetup.css";
export default function ProfileSetup() {
  // step state
  const [step, setStep] = useState(1);
  const [modal, setModal] = useState(true);
  // fun for moving previous page
  const _prev = () => {
    setStep((prev) => prev - 1);
  };
  //fun for moving next page
  const _next = () => {
    setStep((prev) => prev + 1);
  };

  // render components
  const renderComponents = () => {
    switch (step) {
      case 1:
        return <WelcomePage handleNext={_next} />;
      case 2:
        return <ProfileFromWrapper handleNext={_next} />;
      case 3:
        return <MedicalHistoryWrapper handleNext={_next} />;
      case 4:
        return <PharmacyInfoWrapper handleNext={_next} />;
      case 5:
        return (
          <ConsentForm
            modal={modal}
            setModal={setModal}
            handleNext={() => {
              setModal(false);
              history.push("/dashboard");
            }}
            showConfirm
          />
        );

      default:
        return <WelcomePage handleNext={_next} />;
    }
  };

  return <div className="profileSetup">{renderComponents()}</div>;
}
