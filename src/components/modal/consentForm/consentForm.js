import React from "react";
import { Modal, ModalBody, ModalHeader, Button, ModalFooter } from "reactstrap";
import "./consentForm.css";
export default function consentForm({
  modal,
  setModal,
  showConfirm,
  handleNext,
}) {
  //   toggle
  const toggle = () => {
    setModal((prev) => !prev);
  };
  // main return
  return (
    <Modal size="lg" centered isOpen={modal} className="consentModal">
      {showConfirm ? (
        <ModalHeader></ModalHeader>
      ) : (
        <ModalHeader toggle={toggle}></ModalHeader>
      )}
      <ModalBody>
        <div className="centerFlex">
          <img src="/images/logo.svg" alt="img" className="logo"></img>
        </div>
        <div className="title text-center my-3">Consent Form</div>
        <div className="text"> Updated 01 May, 2021.</div>
        <div className="content">
          <div className="pTitle">
            Informed Consent of Services Performed by AntarMedical
          </div>
          <div className="text">
            Telemedicine involves the use of electronic communications to enable
            healthcare providers at different locations to share individual
            patient medical information for the prurpose of improving patient
            care. Providers may include primary care practitioners, specialists,
            and/or sub-specialists. The information may be used for diagnosis,
            therapy, follow-up and/or education, and may include any of the
            following:
            <br />
            <br />
            - Patient medical records.
            <br /> - Medical images.
            <br /> - Live two-way audio and video <br />- Output data from
            medical devices and sound and video files.
            <br />
            <br />
            Electronic systems used will incorporate network and software
            security protocols to protext the confidentiality of patient
            identification and imaging data and will include measures to
            safeguard the data and to ensure its integrity against intentional
            or unintentional corruption. Responsiility for the patient care
            should remain with the patient’s local clinician, if you have one,
            as does the patient’s medical record.
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        {showConfirm && (
          <Button
            color="secondary"
            className="secondaryButton"
            onClick={handleNext}
          >
            Confirm
          </Button>
        )}
      </ModalFooter>
    </Modal>
  );
}
