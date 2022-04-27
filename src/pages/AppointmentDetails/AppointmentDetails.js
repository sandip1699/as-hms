import React from "react";
import TodayAppointments from "../AppointmentDetails/TodayAppointments";
import MedicalHistory from "../AppointmentDetails/MedicalHistory";
import DetailedNotes from "../AppointmentDetails/DetailedNotes";
import { Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import Footer from "../../components/Footer";

function AppointmentDetails(props) {
  return (
    <div>
      <div className="adminview">
        <Router>
          <Nav className="sidebarnav">
            <ul>
              <li>
                <NavLink to="/appointment-details/today-appointment" activeClassName="active">Today’s Appointment</NavLink>
              </li>
              <li>
                <NavLink to="/appointment-details/detailed-notes" activeClassName="active">Detailed Notes</NavLink>
              </li>
              <li>
                <NavLink to="/appointment-details/appointment-history" activeClassName="active">Appointment History</NavLink>
              </li>
              <li>
                <NavLink to="/appointment-details/medical-history" activeClassName="active">Medical History</NavLink>
              </li>
             
            </ul>
          </Nav>
          <div className="rightpanels">
            <Switch>
              <Route path="/appointment-details/today-appointment" component={TodayAppointments} />
              <Route path="/appointment-details/detailed-notes" component={DetailedNotes} />
              <Route path="/appointment-details/medical-history" component={MedicalHistory} />
              
            </Switch>
          </div>
        </Router>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default AppointmentDetails;
