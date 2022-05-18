import React from "react";
import FormInput from "./input";
import FormTextArea from "./textarea";
import Upload from "./upload";
const FormControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <FormInput {...rest} />;
    case "textarea":
      return <FormTextArea {...rest} />;
    case "upload":
      return <Upload {...rest} />;
    default:
      return null;
  }
};

export default FormControl;
