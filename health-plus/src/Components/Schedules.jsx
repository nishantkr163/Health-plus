import React from 'react'
import style from './Schedules.module.css'
import { Typography} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Schedules = () => {
  return (
    <><Typography
    fontWeight="bold"
    className={style.class}
    fontFamily="Oswald"
    color="#DB2A24"
    variant="h3"
  >
    CHECK OUR CLASSES SCHEDULE
  </Typography>

  <div className={style.schedule}>
    <div className={style.days}>
      <div>
        <AccessTimeIcon fontSize="large" style={{ color: "white" }} />
      </div>
      <div>Monday</div>
      <div>Tuesday</div>
      <div>Wednesday</div>
      <div>Thrusday</div>
      <div>Friday</div>
      <div>Saturday</div>
    </div>
    <div className={style.eight}>
      <div className={style.time}>8:00 AM</div>
      <div className={style.activites}>Weight Lifting</div>
      <div className={style.activites}>Aerobics</div>
      <div className={style.activites}></div>
      <div className={style.activites}>Power Yoga</div>
      <div className={style.activites}>Cardio</div>
      <div className={style.activites}>Weight Lifting</div>
    </div>
    <div className={style.ten}>
      <div className={style.time}>10:00 AM</div>
      <div className={style.activites}>Cardio</div>
      <div className={style.activites}>Power Yoga</div>
      <div className={style.activites}></div>
      <div className={style.activites}>Aerobics</div>
      <div className={style.activites}>Weight Lifting</div>
      <div className={style.activites}>Power Yoga</div>
    </div>
    <div className={style.twelve}>
      <div className={style.time}>12:00 PM</div>
      <div className={style.activites}>Power Yoga</div>
      <div className={style.activites}>Weight Lifting</div>
      <div className={style.activites}>Zumba Dance</div>
      <div className={style.activites}></div>
      <div className={style.activites}></div>
      <div className={style.activites}>Aerobics</div>
    </div>
    <div className={style.five}>
      <div className={style.time}>5:00 PM</div>
      <div className={style.activites}></div>
      <div className={style.activites}>Power Yoga</div>
      <div className={style.activites}>Cardio</div>
      <div className={style.activites}>Zumba Dance</div>
      <div className={style.activites}>Weight Lifting</div>
      <div className={style.activites}>Aerobics</div>
    </div>
    <div className={style.seven}>
      <div className={style.time}>7:00 PM</div>
      <div className={style.activites}>Zumba Dance</div>
      <div className={style.activites}>Cardio</div>
      <div className={style.activites}>Power Yoga</div>
      <div className={style.activites}>Weight Lifting</div>
      <div className={style.activites}>Aerobics</div>
      <div className={style.activites}></div>
    </div>
  </div>
  </>
  )
}

export default Schedules