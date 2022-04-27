import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Modal,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FiPlus,
  FiDownload,
  FiCornerDownRight,
  FiSearch,
  FiEdit,
  FiTrash2,
  FiPhoneCall,
  FiCalendar,
} from "react-icons/fi";
import {
  BsArrowDownUp,
  BsFillCaretRightFill,
  BsFillCaretLeftFill,
} from "react-icons/bs";
import CreatePatientRecord from "../../components/CreatePatientRecord";
function Patients() {
  const PateintLayout = styled.div`
    width: 100%;
    margin-top: 40px;
    min-height: calc(100vh - 240px);
  `;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <PateintLayout>
        <Container fluid>
          <Row>
            <Col md={4}>
              <div className="pagetitle">Patients</div>
            </Col>
            <Col md={5}>
              <div className="buttongroup">
                <Button variant="success" onClick={handleShow}>
                  <FiPlus /> CREATE
                </Button>
                <Button variant="success">
                  <FiDownload /> LOAD
                </Button>
                <Button variant="success">
                  <FiCornerDownRight /> EXPORT
                </Button>
              </div>
            </Col>
            <Col md={3}>
              <div className="searchbar">
                <input type="text" />
                <FiSearch />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="table-theme mt-4 pt-2">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>
                        Patient No.
                        <a className="sorting">
                          <BsArrowDownUp />
                        </a>
                      </th>
                      <th>
                        Patient Name.
                        <a className="sorting">
                          <BsArrowDownUp />
                        </a>
                      </th>
                      <th>
                        Status
                        <a className="sorting">
                          <BsArrowDownUp />
                        </a>
                      </th>
                      <th>
                        Total($)
                        <a className="sorting">
                          <BsArrowDownUp />
                        </a>
                      </th>
                      <th>
                        Details
                        <a className="sorting">
                          <BsArrowDownUp />
                        </a>
                      </th>
                      <th className="actions">
                        Actions
                        <a className="sorting">
                          <BsArrowDownUp />
                        </a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>9545645858</td>
                      <td><Link to="/patients-details/summary">Venkata Narasimha Rajuvaripet</Link></td>
                      <td>Admitted</td>
                      <td>700</td>
                      <td></td>
                      <td className="actions">
                        <div className="d-flex actionlist">
                          <a>
                            <FiEdit />
                          </a>
                          <a>
                            <FiTrash2 />
                          </a>
                          <a>
                            <FiPhoneCall />
                          </a>
                          <a>
                            <FiCalendar />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>9545645858</td>
                      <td><Link to="/patients-details/summary">Venkata Narasimha Rajuvaripet</Link></td>
                      <td>Admitted</td>
                      <td>700</td>
                      <td></td>
                      <td className="actions">
                        <div className="d-flex actionlist">
                          <a>
                            <FiEdit />
                          </a>
                          <a>
                            <FiTrash2 />
                          </a>
                          <a>
                            <FiPhoneCall />
                          </a>
                          <a>
                            <FiCalendar />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>9545645858</td>
                      <td><Link to="/patients-details/summary">Venkata Narasimha Rajuvaripet</Link></td>
                      <td>Admitted</td>
                      <td>700</td>
                      <td></td>
                      <td className="actions">
                        <div className="d-flex actionlist">
                          <a>
                            <FiEdit />
                          </a>
                          <a>
                            <FiTrash2 />
                          </a>
                          <a>
                            <FiPhoneCall />
                          </a>
                          <a>
                            <FiCalendar />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>9545645858</td>
                      <td>Venkata Narasimha Rajuvaripet</td>
                      <td>Admitted</td>
                      <td>700</td>
                      <td></td>
                      <td className="actions">
                        <div className="d-flex actionlist">
                          <a>
                            <FiEdit />
                          </a>
                          <a>
                            <FiTrash2 />
                          </a>
                          <a>
                            <FiPhoneCall />
                          </a>
                          <a>
                            <FiCalendar />
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div className="paginations">
                  <Row>
                    <Col md={6}>
                      Items per page:
                      <div className="itempage">
                        <select>
                          <option>5</option>
                          <option>10</option>
                          <option>15</option>
                        </select>
                        <span>1—15 of 15 items</span>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="d-flex">
                        <div className="ml-auto">
                          <div className="itempage">
                            <select>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                            </select>
                            <span>of 1 page</span>
                            <div className="nextprev ml-3">
                              <a>
                                <BsFillCaretLeftFill />
                              </a>
                              <a>
                                <BsFillCaretRightFill />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </PateintLayout>
      <Modal show={show} onHide={handleClose} size="lg" className="pateintmodal">
        <Modal.Header closeButton>
          <Modal.Title>Create Patient Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <CreatePatientRecord />
        </Modal.Body>
      </Modal>
      <Footer />
    </div>
  );
}

export default Patients;
