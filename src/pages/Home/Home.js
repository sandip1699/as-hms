import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiMail, FiSearch, FiX, FiCheck } from "react-icons/fi";
function Home() {
  const PateintLayout = styled.div`
    width: 100%;
    margin-top: 40px;
    min-height: calc(100vh - 240px);
  `;
  return (
    <div>
      <PateintLayout>
        <Container fluid>
          <Row>
            <Col md={2}>
              <div className="searchbar">
                <select className="form-control bg-grey no-shadow">
                  <option>All</option>
                  <option>one</option>
                </select>
              </div>
            </Col>
            <Col md={10}>
              <div className="searchbar">
                <input type="text" className="no-shadow" placeholder="Keyword Search" />
                <FiSearch />
              </div>
            </Col>
            <Col md={5} className="ml-auto">
              <div className="mt-4 d-flex justify-content-end">
                <Button variant="primary">Create Patient</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="listcard">
                <div className="pagetitle m-0">
                  Recent Activities <span className="notlable ml-2">1</span>
                </div>
                <ListGroup>
                  <ListGroup.Item>
                    Patient Venkata Narasimha Rajuvaripet is discharged. <br />
                    <small className="text-grey">25th April ‘21 04:53PM</small>
                    <span className="readornot">
                      <FiMail />
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    ______________________ Medication is given to
                    _________________________ <br />
                    <small className="text-grey">25th April ‘21 04:53PM</small>
                    <span className="readornot">
                      <FiMail />
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Diagnostic reports of patients Venkata Narasimha Rajuvaripet{" "}
                    <br />
                    <small className="text-grey">25th April ‘21 04:53PM</small>
                    <span className="readornot">
                      <FiMail />
                    </span>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
            <Col md={6}>
              <div className="listcard">
                <div className="pagetitle m-0">
                  Notifications <span className="notlable ml-2">3</span>
                </div>
                <ListGroup>
                  <ListGroup.Item>
                    <Row>
                      <Col md={9}>
                        Patient Venkata Narasimha Rajuvaripet is discharged.{" "}
                        <br />
                        <small className="text-grey">
                          25th April ‘21 04:53PM
                        </small>
                      </Col>
                      <Col md={3}>
                        <a className="not-cation bg-success"><FiX /></a>
                        <a className="not-cation bg-danger"><FiCheck /></a>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col md={9}>
                        Patient Venkata Narasimha Rajuvaripet is discharged.{" "}
                        <br />
                        <small className="text-grey">
                          25th April ‘21 04:53PM
                        </small>
                      </Col>
                      <Col md={3}>
                        <a className="not-cation bg-success"><FiX /></a>
                        <a className="not-cation bg-danger"><FiCheck /></a>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col md={9}>
                        Patient Venkata Narasimha Rajuvaripet is discharged.{" "}
                        <br />
                        <small className="text-grey">
                          25th April ‘21 04:53PM
                        </small>
                      </Col>
                      <Col md={3}>
                        <a className="not-cation bg-success"><FiX /></a>
                        <a className="not-cation bg-danger"><FiCheck /></a>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </PateintLayout>

      <Footer />
    </div>
  );
}

export default Home;
