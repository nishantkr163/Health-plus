import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../Images/Logo.png'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { IconButton } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


const Navbar = () => {
  return (
      <div className={styles.navbar}>
        <img width={"150px"} src={logo} alt="" />
        <div className={styles.navbarData}>
            <div>
                <div className={styles.contacts}>
                    <div><EmailOutlinedIcon /><span>healthplus@gmail.com</span></div>
                    <span>/</span>
                    <div><CallIcon /><span style={{color : "#DB2A24"}}>(732) 803-010-03</span></div>
                    <span>/</span>
                    <div className={styles.socialIcon}><FacebookIcon /><TwitterIcon /><PinterestIcon /></div>
                </div>
            </div>
            <div className={styles.navbarLink}>
                <Link className={styles.routes} to="/">HOME</Link>
                <Link className={styles.routes} to='/about'>ABOUT</Link>
                <Link className={styles.routes} to="/products">PRODUCT</Link>
                <Link className={styles.routes} to="/signup">JOIN US</Link>
                <IconButton>
                    <div className={styles.searchButton}>
                        <SearchRoundedIcon sx={{color : 'white'}} />
                    </div>
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Navbar