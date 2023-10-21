import React, { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import Loading from "../Components/Loading";
import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import ProductsDetails from "../Components/ProductsDetails";
import { LabelContext } from "../labelDataContext";
import { Navigate, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Footer from "../Components/Footer";

export const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [sort, setSort] = useState("")
  const value = useContext(LabelContext)
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ["Gym Equipment", "Sports Equipment", "Health Supplements"];
  const useNav = useNavigate()
  const handleOptionsChange = (event, newValue) => {
    setSelectedOptions(newValue);
  };

  function handleSort() {

  }

  const params = {
    category: selectedOptions,
    _sort: "price", 
    _order: sort,  
  };

  function getData(selectedOptions, input) {
    setLoading(true);
    axios
      .get(`https://healthfitness.onrender.com/products?title_like=${input}`, {
        params,
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert(`something went wrong`);
      });
  }
  
  useEffect(() => {
    
    let timer = setTimeout(() => {
      getData(selectedOptions, input, sort);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [selectedOptions, input, sort]);

  function CartLoading() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
      >
        <div className="spinner-container">
          <div style={{ borderTopColor: "black" }} className="spinner">
            <div style={{ borderTopColor: "black" }} className="spinner">
              <div style={{ borderTopColor: "black" }} className="spinner">
                <div style={{ borderTopColor: "black" }} className="spinner">
                  <div style={{ borderTopColor: "black" }} className="spinner">
                    <div
                      style={{ borderTopColor: "black" }}
                      className="spinner"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  if(!value.isAuth) {
    return <Navigate to='/signup' />
  }

  return (
    <>
    <div
      style={{
        marginTop: "30px",
      }}
    >
      <div>
        <form
          action=""
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Autocomplete
            multiple
            id="multi-select"
            sx={{
              width: "70%",
              border: "2.5px solid black",
              transition: "border-color 0.3s",
            }}
            options={options}
            onChange={handleOptionsChange}
            value={selectedOptions}
            renderInput={(params) => (
              <TextField {...params} label="Select Category/Categories" />
            )}
          />
          <div
            style={{
              width: "70%",
              margin: "auto",
            }}
          >
            <div className="input-container">
              <input
                style={{ margin: "auto" }}
                type="text"
                value={input}
                name="text"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                className="input"
                placeholder="Search..."
              />
              <span className="icon">
                <svg
                  width="19px"
                  height="19px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      opacity="1"
                      d="M14 5H20"
                      stroke="#000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      opacity="1"
                      d="M14 8H17"
                      stroke="#000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
                      stroke="#000"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      opacity="1"
                      d="M22 22L20 20"
                      stroke="#000"
                      stroke-width="3.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </span>
            </div>
            <div
              style={{
                marginTop: "20px",
              }}
            >
              <FormControl fullWidth sx={{ border: "2.5px solid black" }}>
                <InputLabel id="demo-simple-select-label">
                  Sort Products
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  onChange={(e) => {
                    setSort(e.target.value)
                  }}
                  InputProps={{
                    className: "black-text",
                    sx: {
                      "& .MuiOutlinedInput-input": {
                        color: "black",
                        fontWeight: "bold",
                      },
                      "& fieldset": {
                        borderColor: "black",
                      },
                      "&:hover fieldset": {
                        borderColor: "black",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black",
                      },
                    },
                  }}
                >
                  <MenuItem value={"asc"}>Ascending Order</MenuItem>
                  <MenuItem value={"desc"}>Descending Order</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </form>
      </div>
      {loading ? (
        <CartLoading />
      ) : (
        <div className="productCardCont">
          {data.length > 0 &&
            data.map((ele) => <ProductCard key={ele.id} {...ele} />)}
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

