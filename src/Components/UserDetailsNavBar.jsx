import React from "react";
import { NavLink } from "react-router-dom";

function UserDetailsNavBar() {
  // navlinkstyle can however be set in css {nav a.active} rather than this function
  const navlinkstyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#259ge9" : "#259fd8",
      textDecoration: "none",
    };
  };

  return (
    <nav className="primary-nav">
      <NavLink style={navlinkstyles} to="/">
        Details
      </NavLink>
      <NavLink style={navlinkstyles} to="/location">
        Location
      </NavLink>
      <NavLink style={navlinkstyles} to="/member">
        User
      </NavLink>
    </nav>
  );
}

export default UserDetailsNavBar;
