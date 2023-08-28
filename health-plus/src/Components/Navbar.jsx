import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../Images/Logo.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { LabelContext } from "../labelDataContext";

const Navbar = () => {
  const value = useContext(LabelContext);
  console.log("value", value);
  const screenWidth = window.innerWidth;

  console.log(`Screen width: ${screenWidth}px`);
  const [screen, setScreen] = useState(417)

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  useEffect(()=> {
    const screenWidth = window.innerWidth;
    console.log(`Screen width: ${screenWidth}px`);
  }, [])

  const showHamburgerMenu = screenWidth<=420;
  console.log(showHamburgerMenu)

  return (
    <div className={styles.navbar}>
      <img style={{ padding: "10px" }} width={"150px"} src={logo} alt="" />
      <div className={styles.hamb} >
        <IconButton onClick={handleDrawerOpen}>
          {" "}
          <MenuIcon sx={{ fontSize: "40px", color: "white" }} />{" "}
        </IconButton>
      </div>
      <div className={styles.normal}>
        <div className={styles.navbarData}>
          <div>
            <div className={styles.contacts}>
              <div>
                <EmailOutlinedIcon />
                <span>healthplus@gmail.com</span>
              </div>
              <span>/</span>
              <div>
                <CallIcon />
                <span style={{ color: "#DB2A24" }}>(732) 803-010-03</span>
              </div>
              <span>/</span>
              <div className={styles.socialIcon}>
                <FacebookIcon />
                <TwitterIcon />
                <PinterestIcon />
              </div>
            </div>
          </div>
          <div className={styles.navbarLink}>
            <Link className={styles.routes} to="/">
              HOME
            </Link>
            <Link className={styles.routes} to="/about">
              ABOUT
            </Link>
            <Link className={styles.routes} to="/products">
              PRODUCT
            </Link>
            {value.logged ? (
              <>
                <p
                  style={{
                    color: "white",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    value.handleProf();
                  }}
                >
                  MY PROFILE
                </p>
                <p
                  onClick={() => {
                    value.handleCart();
                  }}
                  style={{
                    color: "white",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  CART
                </p>
              </>
            ) : (
              <Link className={styles.routes} to="/signup">
                JOIN US
              </Link>
            )}
            <IconButton>
              <div className={styles.searchButton}>
                <SearchRoundedIcon sx={{ color: "white" }} />
              </div>
            </IconButton>
          </div>
        </div>
      </div>
      {drawerOpen ? (
        <div className={styles.hamburger}>
          <CloseIcon
            onClick={handleDrawerClose}
            sx={{ fontSize: "40px", color: "white" }}
          />
          <Link className={styles.routes} to="/">
            HOME
          </Link>
          <Link className={styles.routes} to="/about">
            ABOUT
          </Link>
          <Link className={styles.routes} to="/products">
            PRODUCT
          </Link>
          {value.logged ? (
            <>
              <p
                style={{
                  color: "white",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
                onClick={() => {
                  value.handleProf();
                }}
              >
                MY PROFILE
              </p>
              <p
                onClick={() => {
                  value.handleCart();
                }}
                style={{
                  color: "white",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              >
                CART
              </p>
            </>
          ) : (
            <Link className={styles.routes} to="/signup">
              JOIN US
            </Link>
          )}
          <IconButton>
            <div className={styles.searchButton}>
              <SearchRoundedIcon sx={{ color: "white" }} />
            </div>
          </IconButton>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
