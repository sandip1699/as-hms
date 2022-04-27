import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Modal,
  Form,
} from "react-bootstrap";
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
} from "react-icons/fi";
import {
  BsArrowDownUp,
  BsFillCaretRightFill,
  BsFillCaretLeftFill,
  BsFillEnvelopeFill,
  BsEnvelope,
} from "react-icons/bs";

const CreatePatientRecord = () => {
  return (
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
          <Button variant="primary">
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CreatePatientRecord;
