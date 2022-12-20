import React from "react";
// import { useOutletContext } from "react-router-dom";
import MyGlobalState from "./globalState";

const MembershipInfo = () => {
  const userSelect = new MyGlobalState("singleUser");

  const passedData = userSelect.item;

  const {
    userIdname,
    userIdValue,
    registrationDate,
    registrationDuration,
    password,
    cell,
    salt,
    nat,
    uuid,
  } = passedData;

  return (
    <div className="navDisplay">
      <h2>Membership Details</h2>
      <p>
        id: <span>{userIdname}</span>
        <span>{userIdValue}</span>
      </p>
      <p>
        Registration Date: <span>{registrationDate}</span>
      </p>
      <p>
        Member for: <span>{registrationDuration}</span> years
      </p>
      <p>
        Password: <span>{password}</span>
      </p>
      <p>
        Cell: <span>{cell}</span>
      </p>
      <p>
        salt: <span>{salt}</span>
      </p>
      <p>
        NAT: <span>{nat}</span>
      </p>
      <p>
        uuid: <span>{uuid}</span>
      </p>
    </div>
  );
};

export default MembershipInfo;
