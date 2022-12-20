import React from "react";
import MyGlobalState from "./globalState";

const Location = () => {
  const userSelect = new MyGlobalState("singleUser");

  const passedData = userSelect.item;
  console.log(passedData);

  const {
    userStreetNum,
    userStreetName,
    userCity,
    userState,
    userPostCode,
    userCountry,
    time,
    lat,
    long,
    timeDescription,
  } = passedData;

  let street = userStreetNum + "," + userStreetName;

  return (
    <div className="navDisplay">
      <h2>User's Location</h2>
      <p>
        Street: <span>{street}</span> street
      </p>
      <p>
        City: <span>{userCity}</span>
      </p>
      <p>
        State: <span>{userState}</span> State
      </p>
      <p>
        Country: <span>{userCountry}</span>
      </p>
      <p>
        Post Code: <span>{userPostCode}</span>
      </p>
      <p>
        Coordinates: <span>Long {long}</span>
        <span>Lat {lat}</span>
      </p>
      <p>
        Time Zone: <span>{time}</span>
      </p>
      <p>
        Location Time Description: <span>{timeDescription}</span>
      </p>
    </div>
  );
};

export default Location;
