import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";


function DetailedNotes(props) {
  return (
    <div className="mt-4">
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Body>
                <Form>
                  <Row>
                    <Col md={12}><h5 className="mb-4 pagetitle">Vitals</h5></Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Heart Rate*</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Blood Pressure*</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Temperature*</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Oxygen Saturation*</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Respiration*</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="ml-auto align-self-end">
                    <Form.Group>
                        <div className="d-flex justify-content-end">
                          <Button variant="primary">Save</Button>
                        </div>
                    </Form.Group>
                  </Col>
                  </Row>
                </Form>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
                <Form>
                  <Row>
                    <Col md={12}><h5 className="mb-4 pagetitle">Allergies</h5></Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Allergies*</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Symptoms*</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Body Part*</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Reaction To*</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Notes*</Form.Label>
                        <textarea className="form-control" rows={3}></textarea>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="ml-auto align-self-end">
                    <Form.Group>
                        <div className="d-flex justify-content-end">
                          <Button variant="primary">Save</Button>
                        </div>
                    </Form.Group>
                  </Col>
                  </Row>
                </Form>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
                <Form>
                  <Row>
                    <Col md={12}><h5 className="mb-4 pagetitle">Problem List</h5></Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Identified Problem*</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Begin Date*</Form.Label>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="opacity-0">Body Part*</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>End Date*</Form.Label>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Notes*</Form.Label>
                        <textarea className="form-control" rows={3}></textarea>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="ml-auto align-self-end">
                    <Form.Group>
                        <div className="d-flex justify-content-end">
                          <Button variant="primary">Save</Button>
                        </div>
                    </Form.Group>
                  </Col>
                  </Row>
                </Form>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
                <Form>
                  <Row>
                    <Col md={12}><h5 className="mb-4 pagetitle">Medication</h5></Col>
                    <Col md={4}>
                      <Form.Group>
                        <Form.Label>Existing*</Form.Label>
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
                        <Form.Label>Recommended*</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Frequency*</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Duration*</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="ml-auto align-self-end">
                    <Form.Group>
                        <div className="d-flex justify-content-end">
                          <Button variant="primary">Save</Button>
                        </div>
                    </Form.Group>
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

export default DetailedNotes;
