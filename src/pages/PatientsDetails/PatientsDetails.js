import React from "react";
import Summary from "../PatientsDetails/Summary";
import PatientHistory from "../PatientsDetails/PatientHistory";
import Reports from "../PatientsDetails/Reports";
import { Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import Footer from "../../components/Footer";

function PatientsDetails(props) {
  return (
    <div>
      <div className="adminview">
        <Router>
          <Nav className="sidebarnav">
            <ul>
              <li>
                <NavLink to="/patients-details/admission">Admission</NavLink>
              </li>
              <li>
                <NavLink
                  to="/patients-details/summary"
                  activeClassName="active"
                >
                  Summary
                </NavLink>
              </li>
              <li>
                <NavLink to="/patients-details/history">history</NavLink>
              </li>
              <li>
                <NavLink to="/patients-details/reports">Reports</NavLink>
              </li>
              <li>
                <NavLink to="/patients-details/procedures">Procedures</NavLink>
              </li>
              <li>
                <NavLink to="/patients-details/insurance">Insurance</NavLink>
              </li>
              <li>
                <NavLink to="/patients-details/billing">Billing</NavLink>
              </li>
              <li>
                <NavLink to="/patients-details/problem-list">
                  Problem List
                </NavLink>
              </li>
              <li>
                <NavLink to="/patients-details/medications">
                  Medications
                </NavLink>
              </li>
              <li>
                <NavLink to="/patients-details/diagnosis">Diagnosis</NavLink>
              </li>
              <li>
                <NavLink to="/patients-details/allergies">Allergies</NavLink>
              </li>
              <li>
                <NavLink to="/patients-details/vitals">Vitals</NavLink>
              </li>
            </ul>
          </Nav>
          <div className="rightpanels">
            <Switch>
              <Route path="/patients-details/summary" component={Summary} />
              <Route path="/patients-details/reports" component={Reports} />
              <Route
                path="/patients-details/history"
                component={PatientHistory}
              />
            </Switch>
          </div>
        </Router>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default PatientsDetails;
