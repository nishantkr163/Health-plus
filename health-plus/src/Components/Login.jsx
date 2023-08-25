import React from "react";
import style from "./Login.module.css";
import applogo from "../Images/applogo.png";
import { Typography } from "@mui/material";
const Login = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.loginDivOne}>
        
          <Typography
            fontWeight="bold"
            fontFamily="Oswald"
            color="white"
            variant="h4"
            m='2'
            textAlign='center'
            pb={5}
          >
            Download Our App for better Experience
          </Typography>
        
        
          <img width={"50%"} src={applogo} alt="" />
        
      </div>
      <div></div>
    </div>
  );
};

export default Login;
