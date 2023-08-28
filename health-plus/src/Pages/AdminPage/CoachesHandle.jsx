import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import style from './CoachesHandle.module.css'
import AdminLoading from "./AdminLoading";

const CoachesHandle = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(`https://healthfitness.onrender.com/coaches`).then((res) => {
      setData(res.data);
      console.log(res.data);
      setLoading(false)
    }).catch((err) => {
      setLoading(false)
      alert(`Something went wrong while fetching data...`)
    })
  }, []);

  if(loading) {
    return <AdminLoading />
  }

  return (
    <div className={style.mainDiv} >
      {data.length > 0 &&
        data.map((ele) => (
          <div className={style.cards}>
              <img width={"70%"} src={ele.image} alt="" />
              <p>
                <h2 style={{ color : '#DB2A24' }} >Name: {ele.name}</h2>
                <h3>My Area of Expertises are {ele.expertise[0]} and {ele.expertise[1]}</h3>
                <h3>Email: {ele.email}</h3>
                <h3>Age: {ele.age}</h3>
                <h3>Experience: {ele.experience}</h3>
                <p>Specializations : {ele.specializations}</p>
                <p>Approach: {ele.approach}</p>
                <h3 style={{ textDecoration : 'underline' }} >Avaibility: {ele.availability}</h3>
                <h3 style={{ textDecoration : 'underline' }} >Contacts</h3>

                <ul style={{ display : 'flex', flexDirection : 'column', justifyContent : 'center', margin : 'auto' }}>
                    <p>EmailId: {ele.contact.email}</p>
                    <p>Phone: {ele.contact.phone}</p>
                    <p>Website: {ele.contact.website}</p>
                </ul>
              </p>
              <div>
                <button style={{ margin : "20px", color : "white", backgroundColor : "green" }}>EDIT</button>
                <button style={{ margin : "20px", color : "white", backgroundColor : "#DB2A24" }}>DELETE</button>
              </div>

          </div>
        ))}
    </div>
  );
};

export default CoachesHandle;
