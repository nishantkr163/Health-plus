import { Avatar, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import style from "./ProductsDetails.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Footer from "../Components/Footer.jsx";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import { LabelContext } from "../labelDataContext";

const ProductsDetails = () => {
  const val = useParams();
  const value = useContext(LabelContext)
  const [rev, setRev] = useState("");
  console.log(val.id);
  const [data, setData] = useState({});
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const currentDate = new Date();

  const twoDaysAfter = new Date(currentDate);
  twoDaysAfter.setDate(currentDate.getDate() + 2);

  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = twoDaysAfter.toLocaleDateString("en-US", options);

  const myData = JSON.parse(localStorage.getItem("myAcc"));
  console.log("local", myData);

  function handleCartAdd(data) {
    setCount(1)
    value.handleTCart(data)
  }

  function handleIncLike() {
    console.log();
  }

  function handlePost() {
    console.log(rev);
    let existing = data.reviews;
    const newRev = {
      name: myData[0].name,
      comment: rev,
      likes: 0,
      dislikes: 0,
    };
    existing.push(newRev);
    console.log(existing);
    // setFlag(!flag)
    // console.log("new comment",newRev)
    axios
      .patch(`https://healthfitness.onrender.com/products/${val.id}`, {
        reviews: existing,
      })
      .then((res) => {
        setFlag(!flag);
      });
  }

  console.log(formattedDate);
  useEffect(() => {
    axios
      .get(`https://healthfitness.onrender.com/products/${val.id}`)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.reviews);
        setData(res.data);
      });
  }, [flag]);

  console.log(data.reviews);
  console.log(data.name);

  return (
    <>
      <div className={style.mainDiv}></div>
      <div className="container-fluid" >
      <div className={`${style.mainProd} row`}>
        <div className={`${style.imageDiv} col-lg-6`} >
          <img className={style.prodImage} src={data.image} alt={data.title} />
        </div>
        <div
        className="col-lg-6"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="h3" fontFamily="Oswald">
            {data.title}
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <StarIcon sx={{ color: "yellow" }} /> {data.rating}/5 (
            {data.totalRating}){" "}
          </div>
          <Typography variant="h6" fontFamily="Oswald">
            Price ${data.price}
          </Typography>
          {count === 0 ? (
            <button onClick={() => handleCartAdd(data)}>Add to Cart</button>
          ) : (
            <div style={{
              display : 'flex',
              justifyContent : 'space-between',
              alignItems : 'center'
            }} >
              <button style={{ width : '50%' }} disabled="true">Added to cart</button>
              <button style={{
                display : 'flex',
                justifyContent : 'center',
                alignItems : 'center'
              }} onClick={()=> setCount(0)}><DeleteIcon sx={{ color : "#DB2A24" }} /></button>
            </div>
          )}
          <br />
          <TextField
            sx={{ height: "35px", borderRadius: "30px" }}
            id="outlined-basic"
            label="Check Avaibility in your Area (PIN)"
            variant="outlined"
            InputProps={{
              sx: {
                "& fieldset": {
                  borderColor: "black", // Set border color to black
                },
                "&:hover fieldset": {
                  borderColor: "black", // Set border color on hover to black
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black", // Set border color on focus to black
                },
              },
            }}
            InputLabelProps={{
              style: {
                color: "black", // Set label color to black
              },
            }}
          />{" "}
          <br />
          <br />
          <Typography variant="h6" fontFamily="Oswald">
            Description: {data.description}
          </Typography>
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid grey",
            }}
          >
            <lord-icon
              src="https://cdn.lordicon.com/iejknaed.json"
              trigger="loop"
              delay=""
              colors="outline:#121331,primary:#3a3347,secondary:#ffc738,tertiary:#ebe6ef,quaternary:#646e78"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>{" "}
            <Typography fontFamily="Oswald" variant="p">
              Free Home Delivery before {formattedDate}
            </Typography>
          </div>
        </div>
      </div>  
      </div>
      <div className={style.prodReviewDiv}>
        <div className={style.prodReview}>
          <Typography
            sx={{
              paddingBottom: "20px",
            }}
            fontWeight="bold"
            fontFamily="Oswald"
            color="black"
            variant="h4"
          >
            Product Reviews
          </Typography>
          <div>
            {data?.reviews?.length > 0 &&
              data.reviews.map((ele) => (
                <div
                  style={{ marginBottom: "10px" }}
                  key={ele.name + Date.now()}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <Avatar sx={{ bgcolor: "grey" }}>{ele.name[0]}</Avatar>
                    <div>
                      <Typography
                        fontWeight="bold"
                        fontFamily="Oswald"
                        variant="h6"
                      >
                        {ele.name}
                      </Typography>
                      <div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <CommentIcon />{" "}
                          <Typography fontWeight="bold">
                            {ele.comment}
                          </Typography>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: "20px",
                            marginTop: "10px",
                          }}
                        >
                          <p
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                            }}
                          >
                            {" "}
                            <ThumbUpIcon
                              onClick={() => {
                                handleIncLike();
                              }}
                            />{" "}
                            {ele.likes}{" "}
                          </p>
                          <p
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                            }}
                          >
                            {" "}
                            <ThumbDownIcon />
                            {ele.dislikes}{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/* <form action=""> */}
          <h3>Write a review:</h3>
          <br />
          <textarea
            placeholder="About the product..."
            rows="4"
            onChange={(e) => {
              setRev(e.target.value);
            }}
            style={{
              border: "2.5px solid black",
              marginBottom: "10px",
              padding: "10px",
              width: "80%"
            }}
          ></textarea>
          <br />
          <button
            onClick={() => {
              handlePost();
            }}
          >
            Submit Review
          </button>
          {/* </form> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsDetails;
