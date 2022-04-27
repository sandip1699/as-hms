import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container, Row, Col, Button, FormControl } from "react-bootstrap";

const Footer = () => {
  const Footerwrapper = styled.div`
    background-color: #005E67 !important;
    position: relative;
    width: 100%;
    margin-top: 10px;
    padding:4px;
  `;

  return (
    <Footerwrapper>
        <Container fluid>
          <Row className="align-items-center">
            <Col md={12} className="text-center">
                <img src="/footer-logo.png" alt="logo" />
                <span className="ml-5 text-white">Copyrights © 2022</span>
            </Col>
          </Row>
        </Container>
    </Footerwrapper>
  );
};

export default Footer;
