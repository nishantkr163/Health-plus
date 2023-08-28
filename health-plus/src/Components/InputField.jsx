import React from 'react'
import { TextField, Button } from "@mui/material";
const InputField = () => {

    const inputStyle = {
        border: "2.5px solid black",
        borderRadius: "4px", // Optional: Add rounded corners
        marginBottom: "16px", // Optional: Add spacing between fields
      };
    

  return (
    <div>
      <TextField
        label="Area PIN"
        type="number"
        fullWidth
        margin="normal"
        style={inputStyle}
      />
      <TextField
        label="House/Flat no."
        fullWidth
        margin="normal"
        style={inputStyle}
      />
      <TextField
        label="Road no."
        fullWidth
        margin="normal"
        style={inputStyle}
      />
      <TextField
        label="Locality"
        fullWidth
        margin="normal"
        style={inputStyle}
      />
      <TextField
        label="City/Town"
        fullWidth
        margin="normal"
        style={inputStyle}
      />
      <TextField
        label="State"
        fullWidth
        margin="normal"
        style={inputStyle}
      />
      <Button variant="contained" color="primary" style={inputStyle}>
        Submit
      </Button>
    </div>
  )
}

export default InputField