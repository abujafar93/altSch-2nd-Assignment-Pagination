import React from "react";
import { Route, Routes } from "react-router-dom";
import PersonalDetails from "./PersonalDetails";
import UserDetailsNavBar from "./UserDetailsNavBar";
import Location from "./Location";
import MembershipInfo from "./MembershipInfo";

const UserDetailsRight = () => {
  return (
    <div className="userDetailsRight">
      <UserDetailsNavBar />
      <Routes>
        <Route path="/" element={<PersonalDetails />} />
        <Route path="location" element={<Location />} />
        <Route path="member" element={<MembershipInfo />} />
      </Routes>
      <div></div>
    </div>
  );
};

export default UserDetailsRight;
