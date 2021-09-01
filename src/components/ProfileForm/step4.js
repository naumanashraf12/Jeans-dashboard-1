import React from "react";
import { Field } from "formik";
import { TextInput } from "../web/RenderInputs";
import { Row, Col } from "reactstrap";
export default function Step4() {
  return (
    <div>
      <Row md="2">
        <Col>
          <Field
            name="Waddress1"
            component={TextInput}
            placeholder="Address 1"
            label="Address 1"
            type="address"
          />
        </Col>
        <Col>
          <Field
            name="Waddress2"
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
            name="Wcity"
            component={TextInput}
            placeholder="City"
            label="City"
          />
        </Col>
        <Col>
          <Field
            name="Wstate"
            component={TextInput}
            placeholder="State"
            label="City"
          />
        </Col>
      </Row>
      <Row md="2">
        <Col>
          <Field
            name="Wzip"
            component={TextInput}
            placeholder="Zip code"
            label="Zip code"
          />
        </Col>
      </Row>
    </div>
  );
}
