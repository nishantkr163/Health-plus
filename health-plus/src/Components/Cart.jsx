import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { LabelContext } from "../labelDataContext";
import { Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import InputField from "./InputField";
import { styled } from "styled-components";

const Cart = () => {
  const value = useContext(LabelContext);
  console.log(value);
  const [data, setData] = useState(value.tcart);
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);
  const myData = JSON.parse(localStorage.getItem("myAcc"));
  function incCount(id) {
    const pri = value.tcart.filter((ele) => {
      if (ele.id === id) {
        return +ele.price;
      }
    });
    console.log(pri, "price");
    let added = Number(pri[0].price);
    console.log(added);
    const updated = data.map((ele) => {
      if (ele.id === id) {
        return {
          ...ele,
          price: +ele.price + added,
        };
      } else {
        return ele;
      }
    });
    setData(updated);
  }

  function decCount(id) {
    const pri = value.tcart.filter((ele) => {
      if (ele.id === id) {
        return +ele.price;
      }
    });
    console.log(pri, "price");
    let added = Number(pri[0].price);
    console.log(added);
    const updated = data.map((ele) => {
      if (ele.id === id) {
        return {
          ...ele,
          price: +ele.price - added,
        };
      } else {
        return ele;
      }
    });
    setData(updated);
  }

  useEffect(() => {
    const totalSum = data.reduce((acc, item) => acc + +item.price, 0);
    setTotal(totalSum);
  }, [data]);

  console.log("dat", data);

  return (
    <>
      <div className={style.mainDiv}>
        {/* <button onClick={() => value.handleCart()} className={style.cross}>
        <CloseIcon />
      </button> */}
      </div>
      <div className={style.mainCart}>
        {/* <div className={style.dataCart}>
          {data.length > 0 &&
            data.map((ele) => (
              <div style={{ margin : "20px 0" }} key={ele.id}>
                <div className="card">
                  <div className="card-img">
                    <img
                      className="cardImage"
                      src={ele.image}
                      alt={ele.title}
                    />
                  </div>
                  <div className="card-title">{ele.title}</div>
                  <div className="card-subtitle">{ele.category}</div>
                  <div className="card-divider"></div>
                  <div className="card-footer">
                    <div className="card-price">Price: ${ele.price}</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      fontWeight="bold"
                      fontFamily="Oswald"
                      variant="p"
                    >
                      No. of Items:
                    </Typography>
                    <button
                      style={{
                        width: "20%",
                        color: "#DB2A24",
                        fontWeight: "bold",
                        padding: "1px",
                      }}
                      onClick={() => decCount(ele.id)}
                    >
                      <RemoveIcon />
                    </button>{" "}
                    <p>{count}</p>{" "}
                    <button
                      style={{
                        width: "20%",
                        color: "green",
                        fontWeight: "bold",
                        padding: "1px",
                      }}
                      onClick={() => incCount(ele.id)}
                    >
                      <AddIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div> */}
        <DIV>
          <div className="small-container cart-page">
            <table>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
              {data.length > 0 &&
                data.map((ele) => (
                  <tr key={ele.id}>
                    <td>
                      <div className="cart-info">
                        <img src={ele.image} alt={ele.title} />
                        <div>
                          <p>{ele.title}</p>
                          <small>Price ${ele.price}</small>
                          <br />
                          <a>Remove</a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <input type="number" value="1" />
                    </td>
                    <td>${ele.price}</td>
                  </tr>
                ))}
              {/* <tr>
                <td>
                  <div class="cart-info">
                    <img src="https://i.ibb.co/B3vYjvw/buy-1.jpg" alt="" />
                    <div>
                      <p>Red Printed T-Shirt</p>
                      <small>Price ₹500.00</small>
                      <br />
                      <a href="#">Remove</a>
                    </div>
                  </div>
                </td>
                <td>
                  <input type="number" value="1" />
                </td>
                <td>₹500.00</td>
              </tr>
              <tr>
                <td>
                  <div class="cart-info">
                    <img src="https://i.ibb.co/qmSHWx7/buy-2.jpg" alt="" />
                    <div>
                      <p>HRX Shoes</p>
                      <small>Price ₹1500.00</small>
                      <br />
                      <a href="#">Remove</a>
                    </div>
                  </div>
                </td>
                <td>
                  <input type="number" value="1" />
                </td>
                <td>₹1500.00</td>
              </tr>
              <tr>
                <td>
                  <div class="cart-info">
                    <img src="https://i.ibb.co/NyYtY31/buy-3.jpg" alt="" />
                    <div>
                      <p>Reebok Tracksuit</p>
                      <small>Price ₹1500.00</small>
                      <br />
                      <a href="#">Remove</a>
                    </div>
                  </div>
                </td>
                <td>
                  <input type="number" value="1" />
                </td>
                <td>₹1500.00</td>
              </tr> */}
            </table>
            {data.length > 0 && (
              <div className="total-price">
                <table>
                  <tr>
                    <td>Subtotal</td>
                    <td>₹3500.00</td>
                  </tr>
                  <tr>
                    <td>Tax</td>
                    <td>₹15.00</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>₹3515.00</td>
                  </tr>
                </table>
              </div>
            )}
          </div>
        </DIV>

        {/* <div className={style.total}>
        <Typography
        fontWeight="bold"
        fontFamily="Oswald"
        color="#DB2A24"
        variant="h5"
      >
        Hi <span style={{ color : 'black' }}>{myData[0].name}</span>, Your Cart Total :- <span>${total}</span>
      </Typography>
        <div>
            <InputField />
        </div>
        </div> */}
      </div>
    </>
  );
};

export default Cart;

const DIV = styled.div`

  margin-top: -140px;

  .small-container {
    max-width: 1080px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
  }

  .col-4 {
    flex-basis: 25%;
    padding: 10px;
    min-width: 200px;
    margin-bottom: 50px;
    transition: transform 0.5s;
  }

  .col-4 img {
    width: 100%;
  }

  .title {
    text-align: center;
    margin: 0 auto 80px;
    position: relative;
    line-height: 60px;
    color: #555;
  }
  .title::after {
    content: "";
    background: rgb(219,42,36);
    width: 80px;
    height: 5px;
    border-radius: 5px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
  }

  h4 {
    color: #555;
    font-weight: normal;
  }

  .col-4 p {
    font-size: 14px;
  }

  .rating .fas {
    color: rgb(219,42,36);
  }

  .rating .far {
    color: rgb(219,42,36);
  }

  .col-4:hover {
    transform: translateY(-5px);
  }

  /* Offer */

  .offer {
    background: radial-gradient(#fff, #ffd6d6);
    margin-top: 80px;
    padding: 30px 0;
  }

  .col-2 .offer-img {
    padding: 50px;
  }

  small {
    color: #555;
  }

  /* testimonial */

  .testimonial {
    padding-top: 100px;
  }

  .testimonial .col-3 {
    text-align: center;
    padding: 40px 20px;
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.5s;
  }

  .testimonial .col-3 img {
    width: 100px;
    margin-top: 20px;
    border-radius: 50%;
  }

  .testimonial .col-3:hover {
    transform: translateY(-10px);
  }

  .fa-quote-left {
    font-size: 34px;
    color: rgb(219,42,36);
  }

  .col-3 p {
    font-size: 14px;
    margin: 12px 0;
    color: #777777;
  }

  .testimonial .col-3 h3 {
    font-weight: 600;
    color: #555;
    font-size: 16px;
  }

  .brands {
    margin: 100px auto;
  }

  .col-5 {
    width: 160px;
  }

  .col-5 img {
    width: 100%;
    cursor: pointer;
    filter: grayscale(100%);
  }

  .col-5 img:hover {
    width: 100%;
    cursor: pointer;
    filter: grayscale(0);
  }

  /* footer */

  .footer {
    background: #000;
    color: #8a8a8a;
    font-size: 14px;
    padding: 60px 0 20px;
  }

  .footer p {
    color: #8a8a8a;
  }

  .footer h3 {
    color: #ffffff;
    margin-bottom: 20px;
  }

  .footer-col-1,
  .footer-col-2,
  .footer-col-3,
  .footer-col-4 {
    min-width: 250px;
    margin-bottom: 20px;
  }

  .footer-col-1 {
    flex-basis: 30%;
  }

  .footer-col-2 {
    flex: 1;
    text-align: center;
  }

  .footer-col-2 img {
    width: 180px;
    margin-bottom: 20px;
  }

  .footer-col-3,
  .footer-col-4 {
    flex-basis: 12%;
    text-align: center;
  }

  ul {
    list-style-type: none;
  }

  .app-logo {
    margin-top: 20px;
  }
  .app-logo img {
    width: 140px;
  }

  .footer hr {
    border: none;
    background: #b5b5b5;
    height: 1px;
    margin: 20px 0;
  }

  .copyright {
    text-align: center;
  }

  .menu-icon {
    width: 28px;
    margin-left: 20px;
    display: none;
  }

  /* media query for menu */

  @media only screen and (max-width: 800px) {
    nav ul {
      position: absolute;
      top: 70px;
      left: 0;
      background: #333;
      width: 100%;
      overflow: hidden;
      transition: max-height 0.5s;
    }
    nav ul li {
      display: block;
      margin-right: 50px;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    nav ul li a {
      color: #fff;
    }
    .menu-icon {
      display: block;
      cursor: pointer;
    }
  }

  /* all products page */

  .row-2 {
    justify-content: space-between;
    margin: 100px auto 50px;
  }

  select {
    border: 1px solid #ff523b;
    padding: 5px;
  }

  select:focus {
    outline: none;
  }

  .page-btn {
    margin: 0 auto 80px;
  }

  .page-btn span {
    display: inline-block;
    border: 1px solid #ff523b;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }

  .page-btn span:hover {
    background: rgb(219,42,36);
    color: #ffffff;
  }

  /* single product details */

  .single-product {
    margin-top: 80px;
  }

  .single-product .col-2 img {
    padding: 0;
  }

  .single-product .col-2 {
    padding: 20px;
  }

  .single-product h4 {
    margin: 20px 0;
    font-size: 22px;
    font-weight: bold;
  }

  .single-product select {
    display: block;
    padding: 10px;
    margin-top: 20px;
  }

  .single-product input {
    width: 50px;
    height: 40px;
    padding-left: 10px;
    font-size: 20px;
    margin-right: 10px;
    border: 1px solid rgb(219,42,36);
  }

  input:focus {
    outline: none;
  }

  .single-product .fas {
    color: rgb(219,42,36);
    margin-left: 10px;
  }

  .small-img-row {
    display: flex;
    justify-content: space-between;
  }

  .small-img-col {
    flex-basis: 24%;
    cursor: pointer;
  }

  /* cart items */

  .cart-page {
    margin: 90px auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  .cart-info {
    display: flex;
    flex-wrap: wrap;
  }

  th {
    text-align: left;
    padding: 5px;
    color: #ffffff;
    background: #ff523b;
    font-weight: normal;
  }
  td {
    padding: 10px 5px;
  }

  td input {
    width: 40px;
    height: 30px;
    padding: 5px;
  }

  td a {
    color: rgb(219,42,36);
    font-size: 12px;
  }

  td img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }

  .total-price {
    display: flex;
    justify-content: flex-end;
  }

  .total-price table {
    border-top: 3px solid rgb(219,42,36);
    width: 100%;
    max-width: 400px;
  }

  td:last-child {
    text-align: right;
  }

  th:last-child {
    text-align: right;
  }

  /* media query for less than 600 screen size */

  @media only screen and (max-width: 600px) {
    .row {
      text-align: center;
    }
    .col-2,
    .col-3,
    .col-4 {
      flex-basis: 100%;
    }

    .single-product .row {
      text-align: left;
    }

    .single-product .col-2 {
      padding: 20px 0;
    }
    .single-product h1 {
      font-size: 26px;
      line-height: 32px;
    }
    .cart-info p {
      display: none;
    }
  }
`;

// {
//     "id": 24,
//     "image": "https://contents.mediadecathlon.com/p2201854/a8f48801ca4ce6dc42882b2bd8505024/p2201854.jpg?format=auto&quality=70&f=1024x0",
//     "title": "Protein Drinking Bottle - 32oz",
//     "price": "12",
//     "rating": "4.2",
//     "totalRating": "126",
//     "category": "Gym Equipment",
//     "description": "Stay hydrated and refuel with this 32oz protein drinking bottle. Convenient shaker ball for smooth mixing of protein shakes.",
// }
