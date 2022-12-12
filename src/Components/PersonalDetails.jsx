import React from "react";
import { useLocation } from "react-router-dom";

const PersonalDetails = () => {
  const location = useLocation();
  const { from } = location.state;

  console.log(from);

  return (
    <div className="navDisplay">
      <h2>Personal Details</h2>
      <p>
        Name:
        <span></span>
      </p>
      <p>
        Date of Birth: <span>May 17 1993</span>
      </p>
      <p>
        Age: <span>23</span> years
      </p>
      <p>
        Gender: <span>Male</span>
      </p>
      <p>
        E-mail: <span>quadri1435@gmail.com</span>
      </p>
      <p>
        Username: <span>abujafar93</span>
      </p>
      <p>
        Phone Number: <span>+234888888888</span>
      </p>
      <p>
        NAT: <span>DK</span>
      </p>
    </div>
  );
};

export default PersonalDetails;
