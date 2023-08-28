import React from "react";
import logo from "../AdminPage/Logo.png";
import style from "./Admin.module.css";
import { useState } from "react";
import Users from "./Users";
import ProductsHandle from "./ProductsHandle";
import CoachesHandle from "./CoachesHandle";
import { useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';

const Admin = () => {
  const [layout, setLayout] = useState("user");
  const usenav = useNavigate()
  return (
    <div className={style.totalContent}>
      <div className={style.mainNav}>
        <img style={{ padding: "10px" }} width={"100%"} src={logo} alt="Logo" />
        <div>
          <button
            onClick={() => {
              setLayout("user");
            }}
          >
            USERS
          </button>
          <br />
          <br />
          <br />
          <button
            onClick={() => {
              setLayout("products");
            }}
          >
            PRODUCTS
          </button>
          <br />
          <br />
          <br />
          <button
            onClick={() => {
              setLayout("coaches");
            }}
          >
            COACHES
          </button>
          <br />
          <br />
          <br />
          <button 
          style={{
            display : 'flex',
            alignItems : 'center'
          }}
          onClick={()=> {
            usenav('/')
          }} > <LogoutIcon /> LOG OUT</button> 
        </div>
      </div>
      <div className={style.mounted}>
        {layout === "user" ? (
          <Users />
        ) : layout === "products" ? (
          <ProductsHandle />
        ) : layout === "coaches" ? (
          <CoachesHandle />
        ) : null}
      </div>
    </div>
  );
};

export default Admin;
