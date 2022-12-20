import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLoaderData } from "react-router-dom";
import Pagination from "../Pagination/Paginate";
import DesignedNav from "./DesignedNav";
import MyGlobalState from "./globalState";

export async function loader() {
  const contacts = axios
    .get("https://randomuser.me/api/?results=500")
    .then((response) => {
      const persons = response.data.results;
      return persons;
    });

  return contacts;
}

const Users = (props) => {
  const navigate = useNavigate();

  const dataFetch = useLoaderData();
  // console.log(dataFetch);

  // console.log(dataFetch);

  // const [data2, setdata2] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   axios.get("https://randomuser.me/api/?results=500").then((response) => {
  //     setdata2(response.data.results);
  //   });
  // };

  let myObj = [];

  dataFetch.forEach((item) => {
    let itemObj = {
      firstName: item.name.first,
      lastName: item.name.last,
      nameTitle: item.name.title,
      userAge: item.dob.age,
      userBirthDate: item.dob.date,
      userImage: item.picture.large,
      userCity: item.location.city,
      userState: item.location.state,
      userCountry: item.location.country,
      userStreetNum: item.location.street.number,
      userStreetName: item.location.street.name,
      userName: item.login.username,
      userPhone: item.phone,
      userEmail: item.email,
      userGender: item.gender,
      time: item.location.timezone.offset,
      timeDescripttion: item.location.timezone.description,
      userIdname: item.id.name,
      userIdValue: item.id.value,
      userPostCode: item.location.postcode,
      registrationDate: item.registered.date,
      registrationDuration: item.registered.age,
      password: item.login.password,
      cell: item.cell,
      uuid: item.login.uuid,
      salt: item.login.salt,
      nat: item.nat,
      lat: item.location.coordinates.latitude,
      long: item.location.coordinates.longitude,
    };

    // console.log(itemObj.userStreet);
    myObj.push(itemObj);
  });

  // console.log(myObjs);

  const [pageNum, setPageNum] = useState(0);

  const usersPerPage = 10;
  const pageVisited = pageNum * usersPerPage;
  const handlePageClick = ({ selected }) => {
    setPageNum(selected);
  };

  const displayUsers = myObj
    .slice(pageVisited, pageVisited + usersPerPage)
    .map((item) => {
      return (
        <tr
          key={item.cell}
          onClick={() => {
            toUserDetails(item);
          }}
        >
          <td>
            {item.nameTitle} {item.firstName} {item.lastName}
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(myObj.length / usersPerPage);

  const toUserDetails = (selectedItem) => {
    const myWebStore = new MyGlobalState("singleUser");
    myWebStore.setItem = selectedItem;

    navigate(`/userDetails/${selectedItem.userIdValue}/personal`, {
      state: { selectedItem },
    });
  };

  return (
    <div className="users">
      <table>
        <thead>
          <tr>
            <th>Name of Users</th>
          </tr>
        </thead>
        <tbody>{displayUsers}</tbody>
      </table>
      <div className="PaginationDetails">
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      </div>
    </div>
  );
};

export default Users;
