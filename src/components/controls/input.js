import { ErrorMessage, Field } from "formik";
import React, { Fragment } from "react";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
const FormInput = (props) => {
  const { label, name, type, ...rest } = props;
  return (
    <Field
      name={name}
      render={({ field }) => {
        return (
          <Fragment>
            <FormGroup controlId={name}>
              <div className="d-flex align-items-baseline">
                <div className="margin-end-2">
                  <FormLabel>{label}</FormLabel>
                </div>
                <div className="error">
                  <ErrorMessage name={name} />
                </div>
              </div>
              <FormControl {...rest} {...field} />
            </FormGroup>
          </Fragment>
        );
      }}
    />
  );
};

export default FormInput;
