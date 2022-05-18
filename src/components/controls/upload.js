import React, { Fragment, useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { ErrorMessage, Field } from "formik";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import "./upload.css";
const Upload = (props) => {
  const { label, name, type, ...rest } = props;
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview();
    }
  }, [image]);
  return (
    <Field
      name={name}
      render={({ field, form }) => {
        const { setFieldValue } = form;
        return (
          <Fragment>
            <FormGroup controlId={name}>
              <FormLabel>{label}</FormLabel>
            </FormGroup>

            {preview ? (
              <img
                className="img-preview"
                src={preview}
                style={{ objectFit: "cover" }}
                onClick={() => {
                  const imageFile = document.getElementById(name);
                  imageFile.value = "";
                  setImage();
                  setPreview();
                }}
                width={150}
                height={150}
              />
            ) : (
              <button
                className="uploadBtn margin-end-3"
                onClick={(event) => {
                  event.preventDefault();
                  fileInputRef.current.click();
                }}
              >
                <div className="f-s-12">Choose File</div>
              </button>
            )}
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              id={name}
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files[0];
                if (file && file.type.substr(0, 5) === "image") {
                  setImage(file);
                  setFieldValue(name, file);
                } else {
                  setImage(null);
                }
              }}
            />
            <div className="error">
              <ErrorMessage name={name} />
            </div>
          </Fragment>
        );
      }}
    />
  );
};

export default Upload;
