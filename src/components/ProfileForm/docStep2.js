import React from "react";
import { Field } from "formik";
import { FileInput, SelectInput, TextInput } from "../web/RenderInputs";
import { Row, Col } from "reactstrap";
export default function DocStep2() {
  // options
  const genderOptions = [
    { text: "Male", value: "M" },
    { text: "Femail", value: "F" },
  ];
  const countryOptions = [
    { text: "Male", value: "M" },
    { text: "Femail", value: "F" },
  ];

  // main return
  return (
    <div>
      <Row>
        <Col md="12">
          <h5 className="mb-4">Medical Details</h5>
        </Col>
        <Col sm="12">
          <Field
            name="specialty"
            component={SelectInput}
            placeholder="Select your medical specialty"
            label="Medical Specialty"
            type="select"
            options={genderOptions}
          />
        </Col>
        <Col sm="12">
          <Field
            name="NpiNumber"
            component={TextInput}
            placeholder="Enter license number"
            label="License NPI number/DEA number"
            type="text"
          />
        </Col>
        <Col sm="12">
          <Field
            name="NpiExpireDate"
            component={TextInput}
            placeholder="DD/MM/YYYY"
            label="License Expiry date"
            type="date"
          />
        </Col>
        <Col sm="12">
          <Field
            name="certificateFile"
            component={FileInput}
            label="Attach Certificates"
            type="file"
          />
        </Col>
      </Row>
    </div>
  );
}
