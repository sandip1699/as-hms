import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Navbar,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiHeart,
  FiHelpCircle,
  FiSearch,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLock,
  FiEye,
} from "react-icons/fi";
const Loginwraper = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 135px);
  position: relative;
  z-index: 100;
  @media (min-width: 1080px) {
    width: 1000px;
  }
`;
const Bgblock = styled.div`
  width: 100%;
  height: 100px;
  background: #8af4ff;
`;
const LoginInner = styled.div`
  background-color: #f5f5f5;
  border-radius: 30px;
  box-shadow: 1px 1px 30px #45ffff45;
  overflow: hidden;
  width: 100%;
  img {
    max-width: 100%;
  }
`;

const login = () => {
  return (
    <div className="loginwrapper">
      <div className="loginheader bg-white position-relative">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6}>
              <Navbar.Brand>
                <img src="/logo.png" alt="logo" />
              </Navbar.Brand>
            </Col>
            <Col md={6} className="ml-auto rightheaders">
              <Row className="align-items-center justify-content-end">
                <img
                  className="ml-auto pr-4"
                  src="/east-valley.png"
                  alt="east-valley"
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Loginwraper>
          <LoginInner>
            <Row>
              <Col md={6} className="logimg text-center p-0">
                <img src="/login-dr.png" className="px-4" alt="logjn" />
                <Bgblock></Bgblock>
              </Col>
              <Col md={6} className="logforms">
                <h4 className="mt-4 text-center text-grey">Sign in</h4>
                <Form>
                  <Form.Group>
                    <InputGroup className="mb-4 mt-5">
                      <InputGroup.Text>
                        <FiUser />
                      </InputGroup.Text>
                      <FormControl placeholder="Email or phone number" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <InputGroup className="mb-4">
                      <InputGroup.Text>
                        <FiLock />
                      </InputGroup.Text>
                      <FormControl placeholder="Password" type="password" />
                      <InputGroup.Text>
                        <FiEye />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Row>
                      <Col md={6}>
                        <label className="d-flex align-items-center">
                          <input type="checkbox" />
                          <span className="pl-2 text-grey">Remember Me</span>
                        </label>
                      </Col>
                      <Col md={6}>
                        <div className="text-right">
                          <Link to="forgot-pasword" className="forgot">Forgot Password?</Link>
                        </div>
                      </Col>
                    </Row>
                  </Form.Group>
                  <Form.Group>
                    <Link className="btn btn-primary btn-block" to="patients">
                    Log in
                    </Link>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </LoginInner>
        </Loginwraper>
      </Container>
      <div className="loginfooter">
        <Footer />
      </div>
    </div>
  );
};

export default login;
