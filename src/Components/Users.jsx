import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("https://randomuser.me/api/?results=100").then((response) => {
      setData(response.data.results);
      console.log(response.data.results);
    });
  };

  let myObj = [];

  // data.forEach((item) => {
  //   let itemObj = {
  //     firstName: item.name.first,
  //     lastName: item.name.last,
  //     nameTitle: item.name.title,
  //     userAge: item.dob.age,
  //     userBirthDate: item.dob.date,
  //     userImage: item.picture.large,
  //     userCity: item.location.city,
  //     userState: item.location.state,
  //     userCountry: item.location.country,
  //     userStreetNum: item.location.street.number,
  //     userStreetName: item.location.street.name,
  //     userName: item.login.username,
  //     userPhone: item.phone,
  //     userEmail: item.email,
  //     userGender: item.gender,
  //     time: item.location.timezone.offset,
  //     userIdname: item.id.name,
  //     userIdValue: item.id.value,
  //     userPostCode: item.location.postcode,
  //     registrationDate: item.registered.date,
  //     registrationDuration: item.registered.age,
  //   };

  //   console.log(itemObj);
  // });

  return <></>;
};

export default Users;
