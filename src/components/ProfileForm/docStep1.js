import React from "react";
import { Field } from "formik";
import { SelectInput, TextInput } from "../web/RenderInputs";
import { Row, Col } from "reactstrap";
export default function DocStep1() {
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
      <Row md="1">
        <Col md="12">
          <h5 className="mb-4">Complete your Profile</h5>
        </Col>
        <Col>
          <Field
            name="gender"
            component={SelectInput}
            placeholder="Select your gender"
            label="Gender"
            type="select"
            options={genderOptions}
          />
        </Col>
        <Col>
          <Field
            name="dateOfBirth"
            component={TextInput}
            placeholder="DD/MM/YYYY"
            label="Date of birth"
            type="date"
          />
        </Col>
      </Row>
      <Row md="1">
        <Col md="12">
          <h5 className="mb-3 mt-5">Address Details</h5>
        </Col>
        <Col md="12">
          <Field
            name="country"
            component={SelectInput}
            placeholder="Select your country"
            label="Country"
            type="select"
            options={countryOptions}
          />
        </Col>
        <Col md="12">
          <Field
            name="state"
            component={SelectInput}
            placeholder="Select your state"
            label="State"
            type="select"
            options={countryOptions}
          />
        </Col>
        <Col md="12">
          <Field
            name="city"
            component={SelectInput}
            placeholder="Select your city"
            label="City"
            type="select"
            options={countryOptions}
          />
        </Col>
      </Row>
    </div>
  );
}
