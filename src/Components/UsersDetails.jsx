import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import MyGlobalState from "./globalState";
import ErrorBoundary from "./ErrorBoundary";

const UsersDetails = (props) => {
  const { state } = useLocation();

  const dominData = state.selectedItem;

  const StorageData = new MyGlobalState("singleUser");
  const dataStore = StorageData.item;
  const switchData = dominData ?? dataStore;

  return (
    <div className="userDetails">
      <div className="userDetailsLeft">
        <div className="userImageBox">
          <img src={switchData.userImage} alt="profileImage" />
          <p>
            {switchData.nameTitle} {switchData.lastName} {switchData.firstName}
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

        <Outlet context={dominData} />
      </div>
    </div>
  );
};

export default UsersDetails;
