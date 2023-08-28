import React, { useEffect } from "react";
import style from "./Bmi.module.css";
import { Typography, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import EditNoteIcon from "@mui/icons-material/EditNote";

const Bmi = () => {
  const [age, setAge] = React.useState(18);
  const [weight, setWeight] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [bmi, setBmi] = React.useState(18.5);
  const [bmiStatus, setBmiStatus] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [flag, setFlag] = React.useState(false);
  const [key, setKey] = React.useState("Underweight");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const calculateBMI = () => {
    console.log("working", height, weight);
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBmi = (
        weight /
        (heightInMeters * heightInMeters)
      ).toFixed(2);
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) {
        setKey("Underweight");
        setBmiStatus(1);
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        setKey("NormalWeight");
        setBmiStatus(2);
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        setKey("Overweight");
        setBmiStatus(3);
      } else {
        setKey("Obesity");
        setBmiStatus(4)
      }

      console.log("Calculated BMI:", calculatedBmi);
      console.log("BMI Status:", bmiStatus);
    }
  };

  return (
    <div className={style.mainDiv}>
      <div style={{ width: "70%" }}>
        <div>
          <Typography
            m="auto"
            fontWeight="bold"
            className={style.class}
            fontFamily="Oswald"
            color="#DB2A24"
            variant="h3"
            mb="3%"
          >
            KNOW YOUR BMI
          </Typography>
        </div>
        <div style={{ display: "flex" ,gap: "40px" }}>
          <FormControl sx={{ minWidth: 120 }} error>
            <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
            <Select
              sx={{ backgroundColor: "black", color: "#DB2A24" }}
              labelId="demo-simple-select-error-label"
              id="demo-simple-select-error"
              value={age}
              label="Age"
              renderValue={(value) => `${value}`}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Prefer not to say"}>Prefer not to say</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{
              "& input": {
                backgroundColor: "black",
                color: "#DB2A24",
                fontWeight: "bold",
              },
            }}
            type="number"
            error
            id="outlined-error"
            label="Your Weight(in kg)"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
            className={style.inputField}
          />
          <TextField
            sx={{
              "& input": {
                backgroundColor: "black",
                color: "#DB2A24",
                fontWeight: "bold",
              },
            }}
            type="number"
            error
            id="outlined-error"
            label="Your Height(in cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className={style.inputField}
            InputProps={{
              style: {
                backgroundColor: "black", // Background color of the input
                "-moz-appearance": "textfield",
                appearance: "textfield",
              },
            }}
          />
          <Typography
            fontWeight="bold"
            className={style.class}
            fontFamily="Oswald"
            color="#DB2A24"
            variant="h3"
          >
            {" "}
            = {bmi}
          </Typography>
          <button
            onClick={() => {
              calculateBMI();
            }}
            className={style.CommonButton}
          >
            Calculate
          </button>
        </div>
      </div>

      {flag
        ? data.key.map((ele, index) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={index + Date.now() + Math.random()}
            >
              <Typography
                fontWeight="bold"
                fontFamily="Oswald"
                color="#DB2A24"
                variant="h5"
              >
                <EditNoteIcon /> {ele}
              </Typography>
            </div>
          ))
        : null}
    </div>
  );
};

export default Bmi;
