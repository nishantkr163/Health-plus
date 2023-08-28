import React, { useState, createContext } from "react";

export const LabelContext = createContext();

const initData = {
  name: "testUser1",
  email: "test1@gmail.com",
  password: "1234",
  gender: "",
  age: "22",
  dateOfBirth: "",
  height: "168",
  weight: "66",
  fitness: []
}



export const LabelProvider = (props) => {
  const [page, setPage] = useState(0);
  const [userData, setUserData] = useState(initData);
  const [isAuth, setIsAuth] = useState(false)
  const [logged, setLogged] = useState(false)
  const [prof, setProf] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [cart, setCart] = useState(false)
  const [tcart, setTCart] = useState([])
  const handleAdmin = () => {
    setIsAdmin(!isAdmin)
  }

  const handleTCart = (ele) => {
    const updatedCart = [...tcart, ele];
    setTCart(updatedCart);
  }

//   <div
//   style={{
//     display: "flex",
//     justifyContent: "space-around",
//     alignItems: "center",
//   }}
// >
//   <Typography fontWeight="bold" fontFamily="Oswald" variant="h5">
//     No. of Items:
//   </Typography>
//   <button
//     style={{ width: "20%", color: "#DB2A24", fontWeight: "bold" }}
//     onClick={() => setCount(count - 1)}
//   >
//     <RemoveIcon />
//   </button>{" "}
//   <p>{count}</p>{" "}
//   <button
//     style={{ width: "20%", color: "green", fontWeight: "bold" }}
//     onClick={() => setCount(count + 1)}
//   >
//     <AddIcon />
//   </button>
// </div>

  const handleProf = () => {
    setProf(!prof)
  }

  const handleCart = () => {
    setCart(!cart)
  }

  const handleLogged = () => {
    setLogged(!logged)
  }

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
      gender: "",
      age: "",
      dateOfBirth: "",
      height: "",
      weight: "",
      fitness: []
    })
  }

  const handlePageReset = () => {
    setPage(0);
  }

  const handleFitness = (val) => {
    setUserData({
      ...userData,
      fitness: val
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
        handleReset,
        handlePageReset,
        handleLogged,
        logged,
        handleProf,
        prof,
        handleAdmin,
        isAdmin,
        handleCart,
        cart,
        handleTCart,
        tcart
      }}
    >
      {props.children}
    </LabelContext.Provider>
  );
};


