import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination/Paginate";

const Users = (props) => {
  const navigate = useNavigate();

  const [data2, setdata2] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios.get("https://randomuser.me/api/?results=500").then((response) => {
      setdata2(response.data.results);
    });
  };

  let myObj = [];

  data2.forEach((item) => {
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
      userIdname: item.id.name,
      userIdValue: item.id.value,
      userPostCode: item.location.postcode,
      registrationDate: item.registered.date,
      registrationDuration: item.registered.age,
      id: item.id.value,
    };

    myObj.push(itemObj);
  });

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
          key={item.index}
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
    navigate("userDetails/", { state: { selectedItem } });
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
