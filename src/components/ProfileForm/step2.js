import React from "react";
import { Field } from "formik";
import { TextInput } from "../web/RenderInputs";
import { Row, Col } from "reactstrap";
export default function Step2() {
  return (
    <div>
      <Row md="2">
        <Col>
          <Field
            name="HphoneNo"
            component={TextInput}
            placeholder="Number"
            label="Home Number"
            type="phone no"
          />
        </Col>
        <Col>
          <Field
            name="HphoneExt"
            component={TextInput}
            placeholder="ext"
            label="Home Ext"
          />
        </Col>
      </Row>
      <Row md="2">
        <Col>
          <Field
            name="WphoneNo"
            component={TextInput}
            placeholder="Number"
            label="Work Number"
            type="Work no"
          />
        </Col>
        <Col>
          <Field
            name="WphoneExt"
            component={TextInput}
            placeholder="ext"
            label="Work Ext"
          />
        </Col>
      </Row>
    </div>
  );
}
