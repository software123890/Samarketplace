import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import Tabs from "./Tabs";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <section class="sectionMain">
      <Container fluid="lg" className="my-3">
        <Row>
          <Col class="px-0">
            <Tabs />
          </Col>
        </Row>
        <Row>
          <ProductList />
        </Row>
      </Container>
    </section>
  );
};

export default Home;
