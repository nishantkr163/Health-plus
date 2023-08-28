import React, { useContext } from "react";
import style from "./MyProfile.module.css";
import { TextField, Typography } from "@mui/material";
import logo from "../Images/Logo.png";
import applogo from "../Images/applogo.png";
import { LabelContext } from "../labelDataContext";

const MyProfile = () => {
  const user = JSON.parse(localStorage.getItem("myAcc"));
  console.log("local data", user[0]);
  const value = useContext(LabelContext)
  const myData = JSON.parse(localStorage.getItem("myAcc"))
  console.log(myData)
  const today = new Date();

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);
  console.log("today date", formattedDate);

  function handleAccDelete() {

  }

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={style.mainDiv}>
          <div className={style.avatar}>
            <div className={style.lordIcon}>
              <lord-icon
                src="https://cdn.lordicon.com/dxjqoygy.json"
                trigger="hover"
                colors="primary:#b4b4b4,secondary:#b4b4b4"
                stroke="75"
                state="hover-nodding"
                style={{ width: "250px", height: "250px" }}
              ></lord-icon>
            </div>
            <div className={style.profileButton}>
              <button onClick={() => {
                // value.handleLogged()
                // value.handleAuth()
                // value.handleProf()
                // localStorage.clear()
              }}>LOGOUT</button>
              <button
              onClick={()=> {
                // value.handleLogged()
                // value.handleAuth()
                // value.handleProf()
                // handleAccDelete()
                // localStorage.clear()
              }}
                style={{
                  backgroundColor: "#DB2A24",
                  color: "white",
                  width: "87%",
                  margin: "10px auto",
                }}
              >
                DELETE ACCOUNT
              </button>
            </div>
          </div>
          <div className={style.data}>
            <h1 style={{ textAlign: "center", color: "#DB2A24" }}>
              MY PROFILE
            </h1>
            <h2>My Name: {user[0].name}</h2>
            <h2>My Email: {user[0].email}</h2>
            <p>Gender : {user[0].gender}</p>
            <p>My DOB: {user[0].dateOfBirth}</p>
            <p>Goals I am pursuing:-</p>
            <ul style={{ padding: "0 20px" }}>
              {user[0]?.fitnessGoal.length > 0 &&
                user[0].fitnessGoal.map((ele) => <li>{ele}</li>)}
            </ul>
            <h4>My Height: {user[0].height} cm</h4>
            <h4>My Weight: {user[0].weight} kg</h4>
            <p style={{ textAlign: "center" }}>
              I am being supervised by fitness trainer{" "}
              <span style={{ color: "#DB2A24" }}>{user[0].CoachName}</span>
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button>EDIT</button>
              <button onClick={() => {
                value.handleProf()
              }} >CLOSE</button>
            </div>
          </div>
          <div className={style.addData}>
            <br />
          <Typography
        fontWeight="bold"
        fontFamily="Oswald"
        color="#DB2A24"
        variant="h6"
        mt="8"
        textAlign='center'
      >
        FILL TODAY's ({formattedDate}) DATA :-
      </Typography>
            <div style={{
              display : 'flex',
              justifyContent : 'center',
              alignItems : 'center',
              gap : '10px',
              flexDirection : 'column',
              width : '80%',
              margin : 'auto'
            }} >
              <TextField
                label="Enter Today's Water Intake in (Litre)"
                type="number"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Distance Walked Today (in KM)"
                type="number"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <button>SUBMIT</button>
            </div>
            <div style={{
              display : 'flex',
              flexDirection : 'column',
              justifyContent : 'space-between',
              alignItems : 'center'
            }}>
            <img width={"30%"} src={logo} alt="Website of logo" />
          <img width={"30%"} src={applogo} alt="App download" />
            </div>
            <div className={style.chartAnl} >
              <br />
              <button>Show Analysis</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
