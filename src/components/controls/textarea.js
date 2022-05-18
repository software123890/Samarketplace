import { ErrorMessage, Field } from "formik";
import React, { Fragment } from "react";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
const FormTextArea = (props) => {
  const { label, name, type, ...rest } = props;
  return (
    <Field
      name={name}
      render={({ field }) => {
        return (
          <Fragment>
            <FormGroup controlId={name}>
              <FormLabel>{label}</FormLabel>
              <FormControl as="textarea" {...rest} {...field} />
            </FormGroup>
            <ErrorMessage name={name} />
          </Fragment>
        );
      }}
    />
  );
};

export default FormTextArea;
