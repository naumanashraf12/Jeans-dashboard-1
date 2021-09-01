import React from "react";
import { Field } from "formik";
import { SelectInput, TextInput } from "../web/RenderInputs";
import { Row, Col } from "reactstrap";
export default function Step1() {
  // options
  const genderOptions = [
    { text: "Male", value: "M" },
    { text: "Femail", value: "F" },
  ];
  const weightTypeOptions = [
    { text: "LBS", value: "LBS" },
    { text: "KG", value: "KG" },
  ];
  const sexualOrientationOptions = [
    { text: "Straight .", value: "Straight" },
    { text: "Bisexual", value: "Bisexual" },
    { text: "Homosexual", value: "Homosexual" },
  ];
  const languagesOptions = [
    { text: "ENGLISH", value: "ENGLISH" },
    { text: "BOKM", value: "BOKM" },
    { text: "CREOLES", value: "CREOLES" },
    { text: "DUTCH", value: "DUTCH" },
    { text: "SPANISH", value: "SPANISH" },
    { text: "FRENCH", value: "FRENCH" },
  ];
  const ethencityOptions = [
    { text: "ABENAKI", value: "ABENAKI" },
    { text: "ABSENTEESHAWNEE", value: "ABSENTEESHAWNEE" },
    { text: "ACOMA", value: "ACOMA" },
    { text: "AFGHANISTANI", value: "AFGHANISTANI" },
    { text: "AFRICAN", value: "AFRICAN" },
    { text: "AFRICANAMERICAN", value: "AFRICANAMERICAN" },
    { text: "AGDAAGUX", value: "AGDAAGUX" },
    { text: "AGUACALIENTE", value: "AGUACALIENTE" },
    { text: "AGUACALIENTECAHUILLA", value: "AGUACALIENTECAHUILLA" },
    { text: "AHTNA", value: "AHTNA" },
  ];

  // main return
  return (
    <div>
      <Row md="2">
        <Col>
          <Field
            name="dateOfBirth"
            component={TextInput}
            placeholder="Enter your date of birth"
            label="Date of birth"
            type="date"
          />
        </Col>
        <Col>
          <Field
            name="gender"
            component={SelectInput}
            placeholder="Enter your date of birth"
            label="Gender"
            type="select"
            options={genderOptions}
            topClass="ml-md-2"
          />
        </Col>
      </Row>
      <Row md="2">
        <Col>
          <Field
            name="sexualOrientation"
            component={SelectInput}
            placeholder="Sexual Orientation"
            label="Sexual Orientation"
            type="select"
            options={sexualOrientationOptions}
          />
        </Col>
        <Col>
          <Field
            name="preferredLanguage"
            component={SelectInput}
            placeholder="Select your Preferred Language"
            label="Preferred Language"
            type="select"
            options={languagesOptions}
          />
        </Col>
      </Row>
      <Row md="2">
        <Col>
          <Field
            name="weight"
            component={TextInput}
            placeholder="Enter your weight"
            label="weight"
            type="number"
          />
        </Col>
        <Col>
          <Field
            name="weightType"
            component={SelectInput}
            placeholder="Select your weight Type"
            type="select"
            options={weightTypeOptions}
            topClass="mt-4"
            inputClassName="mt-1"
          />
        </Col>
      </Row>
      <Row md="2">
        <Col>
          {" "}
          <Field
            name="heightFeet"
            component={TextInput}
            label="Height (Feet+Inches)"
            min={0}
            type="number"
          />
        </Col>
        <Col>
          <Field
            name="heightInches"
            min={0}
            component={TextInput}
            type="number"
            topClass="mt-4"
            inputClassName="mt-1"
          />
        </Col>
      </Row>
      <Row md="2">
        <Col>
          <Field
            name="ethnicity"
            component={SelectInput}
            placeholder="Select your Ethnicity"
            label="Ethnicity"
            type="select"
            options={ethencityOptions}
          />
        </Col>
      </Row>
    </div>
  );
}
