import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { FiTrash2, FiClock, FiEye, FiClipboard, FiEdit, FiPrinter, FiMail } from "react-icons/fi";
import styled from "styled-components";

const Appointmentlists = styled.div`
  .labellist {
    margin-top: 15px;
    label {
      min-width: 180px;
    }
  }
  .actionlist {
    margin-bottom:20px;
    a {
      display:flex;
      width: 35px;
      height: 35px;
      border: 1px solid #ddd;
      align-items: center;
      justify-content: center;
      background-color: #ECECEC;
      box-shadow: 1px 1px 10px rgba(0,0,0,0.12);
      &:hover {
        color: #018DB2;
      }
    }
  }
`;

function AppointmentHistory(props) {
  return (
    <div className="mt-4">
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Form>
                <Row>
                  <Col md={12}>
                    <h5 className="mb-4 pagetitle">Search Options</h5>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Appointment Date</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Doctor</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Problem</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Diagnosis</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Medication</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Keyword</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Diagnosis Test</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="ml-auto align-self-end">
                    <Form.Group>
                      <div className="d-flex justify-content-end">
                        <Form.Label className="opacity-0">search</Form.Label>
                        <Button variant="primary">Search</Button>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              {/* loop  */}
              <Appointmentlists className="border-bottom">
                <Row>
                  <Col md={6}>
                    <div className="labellist">
                      <label>Appointment Date </label>
                      <strong> : 21.03.2021</strong>
                    </div>
                    <div className="labellist">
                      <label>Identified Problem </label>
                      <strong>:&nbsp;</strong>
                    </div>
                    <div className="labellist">
                      <label>Doctor’s Notes </label>
                      <strong>: &nbsp;</strong>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="labellist">
                      <label>Attending Doctor </label>
                      <strong>: &nbsp;</strong>
                    </div>
                    <div className="labellist">
                      <label>Medication </label>
                      <strong>: &nbsp;</strong>
                    </div>
                    <div className="labellist">
                      <label>Diagnostic Tests </label>
                      <strong>: &nbsp;</strong>
                    </div>
                    <div className="labellist">
                      <label>Attachments </label>
                      <strong>: &nbsp;</strong>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex actionlist">
                      <a>
                        <FiEye />
                      </a>
                      <a>
                        <FiClipboard />
                      </a>
                      <a>
                        <FiEdit />
                      </a>
                      <a>
                        <FiPrinter />
                      </a>
                      <a>
                        <FiMail />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Appointmentlists>
              {/* loop  */}
              <Appointmentlists className="border-bottom">
                <Row>
                  <Col md={6}>
                    <div className="labellist">
                      <label>Appointment Date </label>
                      <strong> : 21.03.2021</strong>
                    </div>
                    <div className="labellist">
                      <label>Identified Problem </label>
                      <strong>:&nbsp;</strong>
                    </div>
                    <div className="labellist">
                      <label>Doctor’s Notes </label>
                      <strong>: &nbsp;</strong>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="labellist">
                      <label>Attending Doctor </label>
                      <strong>: &nbsp;</strong>
                    </div>
                    <div className="labellist">
                      <label>Medication </label>
                      <strong>: &nbsp;</strong>
                    </div>
                    <div className="labellist">
                      <label>Diagnostic Tests </label>
                      <strong>: &nbsp;</strong>
                    </div>
                    <div className="labellist">
                      <label>Attachments </label>
                      <strong>: &nbsp;</strong>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="d-flex actionlist">
                      <a>
                        <FiEye />
                      </a>
                      <a>
                        <FiClipboard />
                      </a>
                      <a>
                        <FiEdit />
                      </a>
                      <a>
                        <FiPrinter />
                      </a>
                      <a>
                        <FiMail />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Appointmentlists>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AppointmentHistory;
