import React from "react";
import { Link, useLocation, Outlet, Route, Routes } from "react-router-dom";
import Location from "./Location";
import MembershipInfo from "./MembershipInfo";
import NoMatch from "./NoMatch";
import PersonalDetails from "./PersonalDetails";
// import Location from "./Location";
// import MembershipInfo from "./MembershipInfo";
// import PersonalDetails from "./PersonalDetails";

const UsersDetails = (props) => {
  //console.log(props);

  // const linkstyles = ({ isActive }) => {
  //   return {
  //     fontWeight: isActive ? "bold" : "normal",
  //     color: isActive ? "#259ge9" : "#259fd8",
  //     fontSize: isActive ? "23px" : "inherit",
  //     textDecoration: "none",
  //   };
  // };

  // console.log(props);

  const { state } = useLocation();
  const { selectedItem } = state;
  // console.log(selectedItem);
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
          <Link
            className="Link"
            // style={{ linkstyles }}
            to="personal"
            state={{ from: "userDetails" }}
          >
            Details
          </Link>
          <Link
            className="Link"
            // style={{ linkstyles }}
            to="location"
            state={{ from: "userDetails" }}
          >
            Location
          </Link>
          <Link
            className="Link"
            // style={{ linkstyles }}
            to="member"
            state={{ from: "userDetails" }}
          >
            User
          </Link>
        </nav>

        <Routes>
          <Route index element={<PersonalDetails />} />
          <Route exact path="personal" element={<PersonalDetails />} />
          <Route path="location" element={<Location />} />
          <Route path="member" element={<MembershipInfo />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
};

export default UsersDetails;
