import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Modal,
  Card,
} from "react-bootstrap";
function PatientHistory(props) {
  return (
    <div className="mt-4">
      <Row>
        <Col md={12}>
          <div className="pagetitle">Health History</div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={4}>
          <h6>Problem List*</h6>
          <Card className="mb-4">
            <Card.Body className="p-0">
              <div className="table-theme table-layout-fixed">
                <Table striped hover className="mb-0 graystrip text-center">
                  <thead>
                    <tr>
                      <th>Itentified Problem</th>
                      <th>Begin Date</th>
                      <th>End Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
          <div className="d-flex justify-content-center mb-4">
            <Button variant="primary">View More</Button>
          </div>
        </Col>
        <Col md={4}>
          <h6>Diagnosis*</h6>
          <Card className="mb-4">
            <Card.Body className="p-0">
              <div className="table-theme table-layout-fixed">
                <Table striped hover className="mb-0 graystrip text-center">
                  <thead>
                    <tr>
                      <th>Diagnosis</th>
                      <th>Symptoms</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
          <div className="d-flex justify-content-center mb-4">
            <Button variant="primary">View More</Button>
          </div>
        </Col>
        <Col md={4}>
          <h6>Allergies*</h6>
          <Card className="mb-4">
            <Card.Body className="p-0">
              <div className="table-theme table-layout-fixed">
                <Table striped hover className="mb-0 graystrip text-center">
                  <thead>
                    <tr>
                      <th>Allergies</th>
                      <th>Body Part</th>
                      <th>Reaction to</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
          <div className="d-flex justify-content-center mb-4">
            <Button variant="primary">View More</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="pagetitle mt-4">Treatment History</div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={4}>
          <h6>Medications*</h6>
          <Card className="mb-4">
            <Card.Body className="p-0">
              <div className="table-theme table-layout-fixed">
                <Table striped hover className="mb-0 graystrip text-center">
                  <thead>
                    <tr>
                      <th>Medications</th>
                      <th>Frequency</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
          <div className="d-flex justify-content-center mb-4">
            <Button variant="primary">View More</Button>
          </div>
        </Col>
        <Col md={4}>
          <h6>Therapies*</h6>
          <Card className="mb-4">
            <Card.Body className="p-0">
              <div className="table-theme table-layout-fixed">
                <Table striped hover className="mb-0 graystrip text-center">
                  <thead>
                    <tr>
                      <th>Therapy Type</th>
                      <th>Therapist</th>
                      <th>Condition</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
          <div className="d-flex justify-content-center mb-4">
            <Button variant="primary">View More</Button>
          </div>
        </Col>
        <Col md={4}>
          <h6>Surgeries*</h6>
          <Card className="mb-4">
            <Card.Body className="p-0">
              <div className="table-theme table-layout-fixed">
                <Table striped hover className="mb-0 graystrip text-center">
                  <thead>
                    <tr>
                      <th>Procedure Name</th>
                      <th>Surgeon</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
          <div className="d-flex justify-content-center">
            <Button variant="primary">View More</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="pagetitle mt-4">Healthcare Services History</div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={4}>
          <h6>Diagnostics*</h6>
          <Card className="mb-4">
            <Card.Body className="p-0">
              <div className="table-theme table-layout-fixed">
                <Table striped hover className="mb-0 graystrip text-center">
                  <thead>
                    <tr>
                      <th>Diagnostic test</th>
                      <th>Test Centre</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
          <div className="d-flex justify-content-center mb-4">
            <Button variant="primary">View More</Button>
          </div>
        </Col>
        <Col md={4}>
          <h6>Appointments*</h6>
          <Card className="mb-4">
            <Card.Body className="p-0">
              <div className="table-theme table-layout-fixed">
                <Table striped hover className="mb-0 graystrip text-center">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Doctor</th>
                      <th>Problem</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
          <div className="d-flex justify-content-center mb-4">
            <Button variant="primary">View More</Button>
          </div>
        </Col>
        <Col md={4}>
          <h6>Insurance*</h6>
          <Card className="mb-4">
            <Card.Body className="p-0">
              <div className="table-theme table-layout-fixed">
                <Table striped hover className="mb-0 graystrip text-center">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Provider</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
          <div className="d-flex justify-content-center mb-4">
            <Button variant="primary">View More</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default PatientHistory;
