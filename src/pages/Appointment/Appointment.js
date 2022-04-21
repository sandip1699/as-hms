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
  FiUser,
  FiUserCheck,
  FiHash,
  FiDisc,
  FiMaximize2,
  FiFile,
  FiImage,
  FiClock,
} from "react-icons/fi";
import {
  BsArrowDownUp,
  BsFillCaretRightFill,
  BsFillCaretLeftFill,
  BsFillEnvelopeFill,
  BsEnvelope,
} from "react-icons/bs";
function Appointment() {
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
              <div className="pagetitle">Appointments</div>
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
                      Appointment No.
                        <a className="sorting">
                          <BsArrowDownUp />
                        </a>
                      </th>
                      <th>
                      Patient Name
                        <a className="sorting">
                          <BsArrowDownUp />
                        </a>
                      </th>
                      <th>
                      Doctor Name
                        <a className="sorting">
                          <BsArrowDownUp />
                        </a>
                      </th>
                      <th>
                      Date/Time
                        <a className="sorting">
                          <BsArrowDownUp />
                        </a>
                      </th>
                      <th>
                      Department
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
                      <td>5984895615</td>
                      <td><Link to="/patients-details/summary">Venkata Narasimha Rajuvaripet</Link></td>
                      <td>Arnold Schwarzenegger</td>
                      <td>21.03.2021   05:25pm</td>
                      <td>Rehabilitation</td>
                      <td className="actions">
                        <div className="d-flex actionlist">
                          <a>
                            <FiTrash2 />
                          </a>
                          <a>
                            <FiClock />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5984895615</td>
                      <td><Link to="/patients-details/summary">Venkata Narasimha Rajuvaripet</Link></td>
                      <td>Arnold Schwarzenegger</td>
                      <td>21.03.2021   05:25pm</td>
                      <td>Rehabilitation</td>
                      <td className="actions">
                        <div className="d-flex actionlist">
                          <a>
                            <FiTrash2 />
                          </a>
                          <a>
                            <FiClock />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5984895615</td>
                      <td><Link to="/patients-details/summary">Venkata Narasimha Rajuvaripet</Link></td>
                      <td>Arnold Schwarzenegger</td>
                      <td>21.03.2021   05:25pm</td>
                      <td>Rehabilitation</td>
                      <td className="actions">
                        <div className="d-flex actionlist">
                          <a>
                            <FiTrash2 />
                          </a>
                          <a>
                            <FiClock />
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
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Patient Name*</Form.Label>
                  <div className="formicon">
                    <Form.Control type="text" placeholder="Eg. John Doe" />
                    <FiUser />
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email*</Form.Label>
                  <div className="formicon">
                    <Form.Control type="text" placeholder="Eg. email@xyz.com" />
                    <BsEnvelope />
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Blood Group*</Form.Label>
                  <div className="formicon">
                    <Form.Control type="text" placeholder="Eg. O+" />
                    <FiUser />
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Insurance Id</Form.Label>
                  <div className="formicon">
                    <Form.Control type="text" placeholder="Eg. 789551451646512" />
                    <FiHash />
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <div className="formicon">
                    <Form.Control type="text" placeholder="Locality" />
                  </div>
                </Form.Group>
                <Form.Group>
                  <div className="formicon">
                    <Form.Control type="text" placeholder="City" />
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Aadhar*</Form.Label>
                  <div className="formicon">
                    <Form.Control type="text" placeholder="Eg. XXXX XXXX XXXX" />
                    <FiUserCheck />
                  </div>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Phone *</Form.Label>
                  <div className="formicon">
                    <Form.Control type="text" placeholder="Eg. 9876543210" />
                    <FiPhoneCall />
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Date of birth*</Form.Label>
                  <div className="formicon">
                    <Form.Control type="text" placeholder="DD/MM/YYYY" />
                    <FiCalendar />
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Height</Form.Label>
                  <div className="formicon">
                    <Form.Control type="text" placeholder="Eg. 160cm" />
                    <FiMaximize2 />
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Weight</Form.Label>
                  <div className="formicon">
                    <Form.Control type="text" placeholder="Eg. 70Kgs" />
                    <FiDisc />
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="opacity-0">State</Form.Label>
                  <div className="formicon">
                    <Form.Control type="text" placeholder="State" />
                  </div>
                </Form.Group>
                <Form.Group>
                  <div className="formicon">
                    <Form.Control type="text" placeholder="Pincode" />
                  </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Photo</Form.Label>
                  <div className="formicon">
                    <Form.Control type="file" placeholder="Upload Files" />
                    <FiImage />
                  </div>
                </Form.Group>
              </Col>
              <Col md={12} className="mt-4">
                <Button variant="primary" onClick={handleClose}>
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
      
      <Footer />
    </div>
  );
}

export default Appointment;
