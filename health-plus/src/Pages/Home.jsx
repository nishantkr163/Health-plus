import React from "react";
import style from "./Home.module.css";
import { Typography } from "@mui/material";
import FaqAndTestimonial from "../Components/FaqAndTestimonial";
import Schedules from "../Components/Schedules";
import Program from "../Components/Program";
import Coaches from "../Components/Coaches";
import Bmi from "../Components/Bmi";
import Footer from "../Components/Footer";
export const Home = () => {
  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.divOne}>
          <div className={style.oneContent}>
            <Typography
              className={style.title}
              variant="h5"
              fontFamily="Oswald"
              fontWeight="bold"
            >
              Meet Our Professional Trainers
            </Typography>
            <Typography
              className={style.subTitle}
              variant="body1"
              fontFamily="Oswald"
              fontWeight="bold"
            >
              Expert Guidance for Your Fitness Journey
            </Typography>
          </div>
        </div>
        <div className={style.divTwo}>
          <div className={style.twoContent}>
            <Typography
              className={style.title}
              variant="h5"
              fontFamily="Oswald"
              fontWeight="bold"
            >
              Premium Health Solutions
            </Typography>
            <Typography
              className={style.subTitle}
              variant="body1"
              fontFamily="Oswald"
              fontWeight="bold"
            >
              Where Quality Meets Wellness
            </Typography>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Schedules />
      <br />
      <Program />
      <Bmi />
      <br />
      <br />
      <Typography
        className='professional'
        fontWeight="bold"
        fontFamily="Oswald"
        color="#DB2A24"
        variant="h3"
      >
        MEET OUR PROFESSIONAL COACHES
      </Typography>
      <Coaches />
      <br />
      <br />
      <FaqAndTestimonial />
      <br />
      <br />
      <Footer />
    </>
  );
};
