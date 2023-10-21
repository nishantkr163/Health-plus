import React from "react";
import Footer from "../Components/Footer";
import { styled } from "styled-components";

const About = () => {
  return (
    <>
    <DIV>
      <div class="about-section">
        <div class="inner-container">
          <h1>About Us</h1>
          <p class="text">
          Welcome to Health+ - Your Ultimate Destination for Health and Fitness!

<p className="mt-3">At Health+, we are dedicated to helping you achieve your health and fitness goals. Our team of experienced professionals is here to provide you with expert guidance, workout routines, nutrition tips, and the latest health information to ensure you lead a healthier and more active life.</p>

<p className="mt-3">With a focus on evidence-based practices and a commitment to your well-being, Health+ is your go-to resource for all things health and fitness. Whether you're a fitness enthusiast, a beginner, or someone looking to make positive lifestyle changes, we've got you covered. We believe that everyone deserves to live a healthy and vibrant life, and we're here to support you every step of the way.</p>

<p className="mt-3">Explore our website for a wide range of articles, workout plans, dietary advice, and much more. Join our community of health-conscious individuals, and let's embark on this journey to better health and fitness together!</p>
          </p>
          <div class="skills">
            <span>Wellness</span>
            <span>Nutrition</span>
            <span>Exercise</span>
          </div>
        </div>
      </div>
    </DIV>
      <Footer></Footer>
    </>
  );
};

export default About;

const DIV = styled.div`
  *{
    margin: 0;
    padding: 0;
    font-family: "Open Sans",sans-serif;
    box-sizing: border-box;
}

body{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;
}

.about-section{
    background: url(https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?auto=format&fit=crop&q=80&w=2746&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat left;
    background-size: 55%;
    background-color: #fdfdfd;
    overflow: hidden;
    padding: 100px 0;
}

.inner-container{
    width: 55%;
    float: right;
    background-color: #fdfdfd;
    padding: 150px;
}

.inner-container h1{
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 900;
}

.text{
    font-size: 13px;
    color: #545454;
    line-height: 30px;
    text-align: justify;
    margin-bottom: 40px;
}

.skills{
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 13px;
}

@media screen and (max-width:1200px){
    .inner-container{
        padding: 80px;
    }
}

@media screen and (max-width:1000px){
    .about-section{
        background-size: 100%;
        padding: 100px 40px;
    }
    .inner-container{
        width: 100%;
    }
}

@media screen and (max-width:600px){
    .about-section{
        padding: 0;
    }
    .inner-container{
        padding: 60px;
    }
}
`