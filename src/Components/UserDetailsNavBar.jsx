import React from "react";
import { NavLink } from "react-router-dom";

function UserDetailsNavBar() {
  // navlinkstyle can however be set in css {nav a.active} rather than this function
  const navlinkstyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "yellow" : "blue",
    };
  };

  return (
    <nav className="primary-nav">
      <NavLink style={navlinkstyles} to="UsersDetails">
        Details
      </NavLink>
      <NavLink style={navlinkstyles} to="/Location">
        Location
      </NavLink>
      <NavLink style={navlinkstyles} to="/MembershipInfo">
        User
      </NavLink>
    </nav>
  );
}

export default UserDetailsNavBar;
