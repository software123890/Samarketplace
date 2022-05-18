import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./productDetail.css";
const ProductDetail = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <Button variant="dark">Back</Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <img
            src="https://picsum.photos/200/300"
            width={450}
            height={450}
            className="ProductDetailImage"
          />
        </Col>
        <Col md={6}>Piclture</Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
