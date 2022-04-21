import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
const login = () => {
  return (
    <div>
      <Container>
        <Row className="align-items-center mt-5">
          <Col md={6} className="mx-auto">
            <Card className="text-center">
              <Card.Body>
                <img className="img-fluid" src="/logo.png" alt="logo" />
                <h1>Welcome to HMS</h1>
              </Card.Body>
              <Card.Footer>
                <Link className="btn btn-primary" to="patients">
                  Get Started
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default login;
