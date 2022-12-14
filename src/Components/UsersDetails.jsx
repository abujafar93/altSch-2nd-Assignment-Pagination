import React from "react";
import { Link, useLocation, Outlet, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Location from "./Location";
import MembershipInfo from "./MembershipInfo";
import NoMatch from "./NoMatch";
import PersonalDetails from "./PersonalDetails";

const UsersDetails = (props) => {
  const { state } = useLocation();
  const { selectedItem } = state;
  return (
    <div className="userDetails">
      <div className="userDetailsLeft">
        <div className="userImageBox">
          <img src={selectedItem.userImage} alt="profileImage" />
          <p>
            {selectedItem.nameTitle} {selectedItem.lastName}{" "}
            {selectedItem.firstName}
          </p>
          <p>Web Developer</p>
        </div>
        <div className="skills">
          <h3>SKILLS</h3>
          <p>Branding</p>
          <p>Graphic Designing</p>
          <p>UI/UX</p>
          <p>Web Design</p>
          <p>Packaging</p>
          <p>Web Development</p>
        </div>
      </div>

      <div className="userDetailsRight">
        <nav className="primary-nav">
          <ErrorBoundary>
            <Link
              className="Link"
              to="personal"
              state={{ from: "userDetails" }}
            >
              Details
            </Link>
          </ErrorBoundary>

          <ErrorBoundary>
            <Link
              className="Link"
              to="location"
              state={{ from: "userDetails" }}
            >
              Location
            </Link>
          </ErrorBoundary>

          <ErrorBoundary>
            <Link className="Link" to="member" state={{ from: "userDetails" }}>
              User
            </Link>
          </ErrorBoundary>
        </nav>

        <ErrorBoundary>
          <Routes>
            <Route index element={<PersonalDetails />} />
            <Route
              exact
              path="personal/:{selectedItem}"
              element={<PersonalDetails />}
            />
            <Route path="location" element={<Location />} />
            <Route path="member" element={<MembershipInfo />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </ErrorBoundary>
        <Outlet />
      </div>
    </div>
  );
};

export default UsersDetails;
