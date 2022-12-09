import React from "react";
import UserDetailsLeft from "./UserDetailsLeft";
import UserDetailsRight from "./UserDetailsRight";

const UsersDetails = () => {
  return (
    <div className="userDetails">
      <UserDetailsLeft />
      <UserDetailsRight />
    </div>
  );
};

export default UsersDetails;
