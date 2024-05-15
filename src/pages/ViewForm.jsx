import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewForm = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get("/user/getuserinfo")
      .then((res) => {
        setUserInfo(res.data.userinfo);
        setFilteredData(res.data.userinfo);
      })
      .catch((err) => {
        alert("error");
      });
  }, []);

  const handleSearch = (e) => {
    const filteredData = userInfo.filter((ele) =>
      ele.university.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <div className=" flex justify-center flex-col w-full items-center">
      <input
        type="text"
        onChange={handleSearch}
        placeholder=" Search by unniversity "
        className=" border px-4 mt-11"
      />
      <table className=" bg-green-300 w-1/2 rounded-lg mt-20">
        <thead>
          <tr className=" border border-black">
            <th>Name</th>
            <th>Subjects</th>
            <th>University</th>
            <th>DOB</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {userInfo &&
            filteredData?.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>
                    {user?.subjects?.map((sub) => {
                      return <p>{sub}</p>;
                    })}
                  </td>
                  <td>{user.university}</td>
                  <td>{user.DOB}</td>
                  <td>{user.rating}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewForm;
