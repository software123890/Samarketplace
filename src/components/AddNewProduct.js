import React from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import FormControl from "./controls/formcontrol";
import { Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./addnewProduct.css";
const initialValues = {
  assetName: "",
  assetDiscription: "",
  assetPrice: "",
  fileUpload: "",
};
const RevenueShareSettings = () => {
  const validationSchema = yup.object({
    assetName: yup.string().required(`Required`),
    assetDiscription: yup.string().required("Required"),
    assetPrice: yup.string().required("Required"),
    fileUpload: yup.string().required("Required"),
  });

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <Row>
              <Col md={10} className="mb-3 mx-auto">
                <FormControl
                  control="input"
                  name="assetName"
                  placeholder="Asset Name"
                  type="text"
                  className="mb-3"
                />
              </Col>
            </Row>

            <Row>
              <Col md={10} className="mb-3 mx-auto">
                <FormControl
                  control="textarea"
                  name="assetDiscription"
                  placeholder="Asset Discription"
                  type="text"
                  className="mb-3"
                />
              </Col>
            </Row>
            <Row>
              <Col md={10} className="mb-3 mx-auto">
                <FormControl
                  control="input"
                  name="assetPrice"
                  placeholder="Asset Price in ETH"
                  type="text"
                  className="mb-3"
                />
              </Col>
            </Row>
            <Row>
              <Col md={10} className="mb-3 mx-auto">
                <FormControl
                  control="input"
                  name="roylaltyAmount"
                  placeholder="Royalty Amount"
                  type="number"
                  className="mb-3"
                />
              </Col>
            </Row>
            <Row>
              <Col md={4} className="">
                <FormControl control="upload" name="fileUpload" />
              </Col>
            </Row>
            <div className="d-flex justify-content-center">
              <Button type="submit" className="addNewProductBtn">
                CREATE DIGITIAL ASSET
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RevenueShareSettings;
