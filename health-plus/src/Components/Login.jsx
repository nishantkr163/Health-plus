import React, { useContext, useState } from "react";
import style from "./Login.module.css";
import logo from "../Images/Logo.png";
import applogo from "../Images/applogo.png";
import { TextField, Typography } from "@mui/material";
import axios from "axios";
import { LabelContext } from "../labelDataContext";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passCheck, setPassCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const value = useContext(LabelContext);

  const nav = useNavigate();

  function succesLogin() {
    axios
      .post(`https://healthfitness.onrender.com/Login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data, "succes login");
        setLoading(false);
        value.handleLogged();
        nav("/");
      });
  }

  function checkAvaibality() {
    setLoading(true);
    if(email === "admin@gmail.com" && password === "admin") {
      nav('/admin')
      return;
    }
    axios
      .get(`https://healthfitness.onrender.com/clients?email_like=${email}`)
      .then((res) => {
        if (res.data.length === 1) {
          console.log("account available");
          if (res.data[0].password === password) {
            console.log("able to login", res.data);
            localStorage.setItem("myAcc", JSON.stringify(res.data));
            setPassCheck(false);
            succesLogin();
          } else {
            setLoading(false)
            setPassCheck(true);
          }
        } else {
          console.log("no any account");
        }
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    checkAvaibality();
  }

  return (
    <div className={style.mainDiv}>
      <div className={style.loginDivOne}>
        <Typography
          fontWeight="bold"
          fontFamily="Oswald"
          color="white"
          variant="h4"
          m="6"
          textAlign="center"
          sx={{ padding: "30px 30px" }}
        >
          Take your experience to the next level Get our app!
        </Typography>

        <div className={style.logoShow}>
          <img width={"50%"} src={logo} alt="Website of logo" />
          <img width={"50%"} src={applogo} alt="App download" />
        </div>
      </div>
      <div className={style.loginDivtwo}>
        {loading ? (
          <Loading />
        ) : (
          <form
            action=""
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Typography
              fontWeight="bold"
              fontFamily="Oswald"
              color="white"
              variant="h4"
            >
              Please provide your login details.
            </Typography>
            <div>
              <Typography
                fontWeight="bold"
                fontFamily="Oswald"
                color="white"
                variant="p"
              >
                Your Email ID here :-
              </Typography>
              <TextField
                label="Enter Email ID:"
                fullWidth
                type="email"
                name="email"
                margin="normal"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                InputLabelProps={{
                  style: { color: "white", fontWeight: "bold" },
                }}
                InputProps={{
                  className: "white-text",
                  sx: {
                    "& .MuiOutlinedInput-input": {
                      color: "white",
                      fontWeight: "bold",
                    },
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            </div>
            <div>
              <Typography
                fontWeight="bold"
                fontFamily="Oswald"
                color="white"
                variant="p"
              >
                Your Password here :-
              </Typography>
              <TextField
                label="Enter Password"
                type="password"
                fullWidth
                margin="normal"
                required
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                InputLabelProps={{
                  style: { color: "white", fontWeight: "bold" },
                }}
                InputProps={{
                  className: "white-text",
                  sx: {
                    "& .MuiOutlinedInput-input": {
                      color: "white",
                      fontWeight: "bold",
                    },
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
              {passCheck ? (
                <Typography
                  fontWeight="bold"
                  color="red"
                  fontFamily="sans-serif"
                  variant="p"
                >
                  Wrong Password
                </Typography>
              ) : null}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Typography
                  fontWeight="bold"
                  fontFamily="Oswald"
                  color="white"
                  variant="p"
                  sx={{ textDecoration: "underline" }}
                >
                  Forgot Password?
                </Typography>
              </div>
            </div>
            <button type="submit" className="commonButton">
              LOGIN
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
