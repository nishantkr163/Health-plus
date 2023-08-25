import React from "react";
import style from "./Bmi.module.css";
import { Typography, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Bmi = () => {
  const [age, setAge] = React.useState("");
  const [bmi, setBmi] = React.useState(18.5);

  const handleChange = (event) => {
    setAge(event.target.value);
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
        <div style={{ display : 'flex', gap : '40px' }}>
          <FormControl sx={{ minWidth: 120 }} error>
            <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
            <Select
              sx={{ backgroundColor: "black", color: "#DB2A24" }}
              labelId="demo-simple-select-error-label"
              id="demo-simple-select-error"
              value={age}
              label="Age"
              onChange={handleChange}
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
            defaultValue=""
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
            defaultValue=""
            className={style.inputField}
            InputProps={{
              style: {
                backgroundColor: 'black',  // Background color of the input
                '-moz-appearance': 'textfield',
                appearance: 'textfield',
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
            <button className={style.CommonButton}>Calculate</button>
            
        </div>
      </div>
    </div>
  );
};

export default Bmi;
