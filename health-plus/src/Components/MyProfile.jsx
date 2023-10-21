import React, { useContext } from "react";
import style from "./MyProfile.module.css";
import { TextField, Typography } from "@mui/material";
import logo from "../Images/Logo.png";
import applogo from "../Images/applogo.png";
import { LabelContext } from "../labelDataContext";
import { styled } from "styled-components";

const MyProfile = () => {
  const user = JSON.parse(localStorage.getItem("myAcc"));
  console.log("local data", user[0]);
  const value = useContext(LabelContext);
  const myData = JSON.parse(localStorage.getItem("myAcc"));
  console.log(myData);
  const today = new Date();

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);
  console.log("today date", formattedDate);

  function handleAccDelete() {}

  return (
    <>
      {/* <div
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
      </div> */}
      {/* ************ */}

      <DIV>
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-picture">
              <div className="picture-container">
                <img
                  width="200px"
                  src="https://chicagophotovideo.com/wp-content/uploads/2017/10/ezgif.com-webp-to-jpg-17.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="info-container">
              <div className="info">
                <h3>Name: {user[0].name}</h3>
                <p className="role">Email: {user[0].email}</p>
              </div>
            </div>
          </div>
          <div className="profile-info">
            <div className="info-header">
              <div className="title">
                <h2>Info</h2>
              </div>
              <div className="icon">
                <i className="fas fa-user-circle"></i>
              </div>
            </div>
            <div className="break">
              <hr />
            </div>
            <div className="info-body">
              <div className="info-field">
                <h3>Height</h3>
                <p>{user[0].height}cm</p>
              </div>
              <div className="info-field">
                <h3>Weight</h3>
                <p>{user[0].weight}kg</p>
              </div>
              <div className="info-field">
                <h3>Coach name</h3>
                <p>{user[0].CoachName}</p>
              </div>
              <div className="info-field">
                <h3>Fitness Goal</h3>
                <p>{user[0]?.fitnessGoal.length > 0 &&
                user[0].fitnessGoal.map((ele) => <li>{ele}</li>)}</p>
              </div>
              <div className="info-field">
              <button onClick={() => {
                value.handleLogged()
                value.handleAuth()
                value.handleProf()
                localStorage.clear()
              }}>LOGOUT</button>
              </div>
            </div>
          </div>
        </div>
      </DIV>
    </>
  );
};

export default MyProfile;

const DIV = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");

  

  /* Colors */
  $red: #b71c1c;

  /* Profile Card */
  .profile-container {
    position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
  }

  @media screen and (max-width: 1033px) and (min-width : 300px) {
    .profile-container {
      width : 90%;
    }
  }

  /* Profile Header */
  .profile-container .profile-header {
    padding: 2rem 1rem 4rem 1rem;
    background-color: #b71c1c;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .profile-container .profile-header .profile-picture {
    width: auto;
    display: flex;
    justify-content: center;
  }

  .profile-container .profile-header .profile-picture .picture-container {
    width: 80%;
    overflow: hidden;
    border-radius: 50%;
    height: 150px;
    display: flex;
    border: 3px solid #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    justify-content: center;
    transition: all ease-in-out 0.4s;
  }

  .profile-container .profile-header .profile-picture .picture-container:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  }

  .profile-container .profile-header .profile-picture .picture-container img {
    transition: transform ease-in-out 0.4s;
    height: 150px;
    width: auto;
  }

  .profile-container .profile-header .info-container {
    width: auto;
    color: #fff;
    display: flex;
    align-items: center;
  }

  .profile-container .profile-header .info-container .h2 {
  }

  .profile-container .profile-header .info-container .role {
    text-transform: uppercase;
  }

  /* Profile Body */
  .profile-container .profile-info {
    display: flex;
    width: 92%;
    margin: auto;
    border-radius: 10px;
    margin-top: -2.5rem;
    flex-wrap: wrap;
    padding: 0.5rem 1rem 2rem 1rem;
    background-color: #fff;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
  }

  .profile-container .profile-info .info-header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .profile-container .profile-info .info-header .icon i {
    font-size: 1.4rem;
  }

  .profile-container .profile-info .break {
    width: 100%;
    color: red;
  }

  .profile-container .profile-info .info-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .profile-container .profile-info .info-body .info-field {
    width: auto;
    margin: 0 2rem;
  }

  @media screen and (max-width: 900px) {
    .profile-container .profile-header .profile-picture .picture-container {
      height: 100px;
      width: 100px;
    }

    .profile-container .profile-header .profile-picture .picture-container img {
      height: 100px;
    }

    .profile-container .profile-info {
      width: 85%;
    }
  }
`;
