import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";


function Summary(props) {
  return (
    <div className="mt-4">
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <div className="media">
                <div className="pateinttumbnail">
                  <img src="/patient.png" alt="patent" />
                </div>
                <div className="media-body pl-4">
                  <h5 className="mb-4">Patient Details:</h5>
                  <Row>
                    <Col md={3}>
                      <div className="labellist">
                        <label>Name :</label>
                        <strong>Riya Ranka</strong>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="labellist">
                        <label>Blood Group :</label>
                        <strong>B -ve</strong>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="labellist">
                        <label>Height :</label>
                        <strong>5’4’’</strong>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="labellist">
                        <label>Weight :</label>
                        <strong>54 Kgs</strong>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>Problem List</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <span className="text-muted mb-2 d-block">Date</span>
                  <p className="mb-2">26.03.18</p>
                  <p className="mb-2">03.06.20</p>
                </Col>
                <Col md={6}>
                  <span className="text-muted mb-2 d-block">Problem</span>
                  <p className="mb-2">Asthamatic Br..</p>
                  <p className="mb-2">Migraine</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>Allergies</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <span className="text-muted mb-2 d-block">Date</span>
                  <p className="mb-2">26.03.18</p>
                  <p className="mb-2">03.06.20</p>
                </Col>
                <Col md={6}>
                  <span className="text-muted mb-2 d-block">Problem</span>
                  <p className="mb-2">Pollen</p>
                  <p className="mb-2">Peanuts</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>Diagnosis</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <span className="text-muted mb-2 d-block">Date</span>
                  <p className="mb-2">26.03.18</p>
                  <p className="mb-2">03.06.20</p>
                </Col>
                <Col md={6}>
                  <span className="text-muted mb-2 d-block">Diagnosis</span>
                  <p className="mb-2">Acute</p>
                  <p className="mb-2">Nausea</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>Medications</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <span className="text-muted mb-2 d-block">Date</span>
                  <p className="mb-2">26.03.18</p>
                  <p className="mb-2">03.06.20</p>
                </Col>
                <Col md={6}>
                  <span className="text-muted mb-2 d-block">Medication</span>
                  <p className="mb-2">Tylenol</p>
                  <p className="mb-2">Excederin</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>Diagnostic Reports</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <span className="text-muted mb-2 d-block">Date</span>
                  <p className="mb-2">26.03.18</p>
                  <p className="mb-2">03.06.20</p>
                </Col>
                <Col md={6}>
                  <span className="text-muted mb-2 d-block">
                    Diagnostic Test
                  </span>
                  <p className="mb-2">CBC</p>
                  <p className="mb-2">Hb1ac</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>Vitals</Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <span className="text-muted mb-2 d-block">
                    Blood Pressure
                  </span>
                  <p className="mb-2">26.03.18</p>
                  <p className="mb-2">03.06.20</p>
                </Col>
                <Col md={6}>
                  <span className="text-muted mb-2 d-block">Blood Sugar</span>
                  <p className="mb-2">Tylenol</p>
                  <p className="mb-2">Excederin</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Problem List</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Diagnosis</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Diagnostic Test</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Medications</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Allergies</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Notes</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="mt-4">
                      <div className="buttongroup">
                    <Button variant="primary">Save</Button>
                    <Button variant="primary">Schedule Appointment</Button>
                    <Button variant="primary">Schedule Diagnostic Test</Button>
                    <Button variant="primary">Admit</Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Summary;
