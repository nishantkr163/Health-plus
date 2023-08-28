import style from "./Coaches.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Loading from "./Loading";

const Coaches = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(`https://healthfitness.onrender.com/coaches?_limit=3`).then((res) => {
      console.log(res.data);
      setData(res.data);
      setLoading(false)
    });
  }, []);

  if(loading) {
    return <Loading />
  }

  return (
    <div className={style.mainDiv}>
      <br />
      <br />
      <div className={style.coaches}>
        {data.length > 0 &&
          data.map((ele) => (
            <div className={style.cards} key={ele.id}>
              <img width="100%" src={ele.image} alt={ele.name} />
              <h2>Name: {ele.name}</h2>
              <p>
                {" "}
                <DoneAllIcon color="green" /> {ele.experience} years of hands-on
                expertise.
              </p>
              <h4>"{ele.approach}"</h4>
              <h3>
                Expertise:- <FitnessCenterIcon />{" "}
              </h3>
              {ele.expertise.map((e, i) => (
                <p key={ele.name + ele.id + Date.now()}>{`${i + 1} ${e}`}</p>
              ))}
              <p style={{ color : '#DB2A24' }} > <PhoneIcon /> Contact: {ele.contact.phone}</p>
              <p style={{ color : '#DB2A24' }} > <EmailIcon /> Email: {ele.contact.email}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Coaches;

// {
//   "id": 1,
//   "name": "Jessica Anderson",
//   "email": "jessica@gmail.com",
//   "password": "jessica123",
//   "image": "https://images.unsplash.com/photo-1571019613531-fbeaeb790845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
//   "expertise": [
//       "Cardiovascular fitness improvement",
//       "Muscle gain"
//   ],
//   "gender": "Female",
//   "age": 32,
//   "experience": "8 years",
//   "specializations": "Weight management, Nutrition counseling, Lifestyle modification",
//   "approach": "Holistic approach to health, focusing on balanced nutrition and personalized fitness plans",
//   "languages": [
//       "English",
//       "Spanish"
//   ],
//   "availability": "Weekdays, mornings and evenings",
//   "contact": {
//       "email": "jessica.anderson@gmail.com",
//       "phone": "+1 (555) 123-4567",
//       "website": "www.jessicahealthcoach.com"
//   }
// }
