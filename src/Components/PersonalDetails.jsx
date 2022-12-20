import React from "react";
// import { useLocation, useParams, useOutletContext } from "react-router-dom";
import MyGlobalState from "./globalState";

const PersonalDetails = () => {
  // const { from } = location.state;
  // console.log(from);

  const userSelect = new MyGlobalState("singleUser");

  // const selectedItem = useParams();
  const passedData = userSelect.item;

  const {
    nameTitle,
    lastName,
    firstName,
    userBirthDate,
    userAge,
    userGender,
    userEmail,
    userName,
    userPhone,
    nat,
  } = passedData;

  const fullName = nameTitle + " " + lastName + " " + firstName;

  return (
    <div className="navDisplay">
      <h2>Personal Details</h2>
      <p>
        Name:
        <span>{fullName}</span>
      </p>
      <p>
        Date of Birth: <span>{userBirthDate}</span>
      </p>
      <p>
        Age: <span>{userAge}</span> years
      </p>
      <p>
        Gender: <span>{userGender}</span>
      </p>
      <p>
        E-mail: <span>{userEmail}</span>
      </p>
      <p>
        Username: <span>{userName}</span>
      </p>
      <p>
        Phone Number: <span>{userPhone}</span>
      </p>
      <p>
        NAT: <span>{nat}</span>
      </p>
    </div>
  );
};

export default PersonalDetails;
