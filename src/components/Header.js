import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "bootstrap";
import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./header.css";
import ProfileImage from "../images/profile.jpg";
const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="logo ">
          LOGO
        </Navbar.Brand>
        <Form className=" headerSearch ">
          <FormControl
            type="search"
            placeholder="Search"
            className=""
            aria-label="Search"
          />
          <FontAwesomeIcon
            icon="fa-solid fa-magnifying-glass"
            className="searchIcon"
          />
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="">
              <Button variant="dark" className="notificationButton">
                <FontAwesomeIcon icon="fa-solid fa-bell" />
              </Button>
              <span className="ConnectWalletDiv">
                <Button variant="dark" className="ConnectWalletButton">
                  Connect Wallet
                </Button>
                <FontAwesomeIcon
                  icon="fa-solid fa-wallet"
                  className="walletIcon"
                  inverse
                />
              </span>
            </div>
            <div className="ms-auto"></div>
          </Nav>
          <div className="ProfileDropDownDiv">
            <Nav>
              <Button variant="light" className="ProfileButton">
                <img
                  src={ProfileImage}
                  alt="Girl in a jacket"
                  width="40"
                  height="40"
                  className="ProfileImage"
                />
              </Button>
              <NavDropdown
                title="Jack Butcher"
                id="navbarScrollingDropdown"
                drop="right"
                className="navbBarDropDown"
              >
                <NavDropdown.Item href="#action3">
                  Jack Butcher
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
