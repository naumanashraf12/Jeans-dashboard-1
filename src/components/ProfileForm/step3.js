import React from "react";
import { Field } from "formik";
import { TextInput } from "../web/RenderInputs";
import { Row, Col } from "reactstrap";
export default function Step3() {
  return (
    <div>
      <Row md="2">
        <Col>
          <Field
            name="Haddress1"
            component={TextInput}
            placeholder="Address 1"
            label="Address 1"
            type="address"
          />
        </Col>
        <Col>
          <Field
            name="Haddress2"
            component={TextInput}
            placeholder="Address 2"
            label="Address 2"
            type="address"
          />
        </Col>
      </Row>
      <Row md="2">
        <Col>
          <Field
            name="Hcity"
            component={TextInput}
            placeholder="City"
            label="City"
          />
        </Col>
        <Col>
          <Field
            name="Hstate"
            component={TextInput}
            placeholder="State"
            label="City"
          />
        </Col>
      </Row>
      <Row md="2">
        <Col>
          <Field
            name="Hzip"
            component={TextInput}
            placeholder="Zip code"
            label="Zip code"
          />
        </Col>
      </Row>
    </div>
  );
}
