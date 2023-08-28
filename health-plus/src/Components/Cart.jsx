import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { LabelContext } from "../labelDataContext";
import { Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import InputField from "./InputField";

const Cart = () => {
  const value = useContext(LabelContext);
  console.log(value);
  const [data, setData] = useState(value.tcart);
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0)
  const myData = JSON.parse(localStorage.getItem("myAcc"))
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
    setTotal(totalSum)
  }, [data]);

  console.log("dat",data);

  return (
    <div className={style.mainDiv}>
      <button onClick={() => value.handleCart()} className={style.cross}>
        <CloseIcon /> CLOSE
      </button>
      <div className={style.mainCart}>
        <div className={style.dataCart}>
          {data.length > 0 &&
            data.map((ele) => (
              <div key={ele.id}>
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
        </div>
        <div className={style.total}>
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
        </div>
      </div>
    </div>
  );
};

export default Cart;

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
