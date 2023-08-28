import React, { useContext, useState, useEffect } from "react";
import style from "./SignUp.module.css";
import Stepper from "react-stepper-horizontal";
import { LabelContext } from "../labelDataContext";
import {
  Button,
  ButtonGroup,
  FormControl,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Select, Autocomplete } from "@mui/material";
import axios from "axios";
import Loading from "./Loading";
import Login from "./Login";
import ErrorModal from "./ErrorModal";


const SignUp = (props) => {
  const value = useContext(LabelContext);
  console.log(value);
  const [show, setShow]  = useState(false);

  function handleToggle() {
    setShow(!show)
  }

  return (
    <>
      {
        show ? <ErrorModal handleToggle={handleToggle} /> : null
      }
      {value.isAuth ? (
        <Login />
      ) : (
        <div className={style.mainDiv}>
          {value.page !== 5 && (
            <Stepper steps={value.steps} activeStep={value.page} />
          )}
          {value.page === 0 && <UserDetail1 />}
          {value.page === 1 && <UserDetail2 />}
          {value.page === 2 && <UserDetail3 />}
          {value.page === 3 && <UserDetail4 />}
          {value.page === 4 && <PostData handleToggle={handleToggle}  />}
        </div>
      )}
      <div style={{ margin: "10px", textAlign: "center" }}>
        <button
          className="authToggleButton"
          onClick={() => {
            value.handleAuth();
          }}
        >
          {value.isAuth
            ? "LOGOUT & CREATE NEW ACCOUNT"
            : "ALREADY HAVE AN ACCOUNT? LOGIN NOW"}
        </button>
      </div>
    </>
  );
};

export default SignUp;

const UserDetail1 = (props) => {
  const value = useContext(LabelContext);
  console.log("value", value);

  return (
    <>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          console.log(value.userData);
          value.nextPage();
        }}
      >
        <TextField
          label="Enter Your Full Name"
          style={{ margin: "auto", width: "50%" }}
          fullWidth
          type="name"
          name="name"
          margin="normal"
          required
          onChange={(e) => value.handleChange1(e)}
          value={value.userData.name}
          InputLabelProps={{ style: { color: "white", fontWeight: "bold" } }}
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
        <TextField
          label="Enter Your Email ID"
          type="email"
          style={{ margin: "auto", width: "50%" }}
          fullWidth
          margin="normal"
          required
          name="email"
          onChange={(e) => value.handleChange1(e)}
          value={value.userData.email}
          InputLabelProps={{ style: { color: "white", fontWeight: "bold" } }}
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

        <TextField
          required
          style={{ margin: "auto", width: "50%" }}
          label="Enter Password"
          type="password"
          name="password"
          onChange={(e) => value.handleChange1(e)}
          value={value.userData.password}
          InputLabelProps={{ style: { color: "white", fontWeight: "bold" } }}
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
        <TextField
          required
          style={{ margin: "auto", width: "50%" }}
          label="Confirm Password"
          type="password"
          InputLabelProps={{ style: { color: "white", fontWeight: "bold" } }}
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
        <div className={style.buttonGroup}>
        <ButtonGroup
          variant="contained"
          color="error"
          aria-label="text primary button group"
        >
          <Button
            // onClick={() => value.nextPage()}
            type="submit"
            style={{
              margin: "auto",
              border: "1px solid white",
              color: "white",
            }}
          >
            Next
          </Button>
        </ButtonGroup>
        </div>
      </form>
    </>
  );
};

const UserDetail2 = (props) => {
  const value = useContext(LabelContext);
  console.log("value", value);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(value.userData);
          value.nextPage();
        }}
      >
        <div style={{ width: "50%", margin: "auto" }}>
          <FormControl>
            <Typography p={1} variant="h6" fontFamily="Oswald" color="white">
              Select your gender
            </Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="gender"
              value={value.userData.gender}
              label="Age"
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
              onChange={(e) => value.handleChange1(e)}
              sx={{
                color: "white", // Set the selected option text color to white
                fontWeight: "bold", // Set the selected option text font weight to bold
                "& .MuiListItem-root.Mui-selected": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Set the selected option background color
                },
              }}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Prefer not to say"}>Prefer not to say</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField
          label="Enter Your Age"
          type="number"
          style={{ margin: "auto", width: "30%" }}
          fullWidth
          margin="normal"
          required
          name="age"
          onChange={(e) => value.handleChange1(e)}
          value={value.userData.age}
          InputLabelProps={{ style: { color: "white", fontWeight: "bold" } }}
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
        <div style={{ width: "50%", margin: "auto" }}>
          <FormControl>
            <Typography p={1} variant="h6" fontFamily="Oswald" color="white">
              Enter you Date of Birth
            </Typography>
            <TextField
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
              id="date"
              label="Select Date"
              type="date"
              name="dateOfBirth"
              value={value.userData.dateOfBirth}
              onChange={(e) => value.handleChange1(e)}
              InputLabelProps={{
                shrink: true,
                sx: {
                  color: "white", // Set inner text color to white
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white", // Set outline color to white
                  },
                },
              }}
            />
          </FormControl>
        </div>
        <div className={style.buttonGroup}>
        <ButtonGroup
          variant="contained"
          color="error"
          aria-label="text primary button group"
        >
          <Button
            onClick={() => value.prevPage()}
            style={{
              margin: "auto",
              border: "1px solid white",
              color: "white",
              marginRight : "40px"
            }}
          >
            Previous
          </Button>
          <Button
            // onClick={() => value.nextPage()}
            type="submit"
            style={{
              margin: "auto",
              border: "1px solid white",
              color: "white",
            }}
          >
            Next
          </Button>
        </ButtonGroup>
        </div>
      </form>
    </>
  );
};

const UserDetail3 = (props) => {
  const value = useContext(LabelContext);
  console.log("value", value);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(value.userData);
          value.nextPage();
        }}
      >
        <TextField
          label="Enter Your Height(in cm)"
          type="number"
          style={{ margin: "auto", width: "30%" }}
          fullWidth
          margin="normal"
          required
          name="height"
          onChange={(e) => value.handleChange1(e)}
          value={value.userData.height}
          InputLabelProps={{ style: { color: "white", fontWeight: "bold" } }}
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
        <TextField
          label="Enter Your Weight(in kg)"
          type="number"
          style={{ margin: "auto", width: "30%" }}
          fullWidth
          margin="normal"
          required
          name="weight"
          onChange={(e) => value.handleChange1(e)}
          value={value.userData.weight}
          InputLabelProps={{ style: { color: "white", fontWeight: "bold" } }}
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
        {/* <div> */}
        <ButtonGroup
        sx={{ marginTop : "160px" }}
          variant="contained"
          color="error"
          aria-label="text primary button group"
        >
          <Button
            onClick={() => value.prevPage()}
            style={{
              margin: "auto",
              border: "1px solid white",
              color: "white",
            }}
          >
            Previous
          </Button>
          <Button
            // onClick={() => value.nextPage()}
            type="submit"
            style={{
              margin: "auto",
              border: "1px solid white",
              color: "white",
            }}
          >
            Next
          </Button>
        </ButtonGroup>
        {/* </div> */}
      </form>
    </>
  );
};

const UserDetail4 = (props) => {
  const value = useContext(LabelContext);
  console.log("value", value);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    "Weight loss",
    "Flexibility",
    "Strength training",
    "Muscle gain",
    "Cardiovascular fitness improvement",
    "Cardio",
  ];

  const handleOptionsChange = (event, newValue) => {
    setSelectedOptions(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the selected options as needed, e.g., submit to API or store in state
    console.log("Selected options:", selectedOptions);
    value.handleFitness(selectedOptions); // Assuming you have a function in LabelContext to handle fitness data
    value.nextPage(); // Proceed to the next page
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Autocomplete
        sx={{ widht : '60%' }}
          multiple
          id="multi-select"
          options={options}
          onChange={handleOptionsChange}
          value={selectedOptions}
          renderInput={(params) => (
            <TextField
      {...params}
      label="Select Options"
      sx={{ backgroundColor: "white" }} // Add the background color here
    />
          )}
        />
        <ButtonGroup
        sx={{ marginTop : "240px" }}
          variant="contained"
          color="error"
          aria-label="text primary button group"
        >
          <Button
            onClick={() => value.prevPage()}
            style={{
              margin: "auto",
              border: "1px solid white",
              color: "white",
            }}
          >
            Previous
          </Button>
          <Button
            type="submit"
            style={{
              margin: "auto",
              border: "1px solid white",
              color: "white",
            }}
          >
            Next
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
};

const PostData = ({handleToggle}) => {
  console.log( "props" ,handleToggle)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { userData, handleReset, handleAuth, handlePageReset } = useContext(LabelContext);
  let postData = {
    name: userData.name,
    email: userData.email,
    password: userData.password,
    gender: userData.gender,
    height: userData.height,
    dateOfBirth: userData.dateOfBirth,
    age: userData.age,
    weight: userData.weight,
    fitness: userData.fitness,
  };


  function postingData() {
    if (
      userData.name === "" ||
      userData.email === "" ||
      userData.password === ""
    ) {
      return;
    }
    axios
      .post(`https://healthfitness.onrender.com/clients`, postData)
      .then((res) => {
        setLoading(false);
        setTimeout(() => {
          handleAuth()
          handleReset()
        }, 3000)
        console.log("success", res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }

  function checkEmail(mailId) {
    axios.get(`https://healthfitness.onrender.com/clients?email_like=${mailId}`).then((res) => {
      console.log(res.data)
      // setCheck(res.data)
      console.log(res.data.length)
      if(res.data.length !== 0 ) {
        handlePageReset();
        handleToggle()
      } else {
        postingData();
      }
    })
    
  }

  useEffect(() => {
    setLoading(true);
    checkEmail(userData.email)
  }, []);

  console.log(userData);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h1>Something went wrong...</h1>;
  }

  return (
    <>
    <div
      style={{
        display: "flex",
        flexDirection : 'column',
        justifyContent: "center",
        alignItem: "center",
        textAlign : 'center'
      }}
    >
      <lord-icon
        src="https://cdn.lordicon.com/wibomifa.json"
        trigger="loop"
        colors="primary:#ffffff,secondary:#db2a24"
        style={{ width: "250px", height: "250px", margin: "auto" }}
      ></lord-icon>
      <Typography variant='h6'>Redirecting you to Signup page...</Typography>
    </div>
    </>
  );
};
