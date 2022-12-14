import React from "react";
import { useLocation, useParams } from "react-router-dom";

const PersonalDetails = () => {
  const selectedItem = useParams();
  // const { from } = location.state;
  // console.log(from);
  return (
    <div className="navDisplay">
      <h2>Personal Details</h2>
      <p>
        Name:
        <span>
          {selectedItem.nameTitle}
          {selectedItem.lastName}
          {selectedItem.firstName}
        </span>
      </p>
      <p>
        Date of Birth: <span>{selectedItem.userBirthDate}May 17 1993</span>
      </p>
      <p>
        Age: <span>{selectedItem.userAge}23</span> years
      </p>
      <p>
        Gender: <span>{selectedItem.userGender}Male</span>
      </p>
      <p>
        E-mail: <span>{selectedItem.userEmail}quadri1435@gmail.com</span>
      </p>
      <p>
        Username: <span>{selectedItem.userName}abujafar93</span>
      </p>
      <p>
        Phone Number: <span>{selectedItem.userPhone}+234888888888</span>
      </p>
      <p>
        NAT: <span>{selectedItem.userIdValue}DK</span>
      </p>
    </div>
  );
};

export default PersonalDetails;
