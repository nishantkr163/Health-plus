import { Autocomplete, Button, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import style from "./Users.module.css";
import { useEffect, useState } from "react";
import AdminLoading from './AdminLoading'
import EditModal from "./EditModal";

const Users = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false)
  const [pages, setPages] = useState(0);
  const [flag, setFlag] = useState(false);
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState({})

  const handleModal = () => {
    setModal(!modal)
  }

  const handleFlag = () => {
    setFlag(!flag)
  }

  const options = [
    "Jessica Anderson",
    "Michael Roberts",
    "Sarah Johnson",
    "Alex Williams",
    "Emily Martinez",
    "David Thompson",
  ];

  const handlePage = (p) => {
    setPage(p)
  }

  const handleOptionsChange = (event, newValue) => {
    setSelectedOptions(newValue);
  };

  const params = {
    CoachName: selectedOptions,
    _limit : 4,
    _page : page
  };

  function getData() {
    setLoading(true)
    axios
      .get(`https://healthfitness.onrender.com/clients?name_like=${input}`, {
        params,
      })
      .then((res) => {
        const totalCount = res.headers["x-total-count"];
        console.log(res.data)
        setData(res.data);
        setLoading(false)
        // Calculate the total number of pages based on total count and items per page (4)
        setPages(Math.ceil(totalCount / 4));
      }).catch((err) => {
        setLoading(false)
        alert(`Something went wrong while fetching...`)
      })
  }

  function handleDelete(id) {
    setLoading(true)
    axios.delete(`https://healthfitness.onrender.com/clients/${id}`).then((res) => {
      console.log(res.data)
      setLoading(false)
      setFlag(!flag)
    }).catch((err) => {
      setLoading(false)
      alert(`Something went wrong while deleting...`)
    })
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      getData(selectedOptions, input, page);
    }, 800);

    return () => {
      clearTimeout(timer);
    };
    
  }, [selectedOptions, page, input, flag]);

  console.log(selectedOptions, "selected");
  console.log("pages", pages);


  return (
    <>
    {
      modal ? <EditModal value={edit} handleModal={handleModal} handleFlag={handleFlag} /> : null
    }
    <div style={{ width : '70%', margin : 'auto' }} className="input-container">
              <input
                style={{ margin: "auto" }}
                type="text"
                value={input}
                name="text"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                className="input"
                placeholder="Search..."
              />
              <span className="icon">
                <svg
                  width="19px"
                  height="19px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      opacity="1"
                      d="M14 5H20"
                      stroke="#000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      opacity="1"
                      d="M14 8H17"
                      stroke="#000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                      stroke="#000"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      opacity="1"
                      d="M22 22L20 20"
                      stroke="#000"
                      stroke-width="3.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </span>
            </div>
    <div>
      <Autocomplete
        multiple
        id="multi-select"
        sx={{
          width: "70%",
          margin: "auto",
          marginTop: "10px",
          border: "2.5px solid black",
          transition: "border-color 0.3s",
        }}
        options={options}
        onChange={handleOptionsChange}
        value={selectedOptions}
        renderInput={(params) => (
          <TextField {...params} label="Guided by Coaches: Filter Options" />
        )}
      />
      <div style={{ marginTop: "20px", textAlign : 'center', display : 'flex', justifyContent : 'center' }}>
        { loading ? <AdminLoading /> :
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Height(in cm)</th>
              <th>Weight(in kg)</th>
              <th>DOB</th>
              <th>Fitness Goals</th>
              <th>Coach</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((ele) => (
                <tr key={ele.id}>
                  <th>{ele.id}</th>
                  <th>{ele.name}</th>
                  <th>{ele.email}</th>
                  <th>{ele.gender}</th>
                  <th>{ele.age}</th>
                  <th>{ele.height}</th>
                  <th>{ele.weight}</th>
                  <th>{ele.dateOfBirth}</th>
                  <th>{ele.fitnessGoal.join(", ")}</th>
                  <th>{ele.CoachName}</th>
                  <th onClick={()=> {
                    setModal(true)
                    setEdit(ele)
                  }} style={{ color: "white", backgroundColor: "green", cursor : 'pointer' }}>
                    EDIT
                  </th>
                  <th onClick={()=> {
                    handleDelete(ele.id)
                  }} style={{ color: "white", backgroundColor: "#DB2A24", cursor : 'pointer' }}>
                    DELETE
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
        }
      </div>
    </div>
        <div style={{ margin : "auto", textAlign : "center", marginTop : '20px' }} >
          {pages > 0 &&
            new Array(pages)
              .fill(null)
              .map((ele, index) => <button onClick={() => handlePage(index + 1)} style={{ marginRight : '20px' }} key={index}>{index + 1}</button>)}
        </div>
        </>
  );
};

export default Users;
