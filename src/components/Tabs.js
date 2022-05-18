import { Button } from "react-bootstrap";
import React from "react";
import { Nav } from "react-bootstrap";
import "./tabs.css";
import { Link } from "react-router-dom";
const Tabs = () => {
  return (
    <Nav variant="pills" className="tabs">
      <Nav.Item>
        <Nav.Link href="/home">Bot1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Bot2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Bot3</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Bot4</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Bot5</Nav.Link>
      </Nav.Item>
      <Link to="/addNewProduct" className="newProductBtn">
        <Button variant="primary" className="">
          New Products
        </Button>
      </Link>
    </Nav>
  );
};

export default Tabs;
