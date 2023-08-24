import React from 'react'
import style from './Program.module.css'
import { Typography} from "@mui/material";

const Program = () => {
  return (
    <div style={{ textAlign : 'center' }}>
    <Typography m='auto'
        fontWeight="bold"
        className={style.class}
        fontFamily="Oswald"
        color="#DB2A24"
        variant="h3"
      >
        OUR PROGRAMS
      </Typography>
      <br />
    <div className={style.program}>
        <div className={style.oneP}></div>
        <div className={style.twoP}>
          <h1 className={style.programTitle}>Cardio</h1>
        </div>
        <div className={style.threeP}>
          <h1 className={style.programTitle}>Live Yoga Classes</h1>
        </div>
        <div className={style.fourP}></div>
        <div className={style.fiveP}>
          <h1 className={style.programTitle}>Zumba</h1>
        </div>
      </div>
    </div>
  )
  
}

export default Program