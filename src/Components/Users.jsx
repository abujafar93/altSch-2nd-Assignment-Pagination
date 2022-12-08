import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("https://api.randomuser.me/").then((response) => {
      setData(response.data);
      console.log(response.data.results);
    });
  };

  return <div>get data first</div>;
};

export default Users;
