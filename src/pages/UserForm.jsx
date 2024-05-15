import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";


const UserForm = () => {
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [subject, setSubject] = useState("");
  const [userdetails, setUserdetails] = useState({
    name: "",
    subjects: [],
    university: "",
    DOB: `${date}-${month}-${year}`,
    rating: 1,
  });
  const navigate = useNavigate()
  const handleAddSubjects = () => {
    if (subject) {
      setUserdetails({
        ...userdetails,
        subjects: [...userdetails.subjects, subject],
      });
    }
    setSubject("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userdetails.subjects.length > 0){
        axios
        .post("http://localhost:3005/user/postuserinfo", userdetails)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
        navigate('/viewform')
    }else{
        alert("add subjects")
    }
      
  };
  return (
    <div className="   flex justify-center  pt-10">
      <form
        onSubmit={handleSubmit}
        className=" bg-red-400 flex flex-col w-1/2 gap-2 p-5 rounded-lg"
      >
        <label htmlFor="name">Name :</label>
        <input
          onChange={(e) =>
            setUserdetails({ ...userdetails, name: e.target.value })
          }
          required
          type="text"
          value={userdetails.name}
          placeholder=" Enter your name"
        />
        <label htmlFor="subjects">Subjects :</label>
        <div className=" flex gap-4">
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder=" Enter your subjects"
          />
          <button
            type="button"
            className=" border px-3"
            onClick={handleAddSubjects}
          >
            Add
          </button>
        </div>

        <p className=" flex gap-2">
          {userdetails?.subjects?.map((sub) => {
            return <p className=" border p-1 bg-gray-400">{sub}</p>;
          })}
        </p>
        <label htmlFor="university">University :</label>
        <input
          required
          onChange={(e) =>
            setUserdetails({ ...userdetails, university: e.target.value })
          }
          value={userdetails.university}
          type="text"
          placeholder=" Enter your university"
        />
        <label htmlFor="DOB">DOB :</label>
        <div className=" w-40 flex gap-2">
          <input
            required
            className=" w-1/3 p-2 text-xs"
            type="text"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            placeholder=" DD"
          />
          <input
            required
            className=" w-1/3 p-2 text-xs"
            type="text"
            onChange={(e) => setMonth(e.target.value)}
            value={month}
            placeholder=" MM"
          />
          <input
            required
            className=" w-1/2 p-2 text-xs"
            type="text"
            onChange={(e) => setYear(e.target.value)}
            value={year}
            placeholder="YYYY"
          />
        </div>
        <label htmlFor="rating">Rating</label>
        <select
          value={userdetails.rating}
          required
          onChange={(e) =>
            setUserdetails({ ...userdetails, rating: e.target.value })
          }
          name="rating"
          id="rate"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="4">5</option>
        </select>
        <button className=" mt-10 bg-white w-fit p-2 ">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
