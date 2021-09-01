import React from "react";
import { Button } from "reactstrap";

export default function WelcomePage({ handleNext }) {
  return (
    <div className="text-center">
      <div className="centerFlex mb-4">
        <img src="/images/logo.svg" alt="logo" className="logo"></img>
      </div>
      <h2 className="">Welcome to Antar Medical </h2>
      <div>Please follow a few simple steps to setup your profile.</div>

      <Button color="primary" className="mt-4" onClick={handleNext}>
        Continue to Profile
      </Button>
    </div>
  );
}
