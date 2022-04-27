import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";


function TodayAppointments(props) {
  return (
    <div className="mt-4">
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
                <div className="cardinfo">
                  <Row>
                    <Col md={12}><h5 className="mb-4 pagetitle">Basic Info</h5></Col>
                    <Col md={6}>
                      <div className="labellist">
                        <label>Patient Name :</label>
                        <strong>John</strong>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="labellist">
                        <label>Patient No. :</label>
                        <strong>1122</strong>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="labellist">
                        <label>Age :</label>
                        <strong>32</strong>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="labellist">
                        <label>Height :</label>
                        <strong>80 cm</strong>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="labellist">
                        <label>Weight :</label>
                        <strong>76 kg</strong>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="labellist">
                        <label>Phone No. :</label>
                        <strong>9725184294</strong>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="labellist">
                        <label>Email :</label>
                        <strong>sandip7023@gmail.com</strong>
                      </div>
                    </Col>
                    
                  </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="mt-3">
        <Col md={12}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Problems*</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Diagnosis*</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Diagnostic Reports*</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Notes*</Form.Label>
                      <textarea className="form-control" rows={5}></textarea>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Medication*</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Frequency*</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Duration*</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Recommended Tests*</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Fees*</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="ml-auto">
                    <Form.Group>
                        <div className="d-flex justify-content-end">
                          <Button variant="primary">Save</Button>
                        </div>
                    </Form.Group>
                  </Col>
                  <Col md={12} className="mt-4">
                      <div className="buttongroup">
                    <Button variant="primary">Schedule Next Visit</Button>
                    <Button variant="primary">Refer to doctor</Button>
                    <Button variant="primary">Admit</Button>
                    <Button variant="primary">Send to Pharmacy</Button>
                    <Button variant="primary">Schedule Tests</Button>
                    </div>
                  </Col>
                  
                </Row>
              </Form>
        </Col>
      </Row>
    </div>
  );
}

export default TodayAppointments;
