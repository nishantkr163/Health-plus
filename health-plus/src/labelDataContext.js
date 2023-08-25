import React, { useState, createContext } from "react";

export const LabelContext = createContext();

const initData = {
    name: "",
    email: "",
    password: "",
    gender : "",
    age : "",
    dateOfBirth: "",
    height : "",
    weight : "",
    fitness : []
}


export const LabelProvider = (props) => {
  const [page, setPage] = useState(0);
  const [userData, setUserData] = useState(initData);
  const [isAuth, setIsAuth] = useState(false) 

  const handleAuth = () => {
    setIsAuth(!isAuth)
  }
  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };
  console.log(page, "page");

  const handleChange1 = (e) => {
    setUserData({
        ...userData,
        [e.target.name]: e.target.value,
    });
  }

  const handleReset = () => {
    setUserData({
      name: "",
      email: "",
      password: "",
      gender : "",
      age : "",
      dateOfBirth: "",
      height : "",
      weight : "",
      fitness : []
  })
  }

  const handleFitness = (val) => {
    setUserData({
      ...userData,
      fitness : val
    })
  }

  const steps = [
    { title: "Basic Details" },
    { title: "More Details" },
    { title: "Physical Details" },
    { title: "Your Fitness Goal" },
    { title: "Confirm" }
  ];

  return (
    <LabelContext.Provider
      value={{
        page,
        steps,
        nextPage,
        prevPage,
        userData,
        handleChange1,
        handleFitness,
        handleAuth,
        isAuth,
        handleReset
      }}
    >
      {props.children}
    </LabelContext.Provider>
  );
};


