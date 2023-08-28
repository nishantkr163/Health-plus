import React, { useEffect } from 'react'
import style from './EditModal.module.css'
import { useState } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, ListItemText, Button, Typography } from '@mui/material';
import axios from 'axios';

const options = [
  "Weight loss",
  "Flexibility",
  "Strength training",
  "Muscle gain",
  "Cardiovascular fitness improvement",
  "Cardio",
];
const EditModal = (props) => {
    console.log(props.value)
    console.log(props.handleModal)
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [coachName, setCoachName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Gender:', gender);
    console.log('Age:', age);
    console.log('Height:', height);
    console.log('Weight:', weight);
    console.log('Selected Goals:', selectedGoals);
    console.log('Coach Name:', coachName);
    handlePatch(props.value.id)
  };
  const newData = {
  "name": name,
  "email": email,
  "gender": gender,
  "age": age,
  "height": height,
  "weight": weight,
  "fitnessGoal": selectedGoals,
  "CoachName": coachName,
  }
  function handlePatch(key) {
    console.log(key)
    axios.patch(`https://healthfitness.onrender.com/clients/${key}`,newData ).then((res) => {
        console.log(res.data)
        props.handleModal();
        props.handleFlag()
    })
  }

  useEffect(() => {
    setName(props.value.name)
    setEmail(props.value.email)
    setGender(props.value.gender)
    setAge(props.value.age)
    setHeight(props.value.height)
    setWeight(props.value.weight)
  }, [])

  
  return (
    <div className={style.mainDiv} >
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
  <TextField
    label="Name"
    value={name}
    defaultValue={props.value.name}
    onChange={(e) => setName(e.target.value)}
    fullWidth
    sx={{ borderBottom: '2.5px solid black' }}
  />
  <TextField
    label="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    fullWidth
    sx={{ borderBottom: '2.5px solid black' }}
  />
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <FormControl sx={{ width: '45%' }}>
      <InputLabel>Gender</InputLabel>
      <Select value={gender} onChange={(e) => setGender(e.target.value)}>
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Female">Female</MenuItem>
        <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
      </Select>
    </FormControl>
    <TextField
      sx={{ width: '45%', borderBottom: '2.5px solid black' }}
      type="number"
      label="Age"
      value={age}
      onChange={(e) => setAge(e.target.value)}
    />
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <TextField
      sx={{ width: '45%', borderBottom: '2.5px solid black' }}
      type="number"
      label="Height (in cm)"
      value={height}
      onChange={(e) => setHeight(e.target.value)}
    />
    <TextField
      sx={{ width: '45%', borderBottom: '2.5px solid black' }}
      type="number"
      label="Weight (in kg)"
      value={weight}
      onChange={(e) => setWeight(e.target.value)}
    />
  </div>
  <FormControl fullWidth>
    <InputLabel>Goals</InputLabel>
    <Select
      required
      multiple
      value={selectedGoals}
      onChange={(e) => setSelectedGoals(e.target.value)}
      renderValue={(selected) => selected.join(', ')}
      sx={{ borderBottom: '2.5px solid black' }}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          <Checkbox checked={selectedGoals.indexOf(option) > -1} />
          <ListItemText primary={option} />
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  <FormControl fullWidth>
    <InputLabel>Coach Name</InputLabel>
    <Select
      required
      value={coachName}
      onChange={(e) => setCoachName(e.target.value)}
      sx={{ borderBottom: '2.5px solid black' }}
    >
      <MenuItem value="David Thompson">David Thompson</MenuItem>
      <MenuItem value="Michael Roberts">Michael Roberts</MenuItem>
      <MenuItem value="Sarah Johnson">Sarah Johnson</MenuItem>
      <MenuItem value="Jessica Anderson">Jessica Anderson</MenuItem>
      <MenuItem value="Alex Williams">Alex Williams</MenuItem>
      <MenuItem value="Emily Martinez">Emily Martinez</MenuItem>
    </Select>
  </FormControl>
 <div style={{ textAlign : 'center' }}>
 <button 
//  onClick={()=> {
//     handlePatch(props.value.id)
//  }} 
 type="submit" variant="contained" color="primary" sx={{ marginTop: '10px', marginBottom : "20px" }}>
    Apply
  </button> <button onClick={props.handleModal} style={{ color : 'white' , backgroundColor : '#DB2A24' }}>Cancel</button>
 </div>
</form>
    </div>
  )
}

export default EditModal