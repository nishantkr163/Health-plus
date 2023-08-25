import React from "react";
import style from "./Footer.module.css";
import logo from "../Images/Logo.png";
import { Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HandshakeIcon from '@mui/icons-material/Handshake';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SendIcon from '@mui/icons-material/Send';


const Footer = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.footerOne}>
        <img style={{ padding: "10px" }} width={"150px"} src={logo} alt="" />
        <Typography
          m="auto"
          fontWeight="bold"
          className={style.class}
          fontFamily="Oswald"
          color="grey"
          variant="body1"
          textAlign="left"
          p="20px 10px"
        >
          Elevate your fitness journey with Health+, your trusted partner in
          achieving a healthier lifestyle. Explore our comprehensive resources,
          expert guidance, and community support to make wellness a way of life.
        </Typography>
        <div className={style.socialHandle}>
          <FacebookRoundedIcon />
          <GoogleIcon />
          <PinterestIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
      <div className={style.footerTwo}>
        <Typography
          m="auto"
          fontWeight="bold"
          className={style.class}
          fontFamily="Oswald"
          color="grey"
          variant="h4"
          textAlign="left"
          p="20px 20px"
        >
          Active Link
        </Typography>
        <div className={style.activeLink}>
          <Link className={style.routes} to="/">
            <HomeIcon /> HOME 
          </Link> 
          <Link className={style.routes} to="/about">
            <InfoIcon /> ABOUT
          </Link>
          <Link className={style.routes} to="/products">
            <ShoppingCartIcon /> PRODUCT
          </Link>
          <Link className={style.routes} to="/signup">
            <HandshakeIcon /> JOIN US
          </Link>
        </div>
      </div>
      <div className={style.footerThree}>
      <Typography
          m="auto"
          fontWeight="bold"
          className={style.class3}
          fontFamily="Oswald"
          color="grey"
          variant="h4"
          textAlign="left"
          p="20px 20px"
        >
          Unlock a healthier you. <span style={{color : "#DB2A24"}} >Subscribe to our newsletter</span> to receive health and fitness tips, motivational stories, and exclusive offers tailored just for you. <FormatQuoteIcon />
        </Typography>
        <div className={style.input}>
          <input className={style.inputField} type="email" placeholder="youremailID@gmail.com" />
          <div className={style.button}> <SendIcon className={style.sendButton} /> </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
