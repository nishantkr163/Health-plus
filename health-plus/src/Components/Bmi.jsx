import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

function BMICalculator() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(75);
  const [bmi, setBMI] = useState(0);
  const [selectedGroup, setSelectedGroup] = useState(1);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);

    const bmiRanges = [
      [0, 18.49],
      [18.5, 24.99],
      [25, 29.99],
      [30, 34.99],
      [35, 39.99],
      [40, 100],
    ];

    const groupIndex = bmiRanges.findIndex(
      (range) => range[0] <= bmiValue && bmiValue <= range[1]
    );
    setSelectedGroup(groupIndex);
  };

  useEffect(() => {
    calculateBMI();
  }, [height, weight]);

  return (
    <DIV>
      <form className="c-bmi">
        <Typography
          m="auto"
          fontWeight="bold"
          className=""
          fontFamily="Oswald"
          color="#DB2A24"
          variant="h3"
        >
          BMI CALCULATOR
        </Typography>
        <label className="c-bmi__label">
          <strong>Height</strong>
          <input
            className="c-bmi__range"
            type="range"
            name="h"
            min="150"
            max="230"
            step="0.5"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <output name="ho">{`${height} cm / ${Math.floor(
            (height * 0.393700787) / 12
          ).toFixed()}' ${((height * 0.393700787) % 12).toFixed()}"`}</output>
        </label>
        <label className="c-bmi__label">
          <strong>Weight</strong>
          <input
            className="c-bmi__range"
            type="range"
            name="w"
            min="35"
            max="200"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <output name="wo">{`${weight} kg / ${(weight * 2.2046).toFixed(
            2
          )} lb`}</output>
        </label>
        <div className="c-bmi__result">
          Your BMI Is: <output name="r">{bmi}</output>
        </div>
        <div className="c-bmi__groups">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div className="bmiDiv" key={index}>
              <input
                type="radio"
                id={`bmi-g${index}`}
                name="g"
                checked={selectedGroup === index}
                onChange={() => setSelectedGroup(index)}
              />
              <label htmlFor={`bmi-g${index}`}>
                {index === 0 ? "Underweight" : `Obese ${index}`}
              </label>
              <div className="c-bmi__group-text">
                {index === 0
                  ? "The WHO regards a BMI of less than 18.5 as underweight and may indicate malnutrition, an eating disorder, or other health problems."
                  : "People who have BMI equal or over 30 may have obesity, which is defined as an abnormal or excessive accumulation of fat that may harm health."}
              </div>
            </div>
          ))}
        </div>
      </form>
    </DIV>
  );
}

export default BMICalculator;

const DIV = styled.div`
  text-align: center;
  margin: 20px 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url("https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80");
  background-size: cover;
  background-position: center;
  color: white;

  .c-bmi {
    background-color: transparent;
    border-radius: 0.25rem;
    box-sizing: border-box;
    font-family: ui-sans-serif, system-ui, sans-serif;
    padding: 1rem;
    width: 100%;
  }
  .c-bmi fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }
  .c-bmi__group-text {
    display: none;
    font-size: small;
    order: 2;
    padding: 1rem 0;
    text-align: left;
    width: 100%;
  }
  .c-bmi__groups {
    border: 0;
    flex-wrap: wrap;
    font-size: x-small;
    padding: 0;
    text-align: center;
    width: 50%;
    margin: auto;
    color: white;
  }
  .c-bmi__groups label {
    display: block;
    padding: 0.5rem;
    position: relative;
  }
  .bmiDiv label {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
  [for="bmi-g0"] {
    background-color: #4691e2;
  }
  [for="bmi-g1"] {
    background-color: #0cb764;
  }
  [for="bmi-g2"] {
    background-color: #febf18;
  }
  [for="bmi-g3"] {
    background-color: #fc8711;
  }
  [for="bmi-g4"] {
    background-color: #ff6455;
  }
  [for="bmi-g5"] {
    background-color: #cc1100;
    color: #fff;
  }

  .c-bmi__groups input:checked + label::before {
    background-color: #fff;
    clip-path: polygon(0% 0%, 0% 100%, 75% 50%);
    content: "";
    display: inline-block;
    height: 1rem;
    left: 0.5rem;
    position: absolute;
    top: 0.35rem;
    width: 1rem;
  }
  .c-bmi__groups input:checked + label + div {
    display: block;
    flex: 0 0 100%;
  }
  .c-bmi__label {
    display: block;
    font-size: medium;
    margin: 0 0 1rem 0;
    position: relative;
  }
  .c-bmi__label output {
    position: absolute;
    right: 0;
    top: 0;
  }
  .c-bmi__range {
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    outline: none;
    width: 100%;
  }
  .c-bmi__range::-webkit-slider-runnable-track {
    background-image: linear-gradient(
      to bottom,
      transparent 45%,
      lightslategray 45%,
      lightslategray 55%,
      transparent 55%
    );
  }
  .c-bmi__range::-moz-range-track {
    background-image: linear-gradient(
      to bottom,
      transparent 45%,
      lightslategray 45%,
      lightslategray 55%,
      transparent 55%
    );
  }
  .c-bmi__range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: hsl(225, 100%, 20%);
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
  }
  .c-bmi__range::-moz-range-thumb {
    appearance: none;
    background-color: hsl(225, 100%, 20%);
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
  }
  .c-bmi__range:focus::-webkit-slider-thumb {
    background-color: hsl(225, 30%, 60%);
    box-shadow: inset 0 0 0 0.25rem hsl(225, 100%, 20%);
  }
  .c-bmi__range:focus::-moz-range-thumb {
    background-color: hsl(225, 30%, 60%);
    box-shadow: inset 0 0 0 0.25rem hsl(225, 100%, 20%);
  }
  .c-bmi__result {
    display: block;
    font-size: 200%;
    margin-bottom: 1.5rem;
    text-align: right;
  }
  .c-bmi [type="radio"] {
    display: none;
  }

  /* RWD */
  @media (min-width: 1500px) {
    .c-bmi__groups {
      display: flex;
    }
    .c-bmi__groups input:checked + label::before {
      background-color: inherit;
      clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
      left: 50%;
      top: -1rem;
      transform: translateX(-50%);
      width: 1.5rem;
    }
    .c-bmi__groups label {
      flex: 1;
    }
    [for="bmi-g0"] {
      border-radius: 0.25rem 0 0 0.25rem;
    }
    [for="bmi-g5"] {
      border-radius: 0 0.25rem 0.25rem 0;
    }
  }

  @media (max-width: 905px) {
    .c-bmi__groups {
      width: 100%;
    }
  }

  /* For this demo */
  body {
    max-width: 40rem;
    margin: 1rem auto;
  }
`;
