import React from "react";
import { Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import { FiCalendar,FiClock,FiFile } from "react-icons/fi";

function Reports() {
  return (
    <div className="mt-4">
      <Row>
        <Col md={12}>
          <p className="mb-2">Historical Diagnostic Test*</p>
          <div className="table-theme text-center">
            <Table striped bordered hover className="graystrip">
              <thead>
                <tr>
                  <th>Diagnostic Test</th>
                  <th>Date</th>
                  <th>Test Centre</th>
                  <th>Referred By</th>
                  <th>Link to record</th>
                  <th>Attachment</th>
                  <th>Analysis Documentry</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={12}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                      <Form.Group>
                      <Form.Label>Date*</Form.Label>
                      <div className="formicon">
                        <Form.Control type="date" placeholder="Upload document" />
                        {/* <FiCalendar /> */}
                      </div>
                    </Form.Group>
                      </Col>
                      <Col md={6}>
                      <Form.Group>
                      <Form.Label>Time*</Form.Label>
                      <div className="formicon">
                        <Form.Control type="time" placeholder="Upload document" />
                        {/* <FiClock /> */}
                      </div>
                    </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group>
                      <Form.Label>Diagnostic Test*</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Diagnostic Test</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Result Date*</Form.Label>
                      <div className="formicon">
                        <Form.Control type="text" placeholder="DD/MM/YYYY" />
                        <FiCalendar />
                      </div>
                    </Form.Group>
                    <Form.Group>
                  <Form.Label>Attachments*</Form.Label>
                  <div className="formicon">
                    <Form.Control type="file" placeholder="Upload document" />
                    <FiFile />
                  </div>
                </Form.Group>
                    <Form.Group>
                  <Form.Label>Analysis*</Form.Label>
                  <div className="formicon">
                    <Form.Control type="file" placeholder="Upload document" />
                    <FiFile />
                  </div>
                </Form.Group>
                  </Col>
                 
                  <Col md={6}>
                    
                    <Form.Group>
                      <Form.Label>Test Centre*</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Referred By*</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Analysed By*</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label className="opacity-0">image</Form.Label>
                      <Button variant="primary">View Image</Button>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Note*</Form.Label>
                      <textarea className="form-control" rows={4}></textarea>
                    </Form.Group>
                  </Col>
                  <Col md={12} className="mt-4 mb-4">
                    <div className="buttongroup d-flex justify-content-between">
                      <Button variant="primary">Create from Diagnostic Inbox</Button>
                      <Button variant="primary">Refer for Test </Button>
                      <div className="ml-auto">
                        <Button variant="primary">Save</Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Form>
            
        </Col>
      </Row>
    </div>
  );
}

export default Reports;
